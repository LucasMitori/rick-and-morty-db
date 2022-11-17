import { Link } from "react-router-dom";
import styled from "styled-components";
import wallpaper03 from "../../assets/img/wallpaper-02.jpg";

export const ModalDiv = styled.main`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--blur-effect-01);
  display: ${({ showModal }) => {
    switch (showModal) {
      case false:
        return "none";
      case true:
        return "flex";
      default:
    }
  }};
  justify-content: center;
  align-items: center;
`;

export const ModalSpace = styled.div`
  width: 90%;
  height: 80vh;
  background-color: var(--color-grey-ex-1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-glowing-01);
  border-radius: var(--radius-8);
  box-shadow: 0px 0px 10px 10px var(--color-quinternary);

  & > article {
    width: 90%;
    height: 60%;
    background-image: url(${wallpaper03});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    border: 1px solid var(--color-glowing-01);
  }

  & > button {
    width: 80%;
    height: 30px;
    margin-bottom: 30px;
    background-color: var(--color-quinternary);
    border: 1px solid var(--color-black-mode);
    border-radius: var(--radius-8);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-600);
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 20%;
  background-color: var(--color-glowing-02);
  border-bottom: 1px solid var(--color-primary);
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-family: var(--font-quinternary-creepster);
    font-size: var(--font-subtitle-28);
    font-weight: var(--font-weight-700);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export const ModalInformation = styled(Link)`
  width: 90%;
  min-height: 60px;
  background-color: var(--color-quartenary);
  border: 1px solid var(--color-black-mode);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: auto;
  margin: 20px 0;
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-16);
  text-decoration: none;
  color: var(--color-black-mode);
  text-align: center;
  line-height: 20px;
`;
