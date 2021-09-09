import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FooterHome } from "../Components/FooterHome";
import { Tabela } from "../Components/Tabela";
import { changePage } from "../Redux/Actions";

export const Home = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.informacoes);
  const rows = useSelector((state) => state.orcamento.itens);
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

  return (
    <Container fluid>
      <Row
        style={{ height: "100%", minHeight: "100vh" }}
        className="justify-content-center text-center"
      >
        <Col sm="auto" className="text-center">
          <Row className="justify-content-center text-center">
            <h1>
              Bem Vindo à{" "}
              <span style={{ fontFamily: "fontSummit" }}>Summit Prime</span>{" "}
              <br /> {login.razaoSocial}!
            </h1>
            <Col xs={6}>
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
                para iniciar o orçamento. Você pode abrir em{" "}
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
                  Meus Orcamentos
                </button>{" "}
                os orçamentos enviados pela Plataforma Catálogo. E por aqui,
                ajustar as quantidades e os itens escolhidos. As alterações
                feitas aqui não retornam para a Plataforma Catalogo.
              </p>
            </Col>
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
