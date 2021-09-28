import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideSalvosModal } from "../../../../Redux/Actions/Actions";
import { criarOrcamento } from "../../../../Redux/Actions/CriarOrcamento";

export const ModalOrcamentosVnda = () => {
  const [titulo, setTitulo] = useState("Novo Orcamento");
  const informacoes = useSelector((state) => state.informacoes);
  const modals = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const handleCriar = () => {
    dispatch(criarOrcamento({ cnpj: `${informacoes.cnpj}`, titulo }));
  };

  return (
    <Modal
      onHide={() => dispatch(hideSalvosModal())}
      className=""
      show={modals.salvos.show}
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
