import Header from "../../components/Header/Header";
import {
  ButtonBack,
  Character,
  CharacterInformation,
  CharacterSpace,
  EpisodeListButton,
} from "./styles";
import { useLocation } from "react-router";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const CharacterPage = () => {
  const [listEp, setListEp] = useState([]);
  let [showModal, setShowModal] = useState(false);

  const openModal = (list) => {
    setListEp(list);
    setShowModal(true);
  };

  let data = useLocation();
  let nameCharacter = data.state.character.name;
  let date = data.state.character.created;
  let charId = data.state.character;
  let newDate = date.slice(0, 10);

  let statusChar = data.state.character.status;
  return (
    <>
      <Header />
      <CharacterSpace>
        <ButtonBack to={"/home"}>Back</ButtonBack>
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
          </CharacterInformation>

          <h2>
            <span>List of Episodes:</span>
            <EpisodeListButton
              onClick={() => openModal(data.state.character.episode)}
            >
              Check This out!
            </EpisodeListButton>
          </h2>
        </Character>
      </CharacterSpace>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        listEp={listEp}
        nameCharacter={nameCharacter}
        charId={charId}
      />
    </>
  );
};

export default CharacterPage;
