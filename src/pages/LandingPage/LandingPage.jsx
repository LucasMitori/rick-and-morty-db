import { LandingSpace, Title } from "./styles";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <LandingSpace>
        <Title>
          <h1>Rick and Morty</h1>
          <h2>Database</h2>
        </Title>
        <Link to={"/home"}>Show the Mystery!</Link>
      </LandingSpace>
    </>
  );
};

export default LandingPage;
