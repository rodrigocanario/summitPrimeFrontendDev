import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateVndaPedidos } from "../../../Redux/Actions";
import { getVndaPedidos } from "../../../Utils/callBackend";
import { VndaTableBody } from "./VndaTableBody";
import { VndaTableHeader } from "./VndaTableHeader";
import { VndaTableModal } from "./VndaTableModal";
export const VndaTable = () => {
  const dispatch = useDispatch();
  const headers = [
    "ID",
    "Nome do Cliente",
    "CNPJ",
    "Agente",
    "Ordem do Pedido",
    "Faturamento",
  ];
  useEffect(() => {
    getVndaPedidos().then((r) => {
      let array = r.sort(function (a, b) {
        return parseInt(b.id) - parseInt(a.id);
      });
      let pagina = array.slice(0, 50);
      dispatch(updateVndaPedidos(pagina));
    });
  }, [dispatch]);
  return (
    <section>
      <VndaTableHeader headers={headers} />
      <VndaTableBody />
      <VndaTableModal />
    </section>
  );
};
