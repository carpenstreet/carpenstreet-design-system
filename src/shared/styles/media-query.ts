const sizes = {
  mobile: 767,
  tablet: 1023,
};

type TMediaQuery = Record<keyof typeof sizes, string>;

const MediaQuery: TMediaQuery = {
  mobile: `@media screen and (max-width: ${sizes.mobile}px)`,
  tablet: `@media screen and (max-width: ${sizes.tablet}px)`,
};

export { MediaQuery };
