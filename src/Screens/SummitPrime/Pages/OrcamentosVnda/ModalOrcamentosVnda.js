import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideVndaModal } from "../../../../Redux/Actions/Actions";
import { criarOrcamentoVnda } from "../../../../Redux/Actions/CriarOrcamentoVnda";

export const ModalOrcamentosVnda = () => {
  const [titulo, setTitulo] = useState("Novo Orcamento");
  const modals = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const handleCriar = () => {
    dispatch(criarOrcamentoVnda(modals.vnda.value, titulo));
  };

  return (
    <Modal
      onHide={() => dispatch(hideVndaModal())}
      className=""
      show={modals.vnda.show}
      animation={true}
      centered
    >
      <Modal.Header className=" align-items-center justify-content-center">
        <Modal.Title>NOVO ORCAMENTO</Modal.Title>
      </Modal.Header>
      <Modal.Body className="vndaModalBody" style={{ color: "black" }}>
        <h1 style={{ color: "black", fontSize: "30px" }}>Titulo:</h1>
        <input
          defaultValue={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <Button onClick={handleCriar}>Criar</Button>
      </Modal.Body>
    </Modal>
  );
};
