/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Entrega - Kenziehub - Parte 1 (Cadastro e Login)
    Description: Atividade Avaliativa
    ~ *   Login Page styles   * ~

            Version: 1.0

****************************************/

import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundCharacterSpace from "../../assets/img/background01.jpg";

export const HomeSpace = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > div {
    width: 90%;
    height: 80px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonNextBack = styled.button`
  width: 150px;
  height: 40px;
  background-color: var(--color-quinternary);
  color: var(--color-black-mode);
  border-radius: var(--radius-8);
  border: 1px solid var(--color-quinternary);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-16);
  font-weight: var(--font-weight-600);
  letter-spacing: 1px;
`;

export const CardRenderSpace = styled.ul`
  width: 90%;
  height: 90vh;
  background-image: url(${backgroundCharacterSpace});
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
`;

export const CharCard = styled.li`
  width: 100%;
  min-height: 50vh;
  background-color: var(--blur-effect-01);
  border: 1px solid var(--color-tertiary);
  border-radius: var(--radius-8);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;

  & > h2 {
    font-family: var(--font-quinternary-creepster);
    font-size: var(--font-subtitle-26);
    text-align: center;
    padding-left: 10px;
    text-shadow: 0 -1px 4px var(--color-shadow-box-04),
      0 -2px 10px var(--color-shadow-box-01),
      0 -10px 20px var(--color-shadow-box-03),
      0 -18px 40px var(--color-shadow-box-02);
  }
`;

export const ImageCardSpace = styled.div`
  background-image: url(${({ element }) => element.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 48%;
  height: 40%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: flex-end;
  border-radius: var(--radius-8);
  border: 5px solid
    ${({ element }) => {
      switch (element.status) {
        case "Dead":
          return "var(--color-feedback-negative)";
        case "Alive":
          return "var(--color-quartenary)";
        case "unknown":
          return "var(--color-quinternary)";
        default:
      }
    }}; ;
`;

export const InfoCardSpace = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: var(--color-navigation);
  height: 40%;
  /* background-image: url(${backgroundCharacterSpace}); */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  border: 2px solid var(--color-tertiary);

  & > div {
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  & > a {
    align-self: center;
    width: 100px;
    height: 100px;
  }

  & > a > img {
    width: 100%;
    height: 100%;
  }

  & > div > h2 {
    font-style: normal;
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    font-weight: var(--font-weight-300);
    line-height: var(--font-line-height-16);
  }

  & > div > h2 > span {
    color: var(--color-tertiary);
  }

  & > div > h2 > button {
    width: 10%;
    height: 100%;
    border-radius: var(--radius-half);
    background-color: ${({ element }) => {
      switch (element.status) {
        case "Dead":
          return "var(--color-feedback-negative)";
        case "Alive":
          return "var(--color-quartenary)";
        case "unknown":
          return "var(--color-quinternary)";
        default:
      }
    }};
  }
`;

//--------------------~>   Skip line   <~--------------------
