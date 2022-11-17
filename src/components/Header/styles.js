import styled from "styled-components";
import background from "../../assets/img/wallpaper-01.jpg";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Entrega - Kenziehub - Parte 1 (Cadastro e Login)
    Description: Atividade Avaliativa
    ~ *   Header styles   * ~

            Version: 1.0

****************************************/

export const HeaderSpace = styled.header`
  width: 100%;
  height: 30vh;
  background-color: var(--color-grey-2);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1001;
  border-bottom: 2px solid var(--color-tertiary);

  & > h2 {
    text-align: center;
    font-family: var(--font-quinternary-creepster);
    letter-spacing: 2px;
    font-size: var(--font-subtitle-30);
    text-shadow: var(--color-white-mode) 0px 0px 5px,
      var(--color-white-mode) 0px 0px 10px, var(--color-white-mode) 0px 0px 15px,
      var(--color-shadow-box-05) 0px 0px 20px,
      var(--color-shadow-box-05) 0px 0px 30px,
      var(--color-shadow-box-05) 0px 0px 40px,
      var(--color-shadow-box-05) 0px 0px 50px,
      var(--color-shadow-box-05) 0px 0px 75px;
  }

  & > form {
    width: 95%;
    background-color: var(--blur-effect-02);
    border: 1px solid var(--color-shadow-box-01);
    border-radius: var(--radius-8);
    height: 60%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

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
    @media screen and (max-width: 2100px) {
    }
  }

  & > form > label {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-500);
    color: var(--color-white-mode);
  }

  & > form > button {
    width: 30%;
    height: 30px;
    background-color: var(--color-quinternary);
    border: 1px solid var(--color-black-mode);
    border-radius: var(--radius-8);
  }
`;

export const ButtonSpace = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  & > input {
    width: 70%;
    height: 100%;
    border: 1px solid var(--color-tertiary);
    background-color: var(--blur-effect-03);
    border-radius: 0px 8px 8px 0px;
    padding-left: 15px;
    color: var(--color-grey-0);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
  }

  & > input::placeholder {
    font-size: var(--font-text-14);
    color: var(--color-white-mode);
    letter-spacing: 1px;
  }

  & > button {
    width: 25%;
    height: 100%;
    margin-right: 2%;
    background-color: var(--color-quartenary);
    border: 1px solid var(--color-tertiary);
    border-radius: var(--radius-8);
    cursor: pointer;
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  & > button:hover {
    opacity: 0.5;
  }
`;

//--------------------~>   Skip line   <~--------------------
