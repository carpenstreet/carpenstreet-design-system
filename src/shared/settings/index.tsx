import React from 'react';
import ThemeMui from './ThemeMui';

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children }: Props) {
  return (
    <ThemeMui>
      {children}
    </ThemeMui>
  );
}
