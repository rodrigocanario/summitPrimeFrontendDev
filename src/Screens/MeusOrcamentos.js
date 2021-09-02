import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changePage, novoOrcamento } from "../Redux/Actions";
const csv2json = require("csvjson-csv2json");

export const MeusOrcamentos = () => {
  const informacoes = useSelector((state) => state.informacoes);
  const dispatch = useDispatch();

  const novoOrc = (e) => {
    let skus = [];
    let produtos = csv2json(informacoes.orcamentos[e.target.value]["CSV"]);
    produtos.forEach((produto) => {
      skus.push(produto["Referência"]);
    });
    dispatch(novoOrcamento(skus));
    dispatch(changePage("home"));
  };

  return (
    <Container fluid>
      <Row
        style={{ height: "100%", minHeight: "100vh", paddingTop: "20px" }}
        className="justify-content-center align-content-start"
      >
        <Col xs={11}>
          <Table
            style={{
              color: "white",
              backgroundColor: "transparent",
              borderColor: "white",
            }}
            bordered
          >
            <thead>
              <tr>
                <th style={{ width: "50px" }}>ID</th>
                <th style={{ width: "110px" }}>Nome</th>
                <th style={{ width: "225px" }}> Data</th>
                <th>Produtos</th>
                <th style={{ width: "125px" }}>Abrir</th>
              </tr>
            </thead>
            <tbody>
              {informacoes.orcamentos.map((orcamento, index) => {
                let produtos = csv2json(orcamento["CSV"]);
                return (
                  <tr key={index}>
                    <td>{orcamento["ID do Orçamento"]}</td>
                    <td>Rascunho {index}</td>
                    <td>{orcamento["Data de criação"]}</td>
                    <td>
                      <ol>
                        {produtos.map((produto, index) => {
                          return <li key={index}>{produto["Produtos"]}</li>;
                        })}
                      </ol>
                    </td>
                    <td>
                      <Button
                        value={index}
                        onClick={novoOrc}
                        variant="outline-light"
                      >
                        {" "}
                        Abrir Orcamento
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
