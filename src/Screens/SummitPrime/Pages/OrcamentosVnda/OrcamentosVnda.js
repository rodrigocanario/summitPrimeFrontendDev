import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  calcularTotal,
  changePage,
  novoOrcamento,
} from "../../../../Redux/Actions/Actions";
import { criarOrcamentoVnda } from "../../../../Redux/Actions/CriarOrcamentoVnda";
import { getProduto } from "../../../../Utils/callBackend";
import { ModalOrcamentosVnda } from "./ModalOrcamentosVnda";
const csv2json = require("csvjson-csv2json");

export const OrcamentosVnda = () => {
  const informacoes = useSelector((state) => state.informacoes);
  const orcamentosVnda = useSelector((state) => state.orcamentos.vnda);
  const orcamento = useSelector((state) => state.orcamento);
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
    // let produtos = [];
    // let produtosRaw = csv2json(orcamentosVnda[e.target.value]["CSV"]);
    // for (let i = 0; i < produtosRaw.length; i++) {
    //   const element = produtosRaw[i];
    //   let { Referência: sku, Quantidade: quantidade } = element;
    //   let data = { sku, tabela: informacoes.tabela };
    //   await getProduto(data).then((resp) => {
    //     let valorReal = resp.valor;
    //     if (quantidade % resp.caixaMaster === 0) {
    //       valorReal = (resp.valor * 0.95).toFixed(2);
    //     }
    //     let preco = valorReal * quantidade;
    //     produtos.push({ ...resp, quantidade, valorReal, preco });
    //   });
    // }
    // console.log(produtos);
    // dispatch(novoOrcamento(produtos));
    // dispatch(calcularTotal(0));
    // localStorage.setItem("orcamento", JSON.stringify(orcamento));
    // dispatch(changePage("home"));
    dispatch(criarOrcamentoVnda(e.target.value));
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
                <th style={{ width: "225px" }}> Data e Hora</th>
                <th>Produtos</th>
                <th style={{ width: "125px" }}>Abrir</th>
              </tr>
            </thead>
            <tbody>
              {orcamentosVnda.map((orcamento, index) => {
                let produtos = csv2json(orcamento["CSV"]);
                return (
                  <tr key={index}>
                    <td>{parseDatee(orcamento["Data de criação"])}</td>
                    <td>
                      <ol
                        style={{
                          overflowY: "scroll",
                          maxHeight: "65px",
                          marginBottom: "0px",
                        }}
                      >
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
      <ModalOrcamentosVnda />
    </Container>
  );
};
