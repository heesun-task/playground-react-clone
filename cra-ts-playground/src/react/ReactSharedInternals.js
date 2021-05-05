// ReactSharedInternals.js는 외부에서 주입받길 기다리는 모듈들의 대기소 같은 곳이다.
// ReactCurrentDispatcher 또한 여기서 훅을 주입받길 기다린다.

import ReactCurrentDispatcher from "./ReactCurrentDispatcher";

const ReactSharedInternals = {
  ReactCurrentDispatcher,
};

export default ReactSharedInternals;
