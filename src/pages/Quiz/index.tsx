import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import ToastContext from "../../context/Toast";
import { Toast } from "../../context/Toast/types";
import { searchPokemon } from "../../store/pokemon/actions";
import { getAlternatives, randomNumber } from "../../utils/alternatives";

import pokemons from "../../assets/json/pokemons.json";

import "./styles.css";

const Quiz: React.FC = () => {
  const [options, setOptions] = useState<string[]>([]);

  const { handleToast } = useContext<Toast>(ToastContext);

  const dispatch = useDispatch();
  const { loading, data } = useSelector((state: RootState) => state.pokemon);

  const loadOptions = useCallback((alternatives: number[]) => {
    let names: string[] = [];
    alternatives.forEach(item => names.push(pokemons[item]));
    names = names.sort(() => Math.random() - 0.5);
    setOptions(names);
  }, []);

  const mountQuiz = useCallback(async () => {
    const alternatives = getAlternatives();
    const number = randomNumber(4);
    loadOptions(alternatives);
    dispatch(searchPokemon(alternatives[number] + 1));
  }, [loadOptions, dispatch]);

  useEffect(() => {
    mountQuiz();
  }, [mountQuiz]);

  const answer = (value: string) => {
    if (value === data?.name) {
      handleToast({ message: "Você acertou !", type: "success" });
      mountQuiz();
    } else {
      handleToast({ message: "Ops! Você errou !", type: "error" });
    }
  };

  if (!loading) {
    return (
      <div className="quiz-container">
        <p className="quiz-title">Quem é esse Pokémon ?</p>
        <div>
          <img className="quiz-img" src={data?.sprites.front_default} alt="Pokemon" />
        </div>
        <div className="quiz-alternatives">
          <div className="quiz-alternative-column">
            <button className="quiz-btn" onClick={() => answer(options[0])}>{options[0]}</button>
            <button className="quiz-btn" onClick={() => answer(options[2])}>{options[2]}</button>
          </div>
          <div className="quiz-alternative-column">
            <button className="quiz-btn" onClick={() => answer(options[1])}>{options[1]}</button>
            <button className="quiz-btn" onClick={() => answer(options[3])}>{options[3]}</button>
          </div>
        </div>
      </div>
    )
  }
  return <></>
};

export default Quiz;
