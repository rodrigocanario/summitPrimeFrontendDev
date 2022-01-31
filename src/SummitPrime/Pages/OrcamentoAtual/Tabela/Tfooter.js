import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PagamentoAntecipado } from "./../../../../Redux/Actions/Orcamentos/PagamentoAntecipado";
import { BotaoDelete } from "./BotaoDelete";
import { BotaoNext } from "./BotaoNext";

export const Tfooter = (props) => {
  const orcamento = useSelector((state) => state.databank.orcamentosPrime);
  const errors = useSelector((state) => state.config.errors);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  const [subtotalDisponivel, setSubtotalDisponivel] = useState(0);
  const [total, setTotal] = useState(0);
  const handleChange = (e) => {
    dispatch(PagamentoAntecipado(e.target.checked));
  };
  useEffect(() => {
    let sub = 0;
    let subDisp = 0;
    for (let i = 0; i < orcamento[props.indexOrcamento].itens.length; i++) {
      const item = orcamento[props.indexOrcamento].itens[i];
      sub = sub + item.valor * item.quantidade;
      if (item.estoque > 0) {
        subDisp = subDisp + item.valor * item.quantidade;
      }
    }
    setSubtotal(sub);
    setSubtotalDisponivel(subDisp);
    if (orcamento[props.indexOrcamento].pagamentoAntecipado) {
      setTotal(subDisp * 0.95);
    } else {
      setTotal(subDisp);
    }
  }, [orcamento]);
  return (
    <tfoot>
      <tr id="trFooter">
        <td id="td-footer" className="align-middle">
          {" "}
          <BotaoDelete />
        </td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          <BotaoNext
            totalDisponivel={total}
            indexOrcamento={props.indexOrcamento}
          />
        </td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          SUBTOTAL:
        </td>
        <td id="td-footer" className="align-middle">
          R$ {parseFloat(subtotal).toFixed(2)}
        </td>
      </tr>
      <tr id="trFooter">
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          SUBTOTAL DISPONIVEL:
        </td>

        <td id="td-footer" className="align-middle">
          R$
          {parseFloat(subtotalDisponivel).toFixed(2)}
        </td>
      </tr>

      <tr id="trFooter">
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          <label htmlFor="pagamentoAntecipado">
            <input
              onChange={handleChange}
              type="checkbox"
              checked={orcamento.pagamentoAntecipado}
              id="pagamentoAntecipado"
              name="pagamentoAntecipado"
              style={{ marginRight: "5px" }}
            />
            DESCONTO PAGAMENTO ANTECIPADO
          </label>
        </td>
        <td id="td-footer" className="align-middle">
          (-R${(subtotalDisponivel * 0.05).toFixed(2)})
        </td>
      </tr>
      <tr id="trFooter">
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          TOTAL DISPONIVEL:
        </td>
        <td
          id="td-footer"
          style={errors.pedidoMinimo ? { color: "red" } : { color: "white" }}
          className="align-middle"
        >
          R${parseFloat(total).toFixed(2)}
        </td>
      </tr>
    </tfoot>
  );
};
