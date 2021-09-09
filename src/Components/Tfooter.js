import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pagamentoAntecipado } from "../Redux/Actions";
import { BotaoNext } from "./BotaoNext";

export const Tfooter = () => {
  const orcamento = useSelector((state) => state.orcamento);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(pagamentoAntecipado(e.target.checked));
  };
  return (
    <tfoot>
      <tr id="tr">
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          VALOR SUBTOTAL:
        </td>
        <td id="td-footer" className="align-middle">
          R${orcamento.subTotal.toFixed(2)}
        </td>
      </tr>

      <tr id="tr">
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          <BotaoNext />
        </td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          <label htmlFor="pagamentoAntecipado">
            <input
              onChange={handleChange}
              type="checkbox"
              id="pagamentoAntecipado"
              name="pagamentoAntecipado"
              style={{ marginRight: "5px" }}
            />
            PAGAMENTO ANTECIPADO
          </label>
        </td>
        <td id="td-footer" className="align-middle">
          (-R${(orcamento.subTotal * 0.05).toFixed(2)})
        </td>
      </tr>
      <tr id="tr">
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          VALOR TOTAL:
        </td>
        <td id="td-footer" className="align-middle">
          R${orcamento.total ? parseFloat(orcamento.total).toFixed(2) : 0.0}
        </td>
      </tr>
    </tfoot>
  );
};
