import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";

import { addPokemon, failedPokemon } from "../pokemon/actions";

import api from "../../services/axios";

export function* getPokemon(action: any) {
  try {
    const result: AxiosResponse = yield call(() =>
      api.get(`/pokemon/${action.payload}`)
    );
    yield put(addPokemon({ id: action.payload, pokemon: result.data }));
  } catch (error) {
    yield put(failedPokemon);
  }
}
