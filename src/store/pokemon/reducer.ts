import { createReducer } from "@reduxjs/toolkit";

import { addPokemon, failedPokemon, loadingPokemon } from "./actions";

import { Pokemon, StatePokemon } from "./types";

const initialState: StatePokemon = {
  loading: true,
  error: false,
  id: 0,
  options: [],
  data: {} as Pokemon
};

export const reducerPokemon = createReducer(initialState, (builder) => {
  builder.addCase(addPokemon, (state, action) => {
    return {
      ...state,
      loading: false,
      id: action.payload.id,
      options: action.payload.options,
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
  .addCase(loadingPokemon, (state) => {   
    return {
      ...state,
      error: false,
      loading: true
    }
  })
});