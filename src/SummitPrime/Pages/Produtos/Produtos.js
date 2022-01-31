import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrcamentoAtivo,
  toggleModal,
} from "./../../../Redux/Actions/Actions";
import { ChangePage } from "./../../../Redux/Actions/Config/ChangePage";
import { NovoProduto } from "./NovoProduto";

export const Produtos = () => {
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
              <h1>Produtos</h1>
            </Col>
          </Row>
          <Row className="align-items-end justify-content-end">
            <NovoProduto />
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
                  <th>Referencia</th>
                  <th>Nome</th>
                  <th>Caixa Master</th>
                  <th>Estoque</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((orcamento, index) => {
                  if (index < 10) {
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
                        <td> {orcamento.sku}</td>
                        <td>{orcamento.nome}</td>
                        <td>{orcamento.caixaMaster} un.</td>
                        <td>{orcamento.estoque}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
