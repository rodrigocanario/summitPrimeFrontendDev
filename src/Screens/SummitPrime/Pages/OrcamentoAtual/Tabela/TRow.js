import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../../../../../Redux/Actions/Actions";
import { ChangeProduto } from "../../../../../Redux/Actions/TabelaActions/ChangeProduto";
import { Quantity } from "./Quantity";
import { BsTrash } from "react-icons/bs";

export const TRow = (props) => {
  const dispatch = useDispatch();
  const Itens = useSelector(
    (state) => state.orcamentos.salvos[props.indexOrcamento].itens[props.index]
  );
  const informacoes = useSelector((state) => state.informacoes);

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

  return (
    <tr className={props.index % 2 === 0 ? "tdWhite" : ""}>
      <td id="td" className="tdIndex">
        {props.index + 1}.
      </td>
      <td id="td" className="tdSku">
        <div key={Itens.sku}>
          <input
            autoFocus
            className="table-input"
            autoComplete="off"
            name={"input-" + props.index}
            defaultValue={Itens.sku}
            onChange={handleChange}
            onKeyDown={handleEnter}
          />
        </div>
      </td>
      <td>{Itens.nome}</td>
      <td className="tdCaixaMaster">
        {Itens.caixaMaster ? Itens.caixaMaster + " un" : ""}
      </td>
      <td className="tdDescontoCaixaMaster">
        {Itens.quantidade % Itens.caixaMaster === 0 && Itens.quantidade > 0
          ? "5%"
          : ""}
      </td>
      <td className="tdValor">
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
      <td className="tdQuantidade">
        {Itens.nome ? (
          <Quantity index={props.index} indexOrcamento={props.indexOrcamento} />
        ) : (
          ""
        )}
      </td>
      <td className="tdPreco">
        {Itens.nome ? "R$" + parseFloat(Itens.preco).toFixed(2) : ""}
      </td>
      <td className="tdEstoque">
        {Itens.nome ? (Itens.estoque > 0 ? "Disponível" : "Indisponível") : ""}
      </td>
      <td className="tdTrash">
        <button
          onClick={() =>
            dispatch(deleteItem(props.index, props.indexOrcamento))
          }
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <BsTrash />
        </button>
      </td>
    </tr>
  );
};
