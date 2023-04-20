export type ThemeMode = 'game' | 'toon' | undefined;

export type SettingsContextProps = {
  themeMode: ThemeMode;
  isReady: boolean;
};
