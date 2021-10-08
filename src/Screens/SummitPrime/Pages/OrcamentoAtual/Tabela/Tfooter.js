import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PagamentoAntecipado } from "../../../../../Redux/Actions/TabelaActions/PagamentoAntecipado";
import { BotaoDelete } from "./BotaoDelete";
import { BotaoNext } from "./BotaoNext";

export const Tfooter = (props) => {
  const orcamento = useSelector(
    (state) => state.orcamentos.salvos[props.indexOrcamento]
  );
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(PagamentoAntecipado(e.target.checked));
  };
  return (
    <tfoot>
      <tr id="trFooter">
        <td id="td-footer" className="align-middle">
          {" "}
          <BotaoDelete />
        </td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          <BotaoNext indexOrcamento={props.indexOrcamento} />
        </td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          VALOR SUBTOTAL:
        </td>
        <td id="td-footer" className="align-middle">
          R${orcamento.subTotal.toFixed(2)}
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
      <tr id="trFooter">
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
      <tr id="trFooter">
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle"></td>
        <td id="td-footer" className="align-middle">
          VALOR TOTAL DISPONIVEL:
        </td>
        {errors.pedidoMinimo ? (
          <td id="td-footer" style={{ color: "red" }} className="align-middle">
            R$
            {orcamento.totalDisponivel
              ? parseFloat(orcamento.totalDisponivel).toFixed(2)
              : 0.0}
          </td>
        ) : (
          <td id="td-footer" className="align-middle">
            R$
            {orcamento.totalDisponivel
              ? parseFloat(orcamento.totalDisponivel).toFixed(2)
              : 0.0}
          </td>
        )}
      </tr>
    </tfoot>
  );
};
