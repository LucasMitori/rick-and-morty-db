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
  border: 1px solid var(--color-black-mode);
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

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    width: 750px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }

  & > h2 {
    font-family: var(--font-quinternary-nunito);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-700);
    font-style: normal;
    color: var(--color-black-mode);
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
      0 -18px 40px #f00;
    margin-top: 10px;
  }
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

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }

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

    @media screen and (min-width: 480px) {
      height: 50%;
      max-width: 70%;
    }
    @media screen and (min-width: 768px) {
      height: 40%;
      max-width: 40%;
    }
    @media screen and (min-width: 1024px) {
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
  }

  & > h2 {
    align-self: flex-start;
    font-family: var(--font-quinternary-nunito);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-500);
    font-style: normal;
    color: var(--color-white-mode);

    @media screen and (min-width: 480px) {
    }
    @media screen and (min-width: 768px) {
      align-self: center;
    }
    @media screen and (min-width: 1024px) {
    }
    @media screen and (min-width: 1200px) {
    }
    @media screen and (max-width: 1920px) {
    }
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
  & > h2 > span {
    color: var(--color-quartenary);
  }

  & > img {
    border: 2px solid var();
    width: 95%;
  }
`;

export const EpisodeListButton = styled.button`
  font-family: var(--font-quinternary-nunito);
  font-size: var(--font-subtitle-20);
  font-weight: var(--font-weight-500);
  font-style: normal;
  color: var(--color-black-mode);
  text-decoration: none;
  margin-left: 10px;
  border: 1px var(--color-black-mode);
  cursor: pointer;
  margin-left: 20px;
  -webkit-animation: glowing 1300ms infinite;
  -moz-animation: glowing 1300ms infinite;
  -o-animation: glowing 1300ms infinite;
  animation: glowing 1300ms infinite;

  @-webkit-keyframes glowing {
    0% {
      background-color: var(--color-glowing-01);
      -webkit-box-shadow: 0 0 3px var(--color-glowing-01);
    }
    50% {
      background-color: var(--color-glowing-02);
      -webkit-box-shadow: 0 0 15px var(--color-glowing-02);
    }
    100% {
      background-color: var(--color-glowing-01);
      -webkit-box-shadow: 0 0 3px var(--color-glowing-01);
    }
  }
  @keyframes glowing {
    0% {
      background-color: var(--color-glowing-01);
      box-shadow: 0 0 3px var(--color-glowing-01);
    }
    50% {
      background-color: var(--color-glowing-02);
      box-shadow: 0 0 15px var(--color-glowing-02);
    }
    100% {
      background-color: var(--color-glowing-01);
      box-shadow: 0 0 3px var(--color-glowing-01);
    }
  }
`;
