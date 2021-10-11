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
          <br />
          Para verificar preço e disponibilidade de estoque, é só inserir o
          código do produto em um Novo Orçamento.
          <br />
          <br />
          Aqui na Summit Prime você não consegue escolher ou descobrir quais os
          produtos desejas comprar. Portanto utilize seu catálogo impresso ou
          nosso site da{" "}
          <a
            target="_blank"
            style={{ color: "white" }}
            rel="noreferrer"
            href={`https://summit.com.br/?agent=${login.consultor.agente}`}
          >
            Plataforma Catálogo
          </a>{" "}
          para procurar o código do produto.
          {/* -------------------- */}
          {/* <button
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
          </button> */}
        </p>
      </Col>
    </Row>
  );
};
