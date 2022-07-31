import { createReducer } from "@reduxjs/toolkit";

import { addPokemon, failedPokemon, searchPokemon } from "./actions";

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
      data: action.payload
    }
  })
  .addCase(failedPokemon, (state) => {  
    return {
      ...state,
      error: true,
      loading: false,
    }
  })
  .addCase(searchPokemon, (state, action) => {   
    return {
      ...state,
      loading: true,
      id: action.payload
    }
  })
});