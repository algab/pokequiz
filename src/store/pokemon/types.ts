type Sprites = {
  front_default: string;
};

export type Pokemon = {
  name: string;
  sprites: Sprites;
};

export type StatePokemon = {
  loading: boolean,
  error: boolean,
  id: number | undefined,
  data: Pokemon
};
