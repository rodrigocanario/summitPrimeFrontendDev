import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiCart, BiFolder, BiPencil } from "react-icons/bi";
import { BsListCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  showSalvosModal,
  toggleModal,
} from "../../../../Redux/Actions/Actions";
import { GetOrcamentos } from "../../../../Redux/Actions/GetOrcamentos";

export const Selection = () => {
  const dispatch = useDispatch();
  const informacoes = useSelector((state) => state.informacoes);
  return (
    <>
      <Row
        className="align-items-center justify-content-center"
        style={{ marginBottom: "60px", padding: "40px 0px" }}
      >
        <Col xs={3} className="selectionCard">
          <button
            onClick={() => dispatch(toggleModal("criarOrcamento", true))}
            className="buttonLarge"
          >
            <AiOutlineFileAdd className="iconLarge" />
            <div>Fazer Um Novo Orçamento</div>
          </button>
        </Col>
        <Col xs={3} className="selectionCard">
          <button
            onClick={() => dispatch(GetOrcamentos("salvos", true))}
            className="buttonLarge"
          >
            {/* <BiFileBlank className="iconLarge" /> */}
            <BiFolder className="iconLarge" />
            <div>Consultar Meus Orçamentos Salvos</div>
          </button>
        </Col>
        <Col xs={3} className="selectionCard">
          <button
            className="buttonLarge"
            onClick={() => dispatch(GetOrcamentos("vnda", informacoes.cnpj))}
          >
            <BsListCheck className="iconLarge" />
            <div>Consultar Lista da Plataforma Catálogo</div>
          </button>
        </Col>
      </Row>
    </>
  );
};
