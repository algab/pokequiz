import pokeball from "../../assets/img/pokeball.png";

import "./styles.css";

const Error: React.FC = () => {
  return (
    <>
      <img src={pokeball} alt="Error" className="error-img" />
      <h1 className="error-title">Ops!</h1>
      <p className="error-description">Estamos com problema para acessar nossa PokéDex !</p>
      <button className="error-button">Tentar novamente</button>
    </>
  );
};

export default Error;
