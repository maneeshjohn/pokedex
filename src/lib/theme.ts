import type { Colors, Sizes } from "./types/theme";

const COLORS: Colors = {
  primary: '#242424',
  matte: '#343434',
  black: '#000000',
  white: '#ffffff',
  fire: '#e67e22',
  water: '#3498db',
  grass: '#2ecc71',
  electric: '#f1c40f',
  bug: '#BDC581',
  ice: '#25CCF7',
  ground: '#f0932b',
  rock: '#535c68',
  steel: '#7f8c8d',
  ghost: '#192a56',
  psychic: '#FC427B',
  dark: '#2c3e50',
  normal: '#eccc68',
  fighting: '#e74c3c',
  flying: '#9c88ff',
  poison: '#8e44ad',
  dragon: '#130f40',
  fairy: '#FD7272',
}

const SIZES: Sizes = {
  XXL: 2,
  XL: 1.5,
  L: 1.25,
  M: 1,
  S: .75,
  XS: .5,
  XXS: .25,
  D: .625,
}

const THEME = {
  colors: COLORS,
  sizes: SIZES,
}

export {
  COLORS,
  SIZES,
  THEME,
};
