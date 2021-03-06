import React from "react";
import { Modal } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./../../Redux/Actions/Actions";
import { ChangePage } from "./../../Redux/Actions/Config/ChangePage";

export const ModalInstrucoes = () => {
  const informacoes = useSelector((state) => state.databank.userInfo);
  const modalAberto = useSelector((state) => state.config.modals.instrucoes);
  const dispatch = useDispatch();

  return (
    <Modal
      onHide={() => dispatch(toggleModal({ instrucoes: false }))}
      className=""
      show={modalAberto}
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
            Utilize seu catálogo impresso ou os
            <button
              onClick={() => {
                dispatch(ChangePage("catalogos"));
              }}
              style={{
                color: "blue",
                backgroundColor: "transparent",
                border: "none",
                textDecoration: "underline",
              }}
            >
              catálogos digitais
            </button>{" "}
            ou nosso site da{" "}
            <a
              target="_blank"
              style={{ color: "blue" }}
              rel="noreferrer"
              href={
                informacoes.consultor && informacoes.consultor.agente
                  ? `https://summit.com.br/?agent=${informacoes.consultor.agente}`
                  : `https://summit.com.br`
              }
            >
              Plataforma Catálogo
            </a>{" "}
            para descobrir quais os produtos que desejas comprar.
          </li>
          <li>Respeite seu pedido minimo de R${informacoes.pedidoMinimo}.</li>
          <li>
            É possível utilizar o botāo SHIFT junto com as setas do seu teclado
            para uma navegação mais ágil ao inserir os produtos e editar as
            quantidades.
          </li>
        </ol>
      </Modal.Body>
    </Modal>
  );
};
