import React from 'react';

export const CustomReact = (() => {
  let hooks = []
  let idx = 0;

  function useState(initVal) {
    const state = hooks[idx] || initVal
    const _idx = idx // 이 훅이 사용해야 하는 인덱스를 가둬둔다.
    const setState = newVal => {
      hooks[_idx] = newVal
    }
    idx++ // 다음 훅은 다른 인덱스를 사용하도록 한다.
    return [state, setState]
  }

  function useEffect(cb, depArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some(
        (dep, i) => !Object.is(dep, oldDeps[i])
      );
    }
    if (hasChanged) cb();
    hooks[idx] = depArray;
  }

  return { useState,useEffect }
})()


















// type Props = {
//     callback: Function,
//     deps: Array<any>,
// };
// export class useEffect extends CustomReact.PureComponent<Props> {
//     componentDidMount() {
//         this.props.callback();
//     }
//     componentDidUpdate(prevProps) {
//         const {deps, callback} = this.props;
//         const hasChangedDeps = prevProps ? !deps.every((el, i) => el === prevProps[i]) : true;
//         if (hasChangedDeps) {
//             callback();
//         }
//     }
//     componentWillUnmount() { console.log("UNMOUNT", this.props); }
//     render() {
//         return null;
//     }
// }

// // export const useEffect = (function () {
// //   let prevDependencyArray = [];
// //   return (callback, dependencyArray) => {
// //     for (const i in dependencyArray) {
// //       if (dependencyArray[i] !== prevDependencyArray[i]) {
// //         prevDependencyArray = dependencyArray;
// //         callback();
// //         return;
// //       }
// //     }
// //   };
// // })();
// let prevDeps = [];
// let hooks = [],
//   currentHook = 0
//
// export function makeCancelable(promise) {
//   let isCanceled = false;
//   const wrappedPromise =
//     new Promise((resolve, reject) => {
//       promise
//         .then((val) => (isCanceled ? reject({ isCanceled }) : resolve(val)))
//         .catch((error) => (isCanceled ? reject({ isCanceled }) : reject(error)));
//     });
//   return {
//     promise: wrappedPromise,
//     cancel() {
//       isCanceled = true;
//     },
//   };
// }
// export const makeCancelableFunction = (fn) => {
//     let hasCanceled = false;
//
//     return {
//         promise: (val) => new Promise((resolve, reject) => {
//             if (hasCanceled) {
//                 fn = null;
//             } else {
//                 fn(val);
//                 resolve(val);
//             }
//         }),
//         cancel() {
//             hasCanceled = true;
//         }
//     };
// };
//
// export function useEffect(callback, deps) {
//   console.log('hi',callback,deps)
//
// // const cancelablePromise = makeCancelable(
// //   new Promise(r => component.setState({...}}))
// // );
//
//   const hasNoDeps = !deps
//   const _deps = hooks[currentHook] // type: array | undefined
//   const hasChangedDeps = _deps ? !deps.every((el, i) => el === _deps[i]) : true
//   if (hasNoDeps || hasChangedDeps) {
//     callback()
//     hooks[currentHook] = deps
//   }
//   currentHook++ // 이 Hook에 대한 작업 완료
// }