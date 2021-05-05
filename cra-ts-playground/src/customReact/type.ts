type HookNames =
  'useEffect'
  | 'useMemo';

export type HooksType = {
  memorizedValue?: any,
  cleanupEffect?: any;

  deps: any,
  hookName: HookNames,
}