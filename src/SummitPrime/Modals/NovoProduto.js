import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./../../Redux/Actions/Actions";
import { CriarOrcamentoBranco } from "./../../Redux/Actions/Orcamentos/CriarOrcamentoBranco";

export const ModalNovoProduto = () => {
  const [titulo, setTitulo] = useState("Orçamento sem nome");
  const modalAberto = useSelector((state) => state.config.modals.novoProduto);
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
      onHide={() => dispatch(toggleModal({ novoProduto: false }))}
      onEntered={focusInput}
      className=""
      show={modalAberto}
      animation={true}
      centered
    >
      <Modal.Body className="vndaModalBody" style={{ color: "black" }}>
        <h1 style={{ color: "black", fontSize: "30px" }}>Novo Produto:</h1>
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
            onClick={() => dispatch(toggleModal({ novoProduto: false }))}
          >
            Cancelar
          </button>
          <Button onClick={handleCriar}>Criar</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
