import React, { useState } from 'react';

// export const customReactHooks = (function () {
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

let customReactHooks = [];
let idx = 0;

const state = {
  memorized: [],

}
export function useEffect(callback, deps) {
  const oldDeps = customReactHooks[idx];
  let hasChanged = true;
  if (oldDeps) {
    hasChanged = deps.some((x, i) => !Object.is(x, oldDeps[i]));
  }
  if (hasChanged) {
    callback();
  }
  customReactHooks[idx] = deps;
}



export function usePlease(callback, deps) {
  console.log(this)

  console.log('usePlease',callback(),deps)


}