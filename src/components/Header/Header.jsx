import { useContext } from "react";
import { CharContext } from "../../context/CharContext";
import { ButtonSpace, HeaderSpace } from "./styles";

const Header = () => {
  const { getOneCharacter, getCharacters } = useContext(CharContext);

  const handleSubmit = (event) => {
    event.preventDefault(0);
    getOneCharacter(event.target[0].value);
  };

  const resetThisEra = () => {
    getCharacters();
  };
  return (
    <>
      <HeaderSpace>
        <h2>Rick and Morty Database</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Search for your favourite character</label>
          <ButtonSpace>
            <input type="text" placeholder="Type the name you desire" />
            <button>Search</button>
          </ButtonSpace>
          <button onClick={() => resetThisEra()}>Reset</button>
        </form>
      </HeaderSpace>
    </>
  );
};

export default Header;
