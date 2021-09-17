import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  calcularTotal,
  trocarItem,
} from "../../../../../Redux/Actions/Actions";
import { getProduto } from "../../../../../Utils/callBackend";
import { Quantity } from "./Quantity";

export const TRow = (props) => {
  const dispatch = useDispatch();
  const Infos = useSelector((state) => state.orcamento.itens[props.index]);
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
        SiblingRight.focus();
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
    if (e.target.value) {
      getProduto({
        sku: e.target.value,
        tabela: informacoes.tabela,
      }).then((response) => {
        dispatch(trocarItem(response, props.index, informacoes.desconto));
        dispatch(calcularTotal(props.index));
      });
    } else {
      dispatch(
        trocarItem(
          {
            valor: "",
            uf: "",
            nome: "",
            sku: 0,
            multiplo: 0,
          },
          props.index
        )
      );
    }
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
          defaultValue={Infos.sku}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
      </td>
      <td id="td" className="nome">
        {Infos.nome}
      </td>
      <td id="td" className="tdCaixaMaster">
        {Infos.caixaMaster ? Infos.caixaMaster + "UN" : ""}
      </td>
      <td id="td" className="tdDescontoCaixaMaster">
        {Infos.quantidade % Infos.caixaMaster === 0 && Infos.quantidade > 0
          ? "5%"
          : ""}
      </td>
      <td id="td" className="tdValor">
        {Infos.valorReal && Infos.valorReal !== "NaN"
          ? "R$" + parseFloat(Infos.valorReal).toFixed(2)
          : ""}
      </td>
      <td id="td" className="tdQuantidade">
        {Infos.nome ? <Quantity index={props.index} /> : ""}
      </td>
      <td id="td" className="tdPreco">
        {Infos.nome
          ? Infos.preco
            ? "R$" + parseFloat(Infos.preco).toFixed(2)
            : "R$0.00"
          : ""}
      </td>
      <td id="td" className="tdEstoque">
        {Infos.nome ? (Infos.estoque > 0 ? "Disponível" : "Indisponível") : ""}
      </td>
    </tr>
  );
};
