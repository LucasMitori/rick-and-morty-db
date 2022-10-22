import styled from "styled-components";
import LandingImage from "../../assets/img/wallpaper-04.jpg";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: (11) 9-7749-2121
    Name: Entrega - Kenziehub - Parte 1 (Cadastro e Login)
    Description: Atividade Avaliativa
    ~ *   Login Page styles   * ~

            Version: 1.0

****************************************/

export const LandingSpace = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${LandingImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background-color: var(--blur-effect-01);
    border: 1px solid var(--color-tertiary);
    color: var(--color-white-mode);
    text-decoration: none;
    border-radius: var(--radius-8);
    margin-right: 100px;
  }
`;
export const Title = styled.section`
  width: 70vw;
  height: 15vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 100px 30px 0;

  & > h1 {
    font-family: var(--font-quinternary-creepster);
    font-size: var(--font-title-40);
    text-shadow: 0 -1px 4px var(--color-white-mode),
      0 -2px 10px var(--color-tertiary), 0 -10px 20px var(--color-secondary),
      0 -18px 40px var(--color-quartenary);
    margin-bottom: 20px;
  }

  & > h2 {
    font-family: var(--font-quinternary-creepster);
    font-size: var(--font-title-40);
    text-shadow: 0 -1px 4px var(--color-white-mode),
      0 -2px 10px var(--color-shadow-box-01),
      0 -10px 20px var(--color-shadow-box-03),
      0 -18px 40px var(--color-shadow-box-02);
  }
`;

//--------------------~>   Skip line   <~--------------------
