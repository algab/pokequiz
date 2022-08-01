import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import saga from "./sagas";
import { reducerPokemon } from "./pokemon/reducer";

const sageMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    pokemon: reducerPokemon,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat([sageMiddleware]),
});

sageMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
