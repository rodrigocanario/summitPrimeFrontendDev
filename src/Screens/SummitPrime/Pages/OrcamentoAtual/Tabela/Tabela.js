import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../../../Redux/Actions/Actions";
import { Tfooter } from "./Tfooter";
import { TRow } from "./TRow";

export const Tabela = () => {
  const dispatch = useDispatch();
  const orcamentos = useSelector((state) => state.orcamentos);
  const [indexOrcamento, setIndexOrcamento] = useState(
    orcamentos.salvos.findIndex(
      (orcamento) => orcamento.id === orcamentos.atual
    )
  );
  const [orcamentoAtual, setOrcamentoAtual] = useState(
    orcamentos.salvos.find((orcamento) => orcamento.id === orcamentos.atual)
  );
  useEffect(() => {
    setIndexOrcamento(
      orcamentos.salvos.findIndex(
        (orcamento) => orcamento.id === orcamentos.atual
      )
    );
    setOrcamentoAtual(
      orcamentos.salvos.find((orcamento) => orcamento.id === orcamentos.atual)
    );
  }, []);
  return (
    <Row>
      <section>
        <div id="table-header">
          <table border="0">
            <thead>
              <tr>
                <th id="th" className="tdIndex">
                  ITEM
                </th>
                <th id="th" className="tdSku">
                  REFERÊNCIA
                </th>
                <th id="th">NOME</th>
                <th id="th" className="tdCaixaMaster">
                  MÚLTIPLO CAIXA MASTER
                </th>
                <th id="th" className="tdDescontoCaixaMaster">
                  DESCONTO CAIXA MASTER
                </th>
                <th id="th" className="tdValor">
                  VALOR UNITÁRIO
                </th>
                <th id="th" className="tdQuantidade">
                  QUANTIDADE
                </th>
                <th id="th" className="tdPreco">
                  VALOR
                </th>
                <th id="th" className="tdEstoque">
                  ESTOQUE
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div id="table-body">
          <table border="0">
            <tbody>
              {orcamentoAtual.itens.map((element, index) => {
                return (
                  <TRow
                    key={index}
                    index={index}
                    itens={element}
                    indexOrcamento={indexOrcamento}
                  />
                );
              })}
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "70px",
                  }}
                >
                  {" "}
                  <Button
                    variant="outline-light"
                    onClick={() => dispatch(addItem(indexOrcamento))}
                  >
                    +
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="table-footer">
          <table
            border="0"
            style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
          >
            <Tfooter indexOrcamento={indexOrcamento} />
          </table>
        </div>
      </section>
    </Row>
  );
};
