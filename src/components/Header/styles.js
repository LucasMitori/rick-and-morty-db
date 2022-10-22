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
  height: 140px;
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

  & > input {
    width: 90%;
    height: 40px;
    border: 1px solid var(--color-tertiary);
    background-color: var(--blur-effect-02);
    border-radius: var(--radius-8);
    padding-left: 15px;
    color: var(--color-grey-0);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
  }

  & > input::placeholder {
    font-size: var(--font-text-14);
    color: var(--color-grey-0);
    letter-spacing: 1px;
  }
`;

//--------------------~>   Skip line   <~--------------------
