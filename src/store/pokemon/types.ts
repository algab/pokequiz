type Sprites = {
  front_default: string;
};

export type Pokemon = {
  name: string;
  sprites: Sprites;
};

export type ActionAddPokemon = {
  id: number,
  options: string[],
  pokemon: Pokemon,
}

export type StatePokemon = {
  loading: boolean,
  error: boolean,
  id: number,
  options: string[],
  data: Pokemon
};
