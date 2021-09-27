import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Tabela } from "./Tabela/Tabela";
import { FooterHome } from "./FooterHome";
import { Selection } from "./Selection";

export const Home = () => {
  const orcamentos = useSelector((state) => state.orcamentos);
  const [orcamentoAtual, setOrcamentoAtual] = useState({});
  useEffect(() => {
    if (orcamentos.atual) {
      setOrcamentoAtual(
        orcamentos.salvos.find((orcamento) => orcamento.id === orcamentos.atual)
      );
    }
  }, [orcamentos]);

  return (
    <Container fluid>
      <Row
        style={{ height: "100%", minHeight: "100vh" }}
        className="justify-content-center text-center align-items-center"
      >
        <Col className="text-center">
          <Row className="justify-content-center text-center">
            <h1>
              <span style={{ fontFamily: "fontSummit" }}>
                {orcamentoAtual.titulo}
              </span>{" "}
            </h1>
          </Row>
          {orcamentos.atual ? (
            <>
              <Tabela />
            </>
          ) : (
            <Selection />
          )}
        </Col>
      </Row>
      <FooterHome />
    </Container>
  );
};
