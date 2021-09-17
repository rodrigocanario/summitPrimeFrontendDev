import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateVndaPedidos } from "../../../Redux/Actions/Actions";
import { getVndaPedidos } from "../../../Utils/callBackend";
import { VndaTableBody } from "./VndaTableBody";
import { VndaTableHeader } from "./VndaTableHeader";
import { VndaTableModal } from "./VndaTableModal";
const XLSX = require("xlsx");
export const VndaTable = () => {
  const dispatch = useDispatch();
  const headers = [
    "ID",
    "Nome do Cliente",
    "CNPJ",
    "Agente",
    "Codigo do Cliente",
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

  let baixarRelatorio = async () => {
    await getVndaPedidos().then((r) => {
      let data = r.sort(function (a, b) {
        return parseInt(b.id) - parseInt(a.id);
      });
      for (let i = 0; i < data.length; i++) {
        const orcamento = data[i];
        orcamento["Produtos"] = JSON.stringify(orcamento["Produtos"]);
      }
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, "CarrinhosPerdidos.xlsx");
    });
  };

  return (
    <section>
      <VndaTableHeader headers={headers} />
      <VndaTableBody />
      <Button onClick={baixarRelatorio} style={{ marginTop: "50px" }}>
        Baixar Relatorio
      </Button>
      <VndaTableModal />
    </section>
  );
};
