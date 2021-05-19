const isDepsChanged = (hooks, _idx, deps) => {
  const oldDeps = hooks[_idx]?.deps;
  let hasChanged = true;

  if ( oldDeps ) {
    hasChanged = deps.some((x, i) => {
      return !Object.is(x, oldDeps[i])
    });
  }

  return hasChanged;
};


export const CustomReactHooks = (hookName) => {

  function customUseEffect({
    idx,
    hooks,
    effect,
    deps
  }) {
    let cleanupEffect = hooks[idx]?.cleanupEffect;

    if( isDepsChanged(hooks, idx, deps) ) {
      cleanupEffect?.()
      cleanupEffect = effect();
    }
    return {
      deps,
      cleanupEffect,
      hookName: 'useEffect',
    };
  }

  function customUseMemo({idx, hooks, factory, deps}) {
    const _idx = idx;
    let memorizedValue = hooks[idx]?.memorizedValue;

    if( isDepsChanged(hooks, _idx, deps) ) {
      memorizedValue = factory();
    }

    return {
      deps,
      memorizedValue,
      hookName: 'useMemo',
    };
  }

  return {
    customUseEffect,
    customUseMemo,
  };
};
