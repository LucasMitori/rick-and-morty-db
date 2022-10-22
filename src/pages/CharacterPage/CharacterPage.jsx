import Header from "../../components/Header/Header";
import {
  ButtonBack,
  Character,
  CharacterInformation,
  CharacterSpace,
} from "./styles";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const CharacterPage = () => {
  let data = useLocation();
  console.log(data.state.character);

  let date = data.state.character.created;
  let newDate = date.slice(0, 10);

  let statusChar = data.state.character.status;
  return (
    <>
      <Header />
      <CharacterSpace>
        <ButtonBack to={"/home"}>Voltar</ButtonBack>
        <Character>
          <CharacterInformation statusChar={statusChar}>
            <h1>{data.state.character.name}</h1>
            <img
              src={data.state.character.image}
              alt={data.state.character.name}
            ></img>
            <h2>
              <span>Created in:</span> {newDate}
            </h2>
            <h2>
              <span>Gender:</span> {data.state.character.gender}
            </h2>
            <h2>
              <span>Origin:</span> {data.state.character.origin.name}
            </h2>
            <h2>
              <span>Tag Number:</span> # {data.state.character.id}
            </h2>
            <h2>
              <span>Species:</span> {data.state.character.species}
            </h2>
            <h2>
              <span>Condition:</span> <button></button>{" "}
              {data.state.character.status}
            </h2>
            <h2>
              <span>Location:</span> {data.state.character.location.name}
            </h2>

            <Link>
              <span>List of Episodes:</span> Check This out!
            </Link>
          </CharacterInformation>
        </Character>
      </CharacterSpace>
    </>
  );
};

export default CharacterPage;
