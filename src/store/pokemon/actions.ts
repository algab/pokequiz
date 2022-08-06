import { createAction } from "@reduxjs/toolkit";

import { ActionAddPokemon } from "./types";

export const addPokemon = createAction<ActionAddPokemon>('pokemon/addPokemon');
export const failedPokemon = createAction('pokemon/failedPokemon');
export const loadingPokemon = createAction('pokemon/loadingPokemon');
export const searchPokemon = createAction('pokemon/searchPokemon');
