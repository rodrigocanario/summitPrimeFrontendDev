import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./../../Redux/Actions/Actions";
import { CriarOrcamentoBranco } from "./../../Redux/Actions/Orcamentos/CriarOrcamentoBranco";
import "./Modals.css";
export const ModalCriarOrcamentoBranco = () => {
  const [titulo, setTitulo] = useState("Orçamento sem nome");
  const modalAberto = useSelector(
    (state) => state.config.modals.criarOrcamentoBranco
  );
  const dispatch = useDispatch();
  const handleCriar = () => {
    dispatch(CriarOrcamentoBranco(titulo));
  };
  const focusInput = () => {
    document.getElementById("inputOrcamentosSalvos").focus();
    document.getElementById("inputOrcamentosSalvos").select();
  };

  return (
    <Modal
      onHide={() => dispatch(toggleModal({ criarOrcamentoBranco: false }))}
      onEntered={focusInput}
      className=""
      show={modalAberto}
      animation={true}
      centered
    >
      <Modal.Body className="modalBodys">
        <h1 style={{ color: "inherit", fontSize: "30px" }}>Novo Orçamento:</h1>
        <input
          id="inputOrcamentosSalvos"
          className="modalInputs"
          defaultValue={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <div style={{ textAlign: "end" }}>
          <button
            className="modalButtonsCancelar"
            onClick={() =>
              dispatch(toggleModal({ criarOrcamentoBranco: false }))
            }
          >
            Cancelar
          </button>
          <Button id="modalButtons" onClick={handleCriar}>
            Criar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
