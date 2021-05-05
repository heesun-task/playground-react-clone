import {
  CustomReactHooks as React,
} from './CustomReactHooks'

export function useEffect (callback, deps) {
  React.useEffect(callback,deps);
}

export function useMemo (factory, deps) {
  return React.useMemo(factory,deps);
}