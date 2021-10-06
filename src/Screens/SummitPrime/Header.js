import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  logout,
  showSalvosModal,
} from "../../Redux/Actions/Actions";
import { GetOrcamentos } from "../../Redux/Actions/GetOrcamentos";

export const Header = () => {
  const dispatch = useDispatch();
  const informacoes = useSelector((state) => state.informacoes);
  return (
    <Row
      className="justify-content-center align-items-center text-center header"
      style={{ boxShadow: "0px 0px 50px 50px #0007ed4a" }}
    >
      <Button onClick={() => dispatch(logout())} id="buttonLogout">
        {" "}
        Logout{" "}
      </Button>
      <Col xs={4}>
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={6}>
            <h3
              className="h3Header"
              onClick={() => dispatch(showSalvosModal())}
            >
              Novo Orçamento
            </h3>
          </Col>
          <Col xs={6}>
            <h3
              className="h3Header"
              onClick={() => {
                dispatch(GetOrcamentos("salvos", informacoes.cnpj));
              }}
            >
              Orçamentos Salvos
            </h3>
          </Col>
        </Row>
      </Col>
      <Col xs={3} className="h-100 align-items-center">
        <Row className="align-items-center justify-content-center">
          <Image src="logo.png" id="summit-img" alt="summit-logo" fluid />
          <h3 className="h3Header" onClick={() => dispatch(changePage("home"))}>
            Summit Prime{" "}
          </h3>
        </Row>
      </Col>
      <Col xs={4}>
        <h3
          className="h3Header"
          onClick={() => dispatch(GetOrcamentos("vnda", informacoes.cnpj))}
        >
          Consultar Listas Da Plataforma Catálogo
        </h3>
      </Col>
    </Row>
  );
};
