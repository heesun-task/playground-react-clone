import { useEffect } from "./ReactHooks";
import ReactSharedInternals from "./ReactSharedInternals";

const React = {
  useEffect,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals, // 무서운 이름..
};

export default React;
