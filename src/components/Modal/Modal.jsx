import { ModalDiv, ModalHeader, ModalInformation, ModalSpace } from "./styles";

const Modal = ({ showModal, setShowModal, listEp, nameCharacter, charId }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModalDiv showModal={showModal}>
        <ModalSpace>
          <ModalHeader>
            <h1>Episodes</h1>
          </ModalHeader>

          <article>
            {listEp.map((element) => {
              let newElement = element.slice(40, 42);

              return (
                <ModalInformation
                  key={element}
                  to={{
                    pathname: `/episode/:${newElement}`,
                  }}
                  state={{ episodesNumbers: newElement, charId: charId }}
                >
                  {nameCharacter} was here: EP.{newElement}
                </ModalInformation>
              );
            })}
          </article>

          <button onClick={() => closeModal()}>Exit</button>
        </ModalSpace>
      </ModalDiv>
    </>
  );
};

export default Modal;
