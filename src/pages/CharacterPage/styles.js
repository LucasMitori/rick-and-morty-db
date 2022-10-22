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
import backgroundCard from "../../assets/img/background09.jpg";

export const CharacterSpace = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonBack = styled(Link)`
  width: 100px;
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

export const Character = styled.section`
  width: 95%;
  height: 90vh;
  background-image: url(${backgroundCard});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const CharacterInformation = styled.div`
  width: 90%;
  height: 90%;
  background-color: var(--color-transparent);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  border: 5px solid var(--blur-effect-01);

  & > h1 {
    font-family: var(--font-quinternary-creepster);
    font-size: var(--font-subtitle-32);
    font-weight: var(--font-weight-500);
    font-style: normal;
    color: var(--color-white-mode);
    letter-spacing: 10px;
    text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5,
      -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5,
      -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
    text-align: center;
  }

  & > h1:hover {
    color: ${({ statusChar }) => {
      switch (statusChar) {
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

  & > img {
    border-radius: var(--radius-8);
    border: 5px solid
      ${({ statusChar }) => {
        switch (statusChar) {
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

  & > h2 {
    font-family: var(--font-quinternary-nunito);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-500);
    font-style: normal;
    color: var(--color-white-mode);
  }

  & > h2 > button {
    width: 5%;
    height: 80%;
    border-radius: var(--radius-half);
    background-color: ${({ statusChar }) => {
      switch (statusChar) {
        case "Dead":
          return "var(--color-feedback-negative)";
        case "Alive":
          return "var(--color-quartenary)";
        case "unknown":
          return "var(--color-quinternary)";
        default:
      }
    }};

    align-self: center;
  }

  & > a {
    font-family: var(--font-quinternary-nunito);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-500);
    font-style: normal;
    color: var(--color-secondary);
    text-decoration: none;
  }

  & > h2 > span,
  & > a > span {
    color: var(--color-quartenary);
  }

  & > img {
    border: 2px solid var();
  }
`;
