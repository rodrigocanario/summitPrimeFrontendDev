import React from "react";
import { useSelector } from "react-redux";

export const VndaTableRow = (props) => {
  const pedido = useSelector((state) => state.vndaPedidos[props.index]);
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
          className="table-input"
          autoComplete="off"
          defaultValue={pedido["pedido"]}
          onClick={() => {}}
        />
      </td>
      <td id="td" className="tdRowVnda">
        <input
          className="table-input"
          autoComplete="off"
          defaultValue={pedido["valor"]}
        />
      </td>
    </tr>
  );
};
