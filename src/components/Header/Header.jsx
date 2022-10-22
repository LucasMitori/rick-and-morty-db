import { HeaderSpace } from "./styles";

const Header = () => {
  return (
    <>
      <HeaderSpace>
        <h2>Rick and Morty Database</h2>
        <input type="text" placeholder="Type the name you desire" />
      </HeaderSpace>
    </>
  );
};

export default Header;
