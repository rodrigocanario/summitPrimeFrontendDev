import React from "react";
import { useSelector } from "react-redux";
import { updateVndaPedidos } from "../../../Utils/callBackend";

export const VndaTableRow = (props) => {
  const pedido = useSelector((state) => state.vndaPedidos[props.index]);
  let changePedido = (e) => {
    updateVndaPedidos({
      id: pedido["id"],
      pedido: e.target.value,
    });
  };
  let changeValor = (e) => {
    updateVndaPedidos({
      id: pedido["id"],
      valor: e.target.value,
    });
  };
  let changeCodCliente = (e) => {
    updateVndaPedidos({
      id: pedido["id"],
      codCliente: e.target.value,
    });
  };
  return (
    <tr className="tdRowVndaMain">
      <td id="td" className="tdRowVnda ">
        {pedido["id"]}
      </td>
      <td id="td" className="tdRowVnda">
        {pedido["Nome do cliente"].toLowerCase()}
      </td>
      <td id="td" className="tdRowVnda">
        {pedido["CNPJ"]}
      </td>
      <td id="td" className="tdRowVnda">
        {pedido["Agentes"]}
      </td>
      <td id="td" className="tdRowVnda">
        <input
          onChange={changeCodCliente}
          className="table-input"
          autoComplete="off"
          defaultValue={pedido["codCliente"]}
        />
      </td>
      <td id="td" className="tdRowVnda">
        <input
          onChange={changePedido}
          className="table-input"
          autoComplete="off"
          defaultValue={pedido["pedido"]}
        />
      </td>
      <td id="td" className="tdRowVnda">
        <input
          onChange={changeValor}
          className="table-input"
          autoComplete="off"
          defaultValue={pedido["valor"]}
        />
      </td>
    </tr>
  );
};
