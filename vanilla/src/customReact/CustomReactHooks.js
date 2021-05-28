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


const CustomReactHooks = (() => {

  // function customUseState({
  //   value,
  // }) {
  //   return {
  //     value: value,
  //     hookName: 'useState',
  //   };
  // }

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
    let memorizedValue = hooks[idx]?.memorizedValue;

    if( isDepsChanged(hooks, idx, deps) ) {
      memorizedValue = factory();
    }

    return {
      deps,
      memorizedValue,
      hookName: 'useMemo',
    };
  }

  return {
    // customUseState,
    customUseEffect,
    customUseMemo,
  };
})();

export default CustomReactHooks;
