export function useEffect({hooks,idx}, callback, deps) {
  // console.log('@@useEffect');
  const oldDeps = hooks[idx];
  let hasChanged = true;
  if (oldDeps) {
    hasChanged = deps.some((x, i) => !Object.is(x, oldDeps[i]));
  }
  if (hasChanged) {
    callback();
  }
  hooks[idx] = deps;
  idx++;
}

export function useMemo({hooks,idx}, factory, deps) {
  const oldDeps = hooks[idx];
  let hasChanged = true;
  let value = null;
  if (oldDeps) {
    hasChanged = deps.some((x, i) => !Object.is(x, oldDeps[i]));
  }
  if (hasChanged) {
    value = factory();
  }
  hooks[idx] = deps;
  // console.log('@@useMemo', value);
  return value;
}

export function usePlease({hooks,idx},callback, deps) {
  console.log('@@usePlease');
}