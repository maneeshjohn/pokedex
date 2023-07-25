export interface PokeListItem {
  name: string;
  url: string;
}

export interface PokeStore {
  list: PokeListItem[];
}
