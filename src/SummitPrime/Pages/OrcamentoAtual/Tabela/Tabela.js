import React from "react";
import { Button, Row } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AddItens } from "./../../../../Redux/Actions/Itens/AddItens";
import { Tfooter } from "./Tfooter";
import { TRow } from "./TRow";

export const Tabela = () => {
  const dispatch = useDispatch();
  const orcamentos = useSelector((state) => state.databank.orcamentosPrime);
  let indexOrcamento = useSelector((state) => state.config.orcamentoAtivo);
  let orcamentoAtual = orcamentos[indexOrcamento];
  return (
    <Row>
      <section>
        <table
          border="0"
          className="tables"
          id="table-header"
          // style={{ backgroundColor: "darkblue" }}
        >
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
              <th id="th" className="tdTrash">
                <BsTrash style={{ fontSize: "25px" }} />
              </th>
            </tr>
          </thead>
        </table>
        {/* </div> */}
        <div id="table-body">
          <table border="0" className="tables">
            <tbody>
              {orcamentoAtual.itens
                ? orcamentoAtual.itens.map((element, index) => {
                    return (
                      <TRow
                        key={index}
                        index={index}
                        itens={element}
                        indexOrcamento={indexOrcamento}
                      />
                    );
                  })
                : ""}
              <tr>
                <td
                  colSpan="10"
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
                    onClick={() => dispatch(AddItens())}
                  >
                    +
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div id="table-footer"> */}
        <table id="table-footer" border="0">
          <Tfooter indexOrcamento={indexOrcamento} />
        </table>
        {/* </div> */}
      </section>
    </Row>
  );
};
