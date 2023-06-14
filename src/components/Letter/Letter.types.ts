import { TColor } from '@shared/settings/color.type';
import { ReactNode } from "react";

type TMinimal = 'letter/en, ko/minimal' | 'letter/en, ko/minimal/bold' | 'letter/en, ko/minimal/black';
type TMinimalGlobal = 'letter/ja/minimal' | 'letter/ja/minimal/bold' | 'letter/ja/minimal/black';

type TTiny = 'letter/en, ko/tiny' | 'letter/en, ko/tiny/bold' | 'letter/en, ko/tiny/black';
type TTinyGlobal = 'letter/ja/tiny' | 'letter/ja/tiny/bold' | 'letter/ja/tiny/black';

type TSmall = 'letter/en, ko/small' | 'letter/en, ko/small/bold' | 'letter/en, ko/small/black';
type TSmallGlobal = 'letter/ja/small' | 'letter/ja/small/bold' | 'letter/ja/small/black';

type TMedium = 'letter/en, ko/medium' | 'letter/en, ko/medium/bold' | 'letter/en, ko/medium/black';
type TMediumGlobal = 'letter/ja/medium' | 'letter/ja/medium/bold' | 'letter/ja/medium/black';

type TLarge = 'letter/en, ko/large' | 'letter/en, ko/large/bold' | 'letter/en, ko/large/black';
type TLargeGlobal = 'letter/ja/large' | 'letter/ja/large/bold' | 'letter/ja/large/black';

type TGiant = 'letter/en, ko/giant' | 'letter/en, ko/giant/bold' | 'letter/en, ko/giant/black';
type TGiantGlobal = 'letter/ja/giant' | 'letter/ja/giant/bold' | 'letter/ja/giant/black';

type TMaximum = 'letter/en, ko/maximum' | 'letter/en, ko/maximum/bold' | 'letter/en, ko/maximum/black';
type TMaximumGlobal = 'letter/ja/maximum' | 'letter/ja/maximum/bold' | 'letter/ja/maximum/black';

export type TLetterVariant =
  | TMinimal
  | TMinimalGlobal
  | TTiny
  | TTinyGlobal
  | TSmall
  | TSmallGlobal
  | TMedium
  | TMediumGlobal
  | TLarge
  | TLargeGlobal
  | TGiant
  | TGiantGlobal
  | TMaximum
  | TMaximumGlobal;

export interface ILetterProps {
  variant?: TLetterVariant;
  color?: TColor;
  children: ReactNode | ReactNode[];
  className?: string;
}
