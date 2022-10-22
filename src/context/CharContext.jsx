import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { ToastError, ToastMessage } from "../components/Toast/toast";

export const CharContext = createContext({});

const CharProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

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

  /*-------------------- Skip line --------------------*/
  return (
    <CharContext.Provider
      value={{
        setPage,
        characters,
        page,
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
