// export type HookType =
//   | 'useEffect'
//   | 'useMemo'
//   | 'usePlease';

// let depsList = [];
// let idx = 0;
let JUST_FOR_DEV = [];

export const dispatch = (currentHook, callback, deps) => {
  // console.log('start',[...depsList],idx,[...depsList][idx])
  // let prevDeps = [...depsList][idx];
  //
  // // test
  // const HOOKNAME = currentHook.toString().split('function',)[1].split('(')[0];
  // JUST_FOR_DEV[idx] = {idx, deps, currentHook, hookName: HOOKNAME};
  // // console.log(HOOKNAME,'@',oldPrevDeps,oldIdx, oldPrevDeps[oldIdx-1])
  // //
  //
  // depsList[idx] = deps;
  // idx ++;
  //
  // console.log(HOOKNAME,'isDepsChanged',
  //   prevDeps, deps)
  // const isChanged = isDepsChanged(prevDeps,deps)
  // if(isChanged) {
    return currentHook(
      callback,
      deps
    );
  // }
}