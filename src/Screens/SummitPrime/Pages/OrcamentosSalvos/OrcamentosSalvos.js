import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  hideSalvosModal,
  showSalvosModal,
  toggleModal,
  toggleSideBar,
  updateOrcamentos,
} from "../../../../Redux/Actions/Actions";
import { ModalOrcamentosSalvos } from "./ModalOrcamentosSalvos";

export const OrcamentosSalvos = () => {
  const orcamentosSalvos = useSelector((state) => state.orcamentos.salvos);
  const dispatch = useDispatch();

  const handleAbrirOrcamento = (e) => {
    let id = orcamentosSalvos[e.target.parentElement.id].id;
    dispatch(updateOrcamentos({ atual: id }));
    dispatch(hideSalvosModal());
    dispatch(toggleSideBar(true));
    dispatch(changePage("orcamentoAtual"));
    dispatch(toggleModal("atual", true));
  };
  const parseDatee = (date) => {
    let dia = date.substring(8, 10);
    let mes = date.substring(5, 7);
    let ano = date.substring(0, 4);
    let hora = date.substring(11, 19);
    let data = `${dia}/${mes}/${ano} ${hora}`;
    return data;
  };

  return (
    <div className="bodie">
      <Row
        style={{ height: "100%", minHeight: "100vh", paddingTop: "20px" }}
        className="justify-content-center align-content-start"
      >
        <Col xs={11}>
          <Row className="text-center">
            <Col style={{ padding: "0px 0px 30px 0px" }}>
              <h1>Orçamentos Salvos</h1>
            </Col>
          </Row>
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
                  <th>Valor Total</th>
                  <th>Última Modificação</th>
                </tr>
              </thead>
              <tbody>
                {orcamentosSalvos.map((orcamento, index) => {
                  return (
                    <tr
                      className={
                        index % 2 === 0
                          ? "tdWhite trOrcamentosSalvos"
                          : "trOrcamentosSalvos"
                      }
                      onClick={handleAbrirOrcamento}
                      id={index}
                      key={index}
                    >
                      <td> {orcamento.titulo}</td>
                      <td>{orcamento.itens.length}</td>
                      <td>R${parseFloat(orcamento.total).toFixed(2)}</td>
                      <td>{parseDatee(orcamento.ultimaModificacao)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
      <ModalOrcamentosSalvos />
    </div>
  );
};
