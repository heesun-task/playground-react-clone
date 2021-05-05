type HookNames =
  'useEffect'
  | 'useMemo';

export type HooksType = {
  memorizedValue?: any,

  deps: any,
  hookName: HookNames,
}