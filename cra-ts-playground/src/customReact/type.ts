type HookNames =
  'useEffect'
  | 'useMemo';

export type HookProps = {
  memorizedValue?: any,
  cleanupEffect?: any;

  deps: any,
  hookName: HookNames,
}