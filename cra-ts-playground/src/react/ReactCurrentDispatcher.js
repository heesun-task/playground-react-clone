// 비어있다. 훅 객체는 외부에서 내부(ReactCurrentDispatcher.current)로 주입된다.
// 리액트는 의존성을 주입할 때 코어에 직접주입하지 않고, ReactSharedInternals.js 중간자를 통해 주입한다. (shared 패키지)

const ReactCurrentDispatcher = {
  current: null,
};

export default ReactCurrentDispatcher;
