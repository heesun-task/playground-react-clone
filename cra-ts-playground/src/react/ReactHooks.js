import ReactCurrentDispatcher from './ReactCurrentDispatcher'

function resolveDispatcher() {
  const dispatcher = ReactCurrentDispatcher.current;
  return dispatcher;
}

export function useEffect(create, inputs) {
  const dispatcher = resolveDispatcher(); // ReactCurrentDispatcher 에서 가져온 것
  return dispatcher.useEffect(create, inputs);
}
