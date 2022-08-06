import { all, takeLatest } from "redux-saga/effects";

import { searchPokemon } from "../pokemon/actions";

import { getPokemon } from "./pokemon";

export default function* rootSaga() {
  yield all([takeLatest(searchPokemon, getPokemon)]);
}
