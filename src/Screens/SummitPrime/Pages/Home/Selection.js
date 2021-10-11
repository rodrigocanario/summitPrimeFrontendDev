import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiCart, BiFolder } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { showSalvosModal } from "../../../../Redux/Actions/Actions";
import { GetOrcamentos } from "../../../../Redux/Actions/GetOrcamentos";

export const Selection = () => {
  const dispatch = useDispatch();
  const informacoes = useSelector((state) => state.informacoes);
  return (
    <>
      <Row
        className="align-items-center justify-content-center"
        style={{ marginBottom: "60px" }}
      >
        <Col xs={3} className="selectionCard">
          <button
            onClick={() => dispatch(dispatch(showSalvosModal()))}
            className="buttonLarge"
          >
            <AiOutlineFileAdd className="iconLarge" />
            <div>Novo Orçamento</div>
          </button>
        </Col>
        <Col xs={3} className="selectionCard">
          <button
            onClick={() => dispatch(GetOrcamentos("salvos", informacoes.cnpj))}
            className="buttonLarge"
          >
            {/* <BiFileBlank className="iconLarge" /> */}
            <BiFolder className="iconLarge" />
            <div>Orçamentos Salvos</div>
          </button>
        </Col>
        <Col xs={3} className="selectionCard">
          <button
            className="buttonLarge"
            onClick={() => dispatch(GetOrcamentos("vnda", informacoes.cnpj))}
          >
            <BiCart className="iconLarge" />
            <div>Consultar Lista da Plataforma Catálogo</div>
          </button>
        </Col>
      </Row>
    </>
  );
};
