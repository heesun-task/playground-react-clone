import {
  HooksType,
} from "./type";

const hooks: HooksType[] = []; // independent

const isDepsChanged = (_idx, newDeps) => {
  const oldDeps = hooks[_idx]?.deps;
  let hasChanged = true;
  if ( oldDeps ) {
    hasChanged = newDeps.some((x, i) => {
      return !Object.is(x, oldDeps[i])
    });
  }
  return hasChanged;
};

export const CustomReactHooks = (function() {
  let idx = 0; // will rerender

  function useEffect(effect: () => void, deps: any[]) {
    const _idx = idx;
    let cleanupEffect = hooks[_idx]?.cleanupEffect;

    if( isDepsChanged(_idx, deps) ) {
      cleanupEffect?.()
      cleanupEffect = effect();
    }

    hooks[_idx] = {
      cleanupEffect,
      deps,
      hookName: 'useEffect',
    };
    idx ++;
  }

  function useMemo(factory: () => void, deps: any[]) {
    const _idx = idx;
    let memorizedValue = hooks[idx]?.memorizedValue;

    if( isDepsChanged(_idx, deps) ) {
      memorizedValue = factory();
    }

    hooks[_idx] = {
      deps,
      memorizedValue,
      hookName: 'useMemo',
    };
    idx ++;

    return memorizedValue;
  }

  return {
    useEffect,
    useMemo,
  }
});