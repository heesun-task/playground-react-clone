// customReact
import CustomReactHooks from "./CustomReactHooks";

const CustomReact = (() => {
  let hooks = [];
  let idx = 0;

  const render = (component) => {
    idx = 0;
    const c = component()
    c.render()
    return c
  }

  const updateHook = (index, content) => {
    hooks[index] = content;
    idx += 1;
  };

  const useState = (initialState) => {
    const _idx = idx;
    let state = hooks[_idx] || initialState;

    const setState = (newState) => {
      hooks[_idx] = newState;
    };
    idx++;

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