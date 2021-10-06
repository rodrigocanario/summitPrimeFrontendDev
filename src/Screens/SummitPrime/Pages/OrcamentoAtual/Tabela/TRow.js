import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../../../Redux/Actions/Actions";
import { calcularValores } from "../../../../../Redux/Actions/TabelaActions/CalcularValores";
import { ChangeProduto } from "../../../../../Redux/Actions/TabelaActions/ChangeProduto";
import { Quantity } from "./Quantity";

export const TRow = (props) => {
  const dispatch = useDispatch();
  const Itens = useSelector(
    (state) => state.orcamentos.salvos[props.indexOrcamento].itens[props.index]
  );
  const informacoes = useSelector((state) => state.informacoes);

  const handleEnter = (e) => {
    switch (e.key) {
      case "Enter":
        let nextSibling = document.querySelector(
          `input[name=input-${props.index + 1}]`
        );
        if (nextSibling) {
          nextSibling.focus();
        } else {
          (async () => {
            await dispatch(addItem());
            nextSibling = document.querySelector(
              `input[name=input-${props.index + 1}]`
            );
            nextSibling.focus();
          })();
        }
        break;
      case "ArrowRight":
        let SiblingRight = document.querySelector(
          `input[name=input-quantity-${props.index}]`
        );
        if (e.shiftKey) {
          SiblingRight.focus();
        }

        break;
      case "ArrowUp":
        let SiblingUp = document.querySelector(
          `input[name=input-${props.index - 1}]`
        );
        if (SiblingUp) {
          SiblingUp.focus();
        }
        break;
      case "ArrowDown":
        let SiblingDown = document.querySelector(
          `input[name=input-${props.index + 1}]`
        );
        if (SiblingDown) {
          SiblingDown.focus();
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    dispatch(
      ChangeProduto(
        props.index,
        props.indexOrcamento,
        e.target.value,
        informacoes.tabela,
        informacoes.desconto
      )
    );
  };

  return (
    <tr>
      <td id="td" className="tdIndex">
        {props.index + 1}.
      </td>
      <td id="td" className="tdSku">
        <input
          className="table-input"
          autoComplete="off"
          name={"input-" + props.index}
          defaultValue={Itens.sku}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </td>
      <td id="td">{Itens.nome}</td>
      <td id="td" className="tdCaixaMaster">
        {Itens.caixaMaster ? Itens.caixaMaster + " un" : ""}
      </td>
      <td id="td" className="tdDescontoCaixaMaster">
        {Itens.quantidade % Itens.caixaMaster === 0 && Itens.quantidade > 0
          ? "5%"
          : ""}
      </td>
      <td id="td" className="tdValor">
        {Itens.valorReal && Itens.valorReal !== "NaN" ? (
          <>
            {" "}
            <span>R$</span>{" "}
            <span> {parseFloat(Itens.valorReal).toFixed(2)} </span>{" "}
          </>
        ) : (
          ""
        )}
      </td>
      <td id="td" className="tdQuantidade">
        {Itens.nome ? (
          <Quantity index={props.index} indexOrcamento={props.indexOrcamento} />
        ) : (
          ""
        )}
      </td>
      <td id="td" className="tdPreco">
        {Itens.nome ? "R$" + parseFloat(Itens.preco).toFixed(2) : ""}
      </td>
      <td id="td" className="tdEstoque">
        {Itens.nome ? (Itens.estoque > 0 ? "Disponível" : "Indisponível") : ""}
      </td>
    </tr>
  );
};
