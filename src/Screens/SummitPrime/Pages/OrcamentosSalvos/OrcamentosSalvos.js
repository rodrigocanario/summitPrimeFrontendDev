import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export const OrcamentosSalvos = () => {
  const orcamentosSalvos = useSelector((state) => state.orcamentos.salvos);
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
                <th style={{ width: "225px" }}> Data e Hora</th>
                <th>Produtos</th>
                <th style={{ width: "125px" }}>Abrir</th>
              </tr>
            </thead>
            <tbody>
              {orcamentosSalvos.map((orcamento, index) => {
                return (
                  <tr key={index}>
                    <td> data</td>
                    <td>
                      <ol
                        style={{
                          overflowY: "scroll",
                          maxHeight: "65px",
                          marginBottom: "0px",
                        }}
                      >
                        {orcamento.itens.map((produto, index) => {
                          return <li key={index}>{produto.nome}</li>;
                        })}
                      </ol>
                    </td>
                    <td>
                      <Button value={index} variant="outline-light">
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
