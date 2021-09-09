import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { calcularTotal, changePage, novoOrcamento } from "../Redux/Actions";
import { getProduto } from "../Utils/callBackend";
const csv2json = require("csvjson-csv2json");

export const MeusOrcamentos = () => {
  const informacoes = useSelector((state) => state.informacoes);
  const Orcamento = useSelector((state) => state.orcamento);
  const dispatch = useDispatch();

  const novoOrc = async (e) => {
    let produtos = [];
    let produtosRaw = csv2json(informacoes.orcamentos[e.target.value]["CSV"]);
    for (let i = 0; i < produtosRaw.length; i++) {
      const element = produtosRaw[i];
      let { Referência: sku, Quantidade: quantidade } = element;
      let data = { sku, tabela: informacoes.tabela };
      await getProduto(data).then((resp) => {
        let valorReal = resp.valor;
        if (quantidade % resp.caixaMaster === 0) {
          valorReal = (resp.valor * 0.95).toFixed(2);
        }
        let preco = valorReal * quantidade;
        produtos.push({ ...resp, quantidade, valorReal, preco });
      });
    }
    console.log(produtos);
    dispatch(novoOrcamento(produtos));
    dispatch(calcularTotal(0));
    localStorage.setItem("orcamento", JSON.stringify(Orcamento));
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
