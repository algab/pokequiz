import pokeball from "../../assets/img/pokeball.png";

import "./styles.css";

const Loading: React.FC = () => {
  return (
    <img src={pokeball} alt="Loading Pokémon" className="loading-img loading-rotate" />
  );
};

export default Loading;
