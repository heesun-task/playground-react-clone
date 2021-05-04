import React from 'react';

// export const useEffect = (function () {
//   let prevDependencyArray = [];
//   return (callback, dependencyArray) => {
//     for (const i in dependencyArray) {
//       if (dependencyArray[i] !== prevDependencyArray[i]) {
//         prevDependencyArray = dependencyArray;
//         callback();
//         return;
//       }
//     }
//   };
// })();

let hooks = [];
let idx = 0;
export function useEffect(cb, depArray) {
  const oldDeps = hooks[idx];
  let hasChanged = true;
  if (oldDeps) {
    hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
  }
  if (hasChanged) {
    cb();
  }
  hooks[idx] = depArray;
}