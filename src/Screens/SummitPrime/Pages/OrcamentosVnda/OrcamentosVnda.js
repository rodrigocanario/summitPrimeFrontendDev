import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  showSalvosModal,
  showVndaModal,
} from "../../../../Redux/Actions/Actions";
import { ModalOrcamentosSalvos } from "../OrcamentosSalvos/ModalOrcamentosSalvos";
import { ModalOrcamentosVnda } from "./ModalOrcamentosVnda";
const csv2json = require("csvjson-csv2json");

export const OrcamentosVnda = () => {
  const orcamentosVnda = useSelector((state) => state.orcamentos.vnda);
  const dispatch = useDispatch();

  const parseDatee = (date) => {
    let dia = date.substring(8, 10);
    let mes = date.substring(5, 7);
    let ano = date.substring(0, 4);
    let hora = date.substring(11, 19);
    let data = `${dia}/${mes}/${ano} ${hora}`;
    return data;
  };

  const novoOrc = async (e) => {
    dispatch(showVndaModal(e.target.parentElement.id));
  };

  return (
    <div className="bodie">
      <Row
        style={{ height: "100%", minHeight: "100vh" }}
        className="justify-content-center align-content-start"
      >
        <Col xs={11}>
          <Row className="text-center">
            <Col style={{ padding: "0px 0px 30px 0px" }}>
              <h1>Lista Plataforma Catálogo</h1>
            </Col>
          </Row>
          <Row className="justify-content-end ">
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
                borderColor: "white",
              }}
              bordered
            >
              <thead>
                <tr>
                  <th style={{ width: "225px" }}> Data e Hora</th>
                  <th>Produtos</th>
                </tr>
              </thead>
              <tbody>
                {orcamentosVnda.map((orcamento, index) => {
                  let produtos = csv2json(orcamento["CSV"]);
                  return (
                    <tr
                      className={
                        index % 2 === 0
                          ? "tdWhite trOrcamentosSalvos"
                          : "trOrcamentosSalvos"
                      }
                      id={index}
                      onClick={novoOrc}
                      key={index}
                    >
                      <td>{parseDatee(orcamento["Data de criação"])}</td>
                      <td>
                        <ol
                          className="text-start"
                          id={index}
                          style={{
                            overflowY: "scroll",
                            maxHeight: "70px",
                            marginBottom: "0px",
                          }}
                        >
                          {produtos.map((produto, index) => {
                            return <li key={index}>{produto["Produtos"]}</li>;
                          })}
                        </ol>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
      <ModalOrcamentosVnda />
      <ModalOrcamentosSalvos />
    </div>
  );
};
