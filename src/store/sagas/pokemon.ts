import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";

import { getAlternatives, randomNumber } from "../../utils/alternatives";

import pokemons from "../../assets/json/pokemons.json";

import { addPokemon, failedPokemon } from "../pokemon/actions";

import api from "../../services/axios";

export function* getPokemon() {
  try {   
    const alternatives = getAlternatives();
    const id = alternatives[randomNumber(4)] + 1;
    const names: string[] = [];
    alternatives.forEach((item) => names.push(pokemons[item]));
    const result: AxiosResponse = yield call(() =>
      api.get(`/pokemon/${id}`)
    );
    yield put(addPokemon({ id, options: names.sort(() => Math.random() - 0.5), pokemon: result.data }));
  } catch (error) {   
    yield put(failedPokemon());
  }
}
