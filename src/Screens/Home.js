import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FooterHome } from "../Components/FooterHome";
import { Tabela } from "../Components/Tabela";

export const Home = () => {
  const login = useSelector((state) => state.informacoes);
  const rows = useSelector((state) => state.orcamento.itens);
  const page = useSelector((state) => state.pages);
  const [rerender, setRerender] = useState(0);
  const headers = [
    "Item",
    "Referência",
    "Nome",
    "Múltiplo Caixa Master",
    "Desconto Caixa Master",
    "Valor Unitário",
    "Quantidade",
    "Valor",
    "Estoque",
  ];
  useEffect(() => {
    if (render === 0) {
      setRerender(1);
    } else {
      setRerender(0);
    }
  }, [page]);

  return (
    <Container fluid>
      <Row
        style={{ height: "100%", minHeight: "100vh" }}
        className="justify-content-center"
      >
        <Col sm="auto" className="text-center">
          <Row>
            <h1>
              Bem Vindo à{" "}
              <span style={{ fontFamily: "fontSummit" }}>Summit Prime</span>{" "}
              <br /> {login.razaoSocial}!
            </h1>
            <p>
              *Acesse a{" "}
              <a
                target="_blank"
                style={{ color: "white" }}
                rel="noreferrer"
                href="https://summit.com.br"
              >
                Plataforma Catálogo
              </a>{" "}
              para iniciar o orçamento. Você pode abrir em Meus Orçamentos os
              orçamentos enviados pela Plataforma Catálogo. E por aqui, ajustar
              as quantidades e os itens escolhidos. As alterações feitas aqui
              não retornam para a Plataforma Catalogo.
            </p>
          </Row>
          <Row>
            <Tabela headers={headers} rows={rows} tfooter={true} />
          </Row>
        </Col>
      </Row>
      <FooterHome />
    </Container>
  );
};
