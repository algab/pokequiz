import { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import ToastContext from "../../context/Toast";
import { Toast } from "../../context/Toast/types";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { loadingPokemon, searchPokemon } from "../../store/pokemon/actions";

import "./styles.css";

const Quiz: React.FC = () => {
  const { handleToast } = useContext<Toast>(ToastContext);

  const dispatch = useDispatch();
  const { loading, data, error, options } = useSelector((state: RootState) => state.pokemon);

  const mountQuiz = useCallback(async () => {
    dispatch(loadingPokemon());
    dispatch(searchPokemon());
  }, [dispatch]);

  useEffect(() => {
    mountQuiz();
  }, [mountQuiz]);

  const answer = (value: string) => {
    if (value === data?.name) {
      handleToast({ message: "Você acertou !", type: "success" });
      mountQuiz();
    } else {
      handleToast({ message: "Ops! Tente novamente!", type: "error" });
    }
  };

  return (
    <div className="quiz-container">
      {!loading && !error && (
        <>
          <p className="quiz-title">Quem é esse Pokémon ?</p>
          <div>
            <img
              className="quiz-img"
              src={data?.sprites.front_default}
              alt="Pokemon"
            />
          </div>
          <div className="quiz-alternatives">
            <div className="quiz-alternative-column">
              <button className="quiz-btn" onClick={() => answer(options[0])}>
                {options[0]}
              </button>
              <button className="quiz-btn" onClick={() => answer(options[2])}>
                {options[2]}
              </button>
            </div>
            <div className="quiz-alternative-column">
              <button className="quiz-btn" onClick={() => answer(options[1])}>
                {options[1]}
              </button>
              <button className="quiz-btn" onClick={() => answer(options[3])}>
                {options[3]}
              </button>
            </div>
          </div>
        </>
      )}
      {loading && !error && <Loading />}
      {!loading && error && <Error />}
    </div>
  );
};

export default Quiz;
