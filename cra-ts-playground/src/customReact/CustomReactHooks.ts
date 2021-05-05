const hooks = []; // independent
const memorizedValue = [];

export const CustomReactHooks = (function() {
  let idx = 0; // rerender

  const isDepsChanged = (_idx, newDeps) => {
    const oldDeps = hooks[_idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = newDeps.some((x, i) => {
        return !Object.is(x, oldDeps[i])
      });
    }
    return hasChanged;
  }

   function useEffect(callback, deps) {
    const _idx = idx;
    if(isDepsChanged(_idx, deps)) {
      callback();
    }

    hooks[_idx] = deps;
    idx ++;
  }

   function useMemo(factory, deps) {
    const _idx = idx;
    let value = memorizedValue[_idx];

    if(isDepsChanged(_idx, deps)) {
      value =  factory();
      memorizedValue[_idx] = value;
    }

    hooks[_idx] = deps;
    idx ++;

    return value;
  }

  return {
    useEffect,
    useMemo,
  }
});