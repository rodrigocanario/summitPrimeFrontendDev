import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiCart, BiFolder } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
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
        <Col xs={4} className="selectionCard">
          <button
            className="buttonLarge"
            onClick={() => dispatch(GetOrcamentos("vnda", informacoes.cnpj))}
          >
            <BiCart className="iconLarge" />
            <div>Consultar lista da Plataforma Catálogo</div>
          </button>
        </Col>
        <Col xs={4} className="selectionCard">
          <button
            onClick={() => dispatch(GetOrcamentos("salvos", informacoes.cnpj))}
            className="buttonLarge"
          >
            {/* <BiFileBlank className="iconLarge" /> */}
            <BiFolder className="iconLarge" />
            <div>Orçamentos Salvos</div>
          </button>
        </Col>
      </Row>
    </>
  );
};
