import {
  useEffect,
  useMemo,
  usePlease
} from "./CustomReactHooks";

export type HookType = null
  | 'useEffect'
  | 'useMemo'
  | 'usePlease';

const Hooks = {
  ['useEffect']: useEffect,
  ['useMemo']: useMemo,
  ['usePlease']: usePlease,
}

export function dispatch (currentHookName: HookType, callback, deps) {
  let q = [];
  let idx = 0;

  const state = {
    hooks: q,
    idx,
  }

  console.log('@dispatch', currentHookName, q, idx)
  return Hooks[currentHookName](state, callback,deps);
}