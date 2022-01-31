import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Quantity } from "./Quantity";
import { BsTrash } from "react-icons/bs";
import { ChangeQuantidade } from "./../../../../Redux/Actions/Itens/ChangeQuantidade";
import { ChangeSku } from "./../../../../Redux/Actions/Itens/ChangeSku";
import { DeleteItens } from "./../../../../Redux/Actions/Itens/DeleteItens";

export const TRow = (props) => {
  const dispatch = useDispatch();
  const Item = useSelector(
    (state) =>
      state.databank.orcamentosPrime[props.indexOrcamento].itens[props.index]
  );
  const handleChange = (e) => {
    dispatch(ChangeSku(props.index, e.target.value));
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
            await dispatch(ChangeQuantidade());
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
    <tr className={props.index % 2 === 0 ? "tdWhite" : "tdBlack"}>
      <td id="td" className="tdIndex">
        {props.index + 1}.
      </td>
      <td id="td" className="tdSku">
        <div key={Item.sku}>
          <input
            autoFocus
            className="table-input"
            autoComplete="off"
            name={"input-" + props.index}
            defaultValue={Item.sku ? Item.sku : ""}
            onChange={handleChange}
            onKeyDown={handleEnter}
          />
        </div>
      </td>
      {Item.nome ? (
        <>
          <td>{Item.nome}</td>
          <td className="tdCaixaMaster">{Item.caixaMaster} un</td>
          <td className="tdDescontoCaixaMaster">
            {Item.quantidade % Item.caixaMaster === 0 && Item.quantidade > 0
              ? "5%"
              : ""}
          </td>
          <td className="tdValor">
            <span>R$ {parseFloat(Item.valor).toFixed(2)} </span>{" "}
          </td>
          <td className="tdQuantidade">
            <Quantity
              multiplo={Item.multiplo}
              index={props.index}
              indexOrcamento={props.indexOrcamento}
            />
          </td>
          <td className="tdPreco">
            R$ {parseFloat(Item.valor * Item.quantidade).toFixed(2)}
          </td>
          <td className="tdEstoque">
            {Item.estoque > 0 ? "Disponível" : "Indisponível"}
          </td>
          <td className="tdTrash">
            <button
              onClick={() => dispatch(DeleteItens(Item.sku))}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <BsTrash />
            </button>
          </td>
        </>
      ) : (
        <>
          <td></td>
          <td className="tdCaixaMaster"></td>
          <td className="tdDescontoCaixaMaster"></td>
          <td className="tdValor"></td>
          <td className="tdQuantidade"></td>
          <td className="tdPreco"></td>
          <td className="tdEstoque"></td>
          <td className="tdTrash"></td>
        </>
      )}
    </tr>
  );
};
