import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { CharContext } from "../../context/CharContext";
import {
  ButtonNextBack,
  CardRenderSpace,
  CharCard,
  HomeSpace,
  ImageCardSpace,
  InfoCardSpace,
} from "./styles";
import Icon from "../../assets/img/icon.png";

const HomePage = () => {
  const { characters, page, setPage } = useContext(CharContext);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <Header />
      <HomeSpace>
        <div>
          <ButtonNextBack onClick={previousPage}>Previous Page</ButtonNextBack>
          <ButtonNextBack onClick={nextPage}>Next Page</ButtonNextBack>
        </div>
        <CardRenderSpace>
          {characters.map((element) => {
            return (
              <CharCard key={element.id} element={element}>
                <ImageCardSpace element={element}></ImageCardSpace>
                <h2>{element.name}</h2>
                <InfoCardSpace element={element}>
                  <div>
                    <h2>
                      <span>Gender:</span> {element.gender}
                    </h2>
                    <h2>
                      <span>Origin:</span> {element.origin.name}
                    </h2>
                    <h2>
                      <span>Species:</span> {element.species}
                    </h2>
                    <h2>
                      <span>Status:</span> <button disabled></button>{" "}
                      {element.status}
                    </h2>
                  </div>
                  <Link
                    to={{
                      pathname: `/:${element.id}`,
                    }}
                    state={{ character: element }}
                  >
                    <img src={Icon} alt="Icon" />
                  </Link>
                </InfoCardSpace>
              </CharCard>
            );
          })}
        </CardRenderSpace>
      </HomeSpace>
    </>
  );
};

export default HomePage;
