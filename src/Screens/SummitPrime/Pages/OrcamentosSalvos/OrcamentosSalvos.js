import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrcamentoAtivo,
  toggleModal,
} from "../../../../Redux/Actions/Actions";
import { ChangePage } from "../../../../Redux/Actions/Config/ChangePage";
import { NovoOrcamento } from "./NovoOrcamento";

export const OrcamentosSalvos = () => {
  const orcamentosSalvos = useSelector(
    (state) => state.databank.orcamentosPrime
  );
  const produtos = useSelector((state) => state.databank.produtos);
  const dispatch = useDispatch();

  const handleAbrirOrcamento = (e) => {
    dispatch(changeOrcamentoAtivo(e.target.parentElement.id));
    dispatch(ChangePage("orcamentoAtual"));
  };
  const parseDatee = (date) => {
    date = date.toString();
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
              <h1>Meus Orçamentos</h1>
            </Col>
          </Row>
          <Row className="align-items-end justify-content-end">
            <Col className="text-end" sm={{ span: 2, offset: 2 }}>
              <button
                onClick={() => dispatch(toggleModal({ instrucoes: true }))}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Instruções <BsQuestionCircle />
              </button>
            </Col>
            <NovoOrcamento />
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
                  let total = 0;

                  for (let i = 0; i < orcamento.itens.length; i++) {
                    const item = orcamento.itens[i];

                    let produto = produtos.find((prod) => {
                      return prod.sku === item.sku;
                    });
                    if (produto) {
                      total += produto.valor * item.quantidade;
                    }
                  }

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
                      <td>R${parseFloat(total).toFixed(2)}</td>
                      <td>{parseDatee(orcamento.ultimaModificacao)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
