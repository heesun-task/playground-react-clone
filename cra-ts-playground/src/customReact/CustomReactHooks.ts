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

  function useEffect(callback: () => void, deps: any[]) {
    const _idx = idx;
    if( isDepsChanged(_idx, deps) ) {
      callback();
    }

    hooks[_idx] = {
      deps,
      hookName: 'useEffect',
    };
    idx ++;
  }

  function useMemo(factory: () => void, deps: any[]) {
    const _idx = idx;
    let value = hooks[idx]?.memorizedValue;

    if( isDepsChanged(_idx, deps) ) {
      value = factory();
      hooks[_idx] = {
        deps,
        ...hooks[_idx],
        memorizedValue: value
      };
    }

    hooks[_idx] = {
      deps,
      ...hooks[_idx],
      hookName: 'useMemo',
    };
    idx ++;

    return value;
  }

  return {
    useEffect,
    useMemo,
  }
});