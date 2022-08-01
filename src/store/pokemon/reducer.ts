import { createReducer } from "@reduxjs/toolkit";

import { addPokemon, failedPokemon, loadingPokemon } from "./actions";

import { Pokemon, StatePokemon } from "./types";

const initialState: StatePokemon = {
  loading: true,
  error: false,
  id: undefined,
  data: {} as Pokemon
};

export const reducerPokemon = createReducer(initialState, (builder) => {
  builder.addCase(addPokemon, (state, action) => {
    return {
      ...state,
      loading: false,
      id: action.payload.id,
      data: action.payload.pokemon
    }
  })
  .addCase(failedPokemon, (state) => {  
    return {
      ...state,
      error: true,
      loading: false,
    }
  })
  .addCase(loadingPokemon, (state, action) => {   
    return {
      ...state,
      loading: true
    }
  })
});