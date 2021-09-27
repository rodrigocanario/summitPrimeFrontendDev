import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  hideSalvosModal,
  showSalvosModal,
  updateOrcamentos,
} from "../../../../Redux/Actions/Actions";
import { ModalOrcamentosSalvos } from "./ModalOrcamentosSalvos";

export const OrcamentosSalvos = () => {
  const orcamentosSalvos = useSelector((state) => state.orcamentos.salvos);
  const dispatch = useDispatch();

  const handleAbrirOrcamento = (e) => {
    let id = orcamentosSalvos[e.target.value].id;
    dispatch(updateOrcamentos({ atual: id }));
    dispatch(hideSalvosModal());
    dispatch(changePage("home"));
  };

  return (
    <Container fluid>
      <Row
        style={{ height: "100%", minHeight: "100vh", paddingTop: "20px" }}
        className="justify-content-center align-content-start"
      >
        <Col xs={11}>
          <Row className="justify-content-end">
            <Col id="coluna" className="text-end" xs={1}>
              <Button
                onClick={() => dispatch(showSalvosModal())}
                id="novoOrcamento"
              >
                Novo Orçamento
              </Button>
            </Col>
          </Row>
          <Row>
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
                  <th style={{ width: "225px" }}> Nome</th>
                  <th>Quantidade de Itens</th>
                  <th>Valor total</th>
                  <th>Data ultima modificacao</th>
                  <th style={{ width: "125px" }}>Abrir</th>
                </tr>
              </thead>
              <tbody>
                {orcamentosSalvos.map((orcamento, index) => {
                  return (
                    <tr key={index}>
                      <td> {orcamento.titulo}</td>
                      <td>{orcamento.itens.length}</td>
                      <td>{orcamento.total}</td>
                      <td>{orcamento.ultimaModificacao}</td>
                      <td>
                        <Button
                          onClick={handleAbrirOrcamento}
                          value={index}
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
          </Row>
        </Col>
      </Row>
      <ModalOrcamentosSalvos />
    </Container>
  );
};
