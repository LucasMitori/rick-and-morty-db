/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Entrega - Kenziehub - Parte 1 (Cadastro e Login)
    Description: Atividade Avaliativa
    ~ *   Login Page styles   * ~

            Version: 1.0

****************************************/

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

    & > span {
      font-family: var(--font-secondary-inter);
      font-size: var(--font-text-16);
      font-weight: var(--font-weight-600);
      letter-spacing: 1px;
      color: var(--color-white-mode);
    }
  }
`;

export const ButtonNextBack = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--color-quinternary);
  color: var(--color-black-mode);
  border-radius: var(--radius-half);
  border: 1px solid var(--color-quinternary);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: var(--font-secondary-inter);
  font-size: var(--font-text-16);
  font-weight: var(--font-weight-600);
  letter-spacing: 1px;
  cursor: pointer;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
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
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const CardRenderSpace = styled.ul`
  width: 90%;
  height: 85vh;
  background-image: url(${backgroundCharacterSpace});
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  box-shadow: 0px 0px 17px 5px #f0e14a;
  border: 1px solid var(--color-tertiary);
  border-radius: var(--radius-8);

  &::-webkit-scrollbar {
    width: 15px;
    border-radius: var(--radius-8);
    border: 1px solid var(--color-tertiary);
    background-color: var(--color-quinternary);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--blur-effect-02);
    border-radius: var(--radius-8);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-quartenary);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(151, 206, 76, 0.7);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const CharCard = styled.li`
  width: 90%;
  min-height: 50vh;
  background-color: var(--blur-effect-01);
  border: 1px solid var(--color-tertiary);
  border-radius: var(--radius-8);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    width: 250px;
    margin: 20px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }

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
  width: 170px;
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
    }};

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    background-size: cover;
  }
  @media screen and (min-width: 768px) {
    background-color: transparent;
    min-width: 200px;
    min-height: 170px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const InfoCardSpace = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: var(--color-navigation);
  height: 40%;
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
    font-size: var(--font-text-14);
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

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    & {
      height: 180px;
    }

    & > div {
      width: 60%;
    }

    & > a {
      width: 32%;
      height: 32%;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

//--------------------~>   Skip line   <~--------------------
