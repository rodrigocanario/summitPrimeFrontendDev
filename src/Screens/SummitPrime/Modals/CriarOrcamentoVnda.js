import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../Redux/Actions/Actions";
import { CriarOrcamentoVnda } from "../../../Redux/Actions/Orcamentos/CriarOrcamentoVnda";

export const ModalCriarOrcamentoVnda = () => {
  const [titulo, setTitulo] = useState("Orçamento da Plataforma Catalogo");
  const modalVnda = useSelector(
    (state) => state.config.modals.criarOrcamentoVnda
  );
  const dispatch = useDispatch();
  const handleCriar = () => {
    dispatch(CriarOrcamentoVnda(titulo));
    setTitulo("Orçamento da Plataforma Catalogo");
  };
  const focusInput = () => {
    document.getElementById("inputOrcamentosSalvos").focus();
    document.getElementById("inputOrcamentosSalvos").select();
  };

  return (
    <Modal
      onHide={() =>
        dispatch(toggleModal({ criarOrcamentoVnda: { show: false } }))
      }
      onEntered={focusInput}
      className=""
      show={modalVnda.show}
      animation={true}
      centered
    >
      <Modal.Body className="vndaModalBody" style={{ color: "black" }}>
        <h1 style={{ color: "black", fontSize: "30px" }}>
          Copiar e Salvar Orçamento:
        </h1>
        <input
          id="inputOrcamentosSalvos"
          defaultValue={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{ margin: "10px", marginLeft: "0px", width: "100%" }}
        />
        <br />
        <div style={{ textAlign: "end" }}>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() =>
              dispatch(toggleModal({ criarOrcamentoVnda: { show: false } }))
            }
          >
            Cancelar
          </button>
          <Button onClick={handleCriar}>Criar</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
