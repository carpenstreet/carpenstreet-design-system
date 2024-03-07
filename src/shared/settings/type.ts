// [24.03.06] 현재는 사용하지 않지만, acon에 남아있는 부분들을 위해 남겨둠
export type ThemeMode = 'game' | 'toon' | undefined;

export type SettingsContextProps = {
  themeMode: ThemeMode;
  isReady: boolean;
};
