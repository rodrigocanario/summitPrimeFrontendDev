import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  hideSalvosModal,
  toggleModal,
} from "../../../../Redux/Actions/Actions";
import { criarOrcamento } from "../../../../Redux/Actions/CriarOrcamento";

export const ModalOrcamentoAtual = () => {
  const [titulo, setTitulo] = useState("Orçamento sem nome");
  const informacoes = useSelector((state) => state.informacoes);
  const modals = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const handleCriar = () => {
    dispatch(criarOrcamento({ cnpj: `${informacoes.cnpj}`, titulo }, true));
  };

  return (
    <Modal
      onHide={() => dispatch(toggleModal("atual", false))}
      className=""
      show={modals.atual.show}
      animation={true}
      centered
    >
      <Modal.Header closeButton>
        <h1 style={{ color: "black", fontSize: "30px" }}>
          Instruções <BsQuestionCircle />
        </h1>
      </Modal.Header>
      <Modal.Body className="vndaModalBody" style={{ color: "black" }}>
        <ol style={{ paddingLeft: "2rem" }}>
          <li>
            Utilize seu catálogo impresso ou nosso site da{" "}
            <a
              target="_blank"
              style={{ color: "blue" }}
              rel="noreferrer"
              href={`https://summit.com.br/?agent=${informacoes.consultor.agente}`}
            >
              Plataforma Catálogo
            </a>{" "}
            para descobrir quais os produtos que desejas comprar.
          </li>
          <li>Respeite seu pedido minimo de R${informacoes.pedidoMinimo}.</li>
          <li>
            É possível utilizar o botāo SHIFT junto com as setas do seu teclado
            para uma navegação mais ágil.
          </li>
        </ol>
      </Modal.Body>
    </Modal>
  );
};
