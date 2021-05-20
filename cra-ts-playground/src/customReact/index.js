// customReact
import CustomReactHooks from "./CustomReactHooks";

const hooks = [];

const CustomReact = (() => {
  let idx = 0;

  const render = (fn) => {
    idx = 0;
    return fn();
  }

  const updateHook = (index, content) => {
    hooks[index] = content;
    idx += 1;
  };

  const useState = (initialState) => {
    const _idx = idx;

    let state = () => hooks[_idx]?.state || initialState;
    updateHook(_idx, {state:  initialState});

    const setState = (newValue) => {
      hooks[_idx].state = newValue;
    };

    return [state, setState];
  };

  const useEffect = (effect, deps) => {
    const _idx = idx;
    const content = CustomReactHooks.customUseEffect({hooks, idx:_idx, effect, deps});

    updateHook(_idx, content);
  };

  const useMemo = (factory, deps) => {
    const _idx = idx;
    const content = CustomReactHooks.customUseMemo({hooks, idx:_idx, factory, deps});

    updateHook(_idx, content);
    return content.memorizedValue;
  };

  return {
    render,
    useState,
    useEffect,
    useMemo,
  }
})();

export default CustomReact;