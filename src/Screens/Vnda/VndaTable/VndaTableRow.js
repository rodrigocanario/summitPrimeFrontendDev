import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showVndaModal } from "../../../Redux/Actions";

export const VndaTableRow = (props) => {
  const dispatch = useDispatch();
  const pedido = useSelector((state) => state.vndaPedidos[props.index]);
  const openVndaTableModal = () => {
    dispatch(showVndaModal(pedido));
  };
  return (
    <tr className="tdRowVndaMain" onClick={openVndaTableModal}>
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
          defaultValue={pedido[pedido]}
          onClick={() => {}}
        />
      </td>
      <td id="td" className="tdRowVnda">
        <input
          className="table-input"
          autoComplete="off"
          defaultValue={pedido[pedido]}
        />
      </td>
    </tr>
  );
};
