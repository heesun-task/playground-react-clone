// customReact
import { CustomReactHooks } from "./CustomReactHooks";

const { customUseEffect, customUseMemo } = CustomReactHooks();

const hooks = [];


const CustomHooks = () => {
  let idx = 0;

  const updateHook = (index, content) => {
    hooks[index] = { ...content };
    idx += 1;
  };

  const useEffect = (effect, deps) => {
    const _idx = idx;
    const content = customUseEffect({hooks, idx:_idx, effect, deps})

    updateHook(_idx, content)
  };

  const useMemo = (factory, deps) => {
    const _idx = idx;
    const content = customUseMemo({hooks, idx:_idx, factory, deps})

    updateHook(_idx, content)
    return content.memorizedValue;
  };

  return {
    useEffect,
    useMemo,
  }
};

export default CustomHooks