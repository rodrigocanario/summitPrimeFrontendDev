import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../Redux/Actions/Actions";
import { criarOrcamento } from "../../../Redux/Actions/CriarOrcamento";
import { criarOrcamentoVnda } from "../../../Redux/Actions/CriarOrcamentoVnda";

export const ModalCriarOrcamento = () => {
  const [titulo, setTitulo] = useState("Orçamento sem nome");
  const modal = useSelector((state) => state.modals.criarOrcamento);
  const ehVnda = modal.vnda;
  const dispatch = useDispatch();
  const handleCriar = () => {
    if (ehVnda) {
      dispatch(criarOrcamentoVnda(titulo));
    } else {
      dispatch(criarOrcamento(titulo, false, true));
    }
  };
  const focusInput = () => {
    document.getElementById("inputOrcamentosSalvos").focus();
    document.getElementById("inputOrcamentosSalvos").select();
  };

  return (
    <Modal
      onHide={() => dispatch(toggleModal("criarOrcamento", false))}
      onEntered={focusInput}
      className=""
      show={modal.show}
      animation={true}
      centered
    >
      <Modal.Body className="vndaModalBody" style={{ color: "black" }}>
        <h1 style={{ color: "black", fontSize: "30px" }}>
          {ehVnda ? "Copiar e Salvar Orçamento:" : "Novo Orçamento:"}
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
            onClick={() => dispatch(toggleModal("criarOrcamento", false))}
          >
            Cancelar
          </button>
          <Button onClick={handleCriar}>Criar</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
