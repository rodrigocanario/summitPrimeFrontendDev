import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideVndaModal } from "../../../../Redux/Actions/Actions";
import { criarOrcamentoVnda } from "../../../../Redux/Actions/CriarOrcamentoVnda";

export const ModalOrcamentosVnda = () => {
  const [titulo, setTitulo] = useState("Orçamento sem nome");
  const modals = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const handleCriar = () => {
    dispatch(criarOrcamentoVnda(modals.vnda.value, titulo));
  };
  const focusInput = () => {
    document.getElementById("inputOrcamentosSalvos").focus();
    document.getElementById("inputOrcamentosSalvos").select();
  };

  return (
    <Modal
      onHide={() => dispatch(hideVndaModal())}
      onEntered={focusInput}
      className=""
      show={modals.vnda.show}
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
            onClick={() => dispatch(hideVndaModal())}
          >
            Cancelar
          </button>
          <Button onClick={handleCriar}>Criar</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
