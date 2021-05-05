import {
  dispatch
} from "./disptach";

export function useEffect (callback, deps) {
  dispatch('useEffect', callback, deps)
}

export function useMemo (factory, deps) {
  dispatch('useMemo', factory, deps)
}

export function usePlease (callback, deps) {
  dispatch('usePlease', callback, deps)
}