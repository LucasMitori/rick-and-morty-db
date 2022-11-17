import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import { ButtonBack } from "../CharacterPage/styles";
import { EpisodeDescription, EpisodeInfos, EpisodeSpace } from "./styles";

const EpisodePage = () => {
  let dataEpisode = useLocation();

  const [epDescription, setEpDescription] = useState([]);
  const [date, setDate] = useState("");

  let data = dataEpisode.state.episodesNumbers;

  let id = dataEpisode.state.charId;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${data}`)
      .then((response) => response.json())
      .then((response) => {
        setEpDescription(response);
        setDate(response.created.slice(0, 10));
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <>
      <Header />
      <EpisodeSpace>
        <EpisodeDescription>
          <EpisodeInfos>
            <h1>{epDescription.name}</h1>
            <h2>{epDescription.episode}</h2>
            <h3>
              <span>Tag Number:</span> #{epDescription.id}
            </h3>
            <h3>
              <span>Air Date:</span> {epDescription.air_date}
            </h3>
            <h3>
              <span>Created at:</span> {date}
            </h3>
          </EpisodeInfos>

          <ButtonBack
            to={{
              pathname: `/:${id.id}`,
            }}
            state={{ character: id }}
          >
            Back
          </ButtonBack>
        </EpisodeDescription>
      </EpisodeSpace>
    </>
  );
};

export default EpisodePage;
