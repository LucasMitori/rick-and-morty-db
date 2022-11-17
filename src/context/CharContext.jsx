import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { ToastError } from "../components/Toast/toast";

export const CharContext = createContext({});

const CharProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  /*-------------------- Skip line --------------------*/

  async function getCharacters() {
    try {
      const response = await api.get("/character");
      setCharacters(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  /*-------------------- Skip line --------------------*/

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  /*-------------------- Skip line --------------------*/

  async function getOneCharacter(data) {
    try {
      const response = await api.get(`/character/?name=${data}`);
      setCharacters(response.data.results);
    } catch (error) {
      console.error(error);
      ToastError("Character does not exist");
    }
  }

  /*-------------------- Skip line --------------------*/
  return (
    <CharContext.Provider
      value={{
        getCharacters,
        getOneCharacter,
        setPage,
        setFilter,
        characters,
        page,
        filter,
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
