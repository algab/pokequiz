import { useNavigate } from "react-router-dom";

import "./styles.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("quiz");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">PokéQuiz</h1>
      <button className="home-button" onClick={startQuiz}>Iniciar</button>
    </div>
  )
}

export default Home;
