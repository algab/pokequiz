import { takeLatest } from "redux-saga/effects";

import { searchPokemon } from "../pokemon/actions";

import { getPokemon } from "./pokemon";

export default function* rootSaga() {
  yield takeLatest(searchPokemon, getPokemon);
}
