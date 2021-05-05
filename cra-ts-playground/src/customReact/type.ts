type HookNames =
  'useEffect'
  | 'useMemo';

export type HooksType = {
  memorizedValue?: any,
  cleanUpEffect?: any;

  deps: any,
  hookName: HookNames,
}