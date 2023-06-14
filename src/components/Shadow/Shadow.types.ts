import { ReactElement } from "react";

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;
type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
export type TShadowVariant = Range<1, 25>;

export interface IShadowProps {
  variant: TShadowVariant;
  children: ReactElement;
}
