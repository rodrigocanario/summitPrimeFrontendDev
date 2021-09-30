import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../../Redux/Actions/Actions";

export const HeaderHome = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.informacoes);
  return (
    <Row
      className="justify-content-center text-center"
      style={{ margin: "60px 0px 60px 0px" }}
    >
      <h1>
        Bem Vindo à{" "}
        <span style={{ fontFamily: "fontSummit" }}>Summit Prime&reg;</span>{" "}
        <br /> {login.razaoSocial}!
      </h1>
      <Col xs={6}>
        <p>
          Para facilitar o processo, recomendamos que primeiramente escolha os
          itens e envie o pedido de orçamento pela nossa{" "}
          <a
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
            href={`https://summit.com.br/?agent=${login.consultor.agente}`}
          >
            Plataforma Catálogo.
          </a>{" "}
          Pois assim você pode abrir aqui a lista completa dos itens já
          escolhidos na Plataforma Catálogo ao clicar no botão de{" "}
          <button
            style={{
              color: "white",
              textDecoration: "underline",
              backgroundColor: "transparent",
              border: "none",
              padding: "0px",
            }}
            onClick={() => {
              dispatch(changePage("meusOrcamentos"));
            }}
          >
            Consultar Listas da Plataforma Catálogo.
          </button>{" "}
        </p>
      </Col>
    </Row>
  );
};
