// shared/ReactSharedInternals - core 모듈 ReactSharedInternals 과 이름이 같음
// 훅이 개발자에게 도달되는 흐름은 다음과 같습니다.
// reconciler -> shared/ReactSharedInternal -> react/ReactSharedInternal -> react/ReactCurrentDispatcher -> react/ReactHooks -> react -> 개발자

import React from 'react';

const ReactSharedInternals =
 React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null,
  }
}

export default ReactSharedInternals;
