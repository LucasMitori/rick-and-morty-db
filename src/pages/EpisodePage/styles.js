import styled from "styled-components";
import wallpaper from "../../assets/img/wallpaper-08.jpg";

export const EpisodeSpace = styled.main`
  width: 100%;
  height: 80vh;
  background-color: var(--color-grey-1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const EpisodeDescription = styled.section`
  width: 80%;
  height: 70vh;
  background-image: url(${wallpaper});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 0px 8px #000000, 0px 0px 0px 16px #4b4c4b,
    0px 0px 0px 24px #828482, 0px 0px 0px 31px #b2b5b2, 0px 0px 0px 39px #daddda,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px 8px #000000, 0px 0px 0px 16px #4b4c4b,
    0px 0px 0px 24px #828482, 0px 0px 0px 31px #b2b5b2, 0px 0px 0px 39px #daddda,
    5px 5px 15px 5px rgba(0, 0, 0, 0);

  & > button {
    width: 80%;
    height: 40px;
    margin-top: 30px;
    background-color: var(--color-quinternary);
    border: 1px solid var(--color-black-mode);
    border-radius: var(--radius-8);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-600);
  }
`;

export const EpisodeInfos = styled.div`
  width: 90%;
  height: 70%;
  background-color: var(--blur-effect-02);
  border: 2px solid var(--color-shadow-box-01);
  border-radius: var(--radius-8);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;

  & > h1 {
    font-family: var(--font-quinternary-creepster);
    font-size: var(--font-subtitle-28);
    font-weight: var(--font-weight-700);
    letter-spacing: 5px;
    text-shadow: 0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4,
      2px 1px 1px #5dabcd, 2px 3px 2px #378ab4, 3px 2px 2px #5dabcd,
      3px 4px 2px #378ab4, 4px 3px 3px #5dabcd, 4px 5px 3px #378ab4,
      5px 4px 2px #5dabcd, 5px 6px 2px #378ab4, 6px 5px 2px #5dabcd,
      6px 7px 1px #378ab4, 7px 6px 1px #5dabcd, 7px 8px 0px #378ab4,
      8px 7px 0px #5dabcd;
    color: var(--color-white-mode);
    text-align: center;
    line-height: var(--font-line-height-40);
  }

  & > h2 {
    font-family: var(--font-tertiary-roboto);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-500);
    color: var(--color-white-mode);
  }

  & > h3 {
    font-family: var(--font-tertiary-roboto);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-500);
    color: var(--color-white-mode);

    & > span {
      color: var(--color-quartenary);
    }
  }
`;
