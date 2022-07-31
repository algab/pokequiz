import { createAction } from "@reduxjs/toolkit";

import { Pokemon } from "./types";

export const addPokemon = createAction<Pokemon>('pokemon/addPokemon');
export const failedPokemon = createAction('pokemon/failedPokemon');
export const searchPokemon = createAction<number>('pokemon/searchPokemon');
