import { useDispatch, useSelector } from "react-redux";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { ChangeQuantidade } from "./../../../../Redux/Actions/Itens/ChangeQuantidade";
import { DeleteItens } from "./../../../../Redux/Actions/Itens/DeleteItens";
import { AddItens } from "./../../../../Redux/Actions/Itens/AddItens";

export const Quantity = (props) => {
  const dispatch = useDispatch();
  const orcamento = useSelector(
    (state) => state.databank.orcamentosPrime[props.indexOrcamento]
  );
  let produto = orcamento.itens[props.index];
  const incrementar = () => {
    dispatch(
      ChangeQuantidade(produto.sku, produto.quantidade + props.multiplo)
    );
  };

  const decrementar = () => {
    if (produto.quantidade === props.multiplo) {
      dispatch(DeleteItens(produto.sku));
    } else {
      dispatch(
        ChangeQuantidade(produto.sku, produto.quantidade - props.multiplo)
      );
    }
  };

  const handleKey = (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp":
        if (e.shiftKey) {
          let SiblingDown = document.querySelector(
            `input[name=input-quantity-${props.index - 1}]`
          );
          if (SiblingDown) {
            SiblingDown.focus();
          }
        } else {
          incrementar();
        }
        break;
      case "ArrowDown":
        if (e.shiftKey) {
          let SiblingDown = document.querySelector(
            `input[name=input-quantity-${props.index + 1}]`
          );
          if (SiblingDown) {
            SiblingDown.focus();
          }
        } else {
          decrementar();
        }
        break;
      case "ArrowLeft":
        let Sibling = document.querySelector(
          `input[name=input-${props.index}]`
        );
        Sibling.focus();
        break;
      case "Enter":
        dispatch(AddItens());
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="quantity-input">
        <button
          className="quantity-input__modifier quantity-input__modifier--left"
          onClick={decrementar}
        >
          {produto.quantidade > props.multiplo ? <BiMinus /> : <BiTrash />}
        </button>
        <input
          name={`input-quantity-${props.index}`}
          className="quantity-input__screen"
          type="text"
          value={produto.quantidade}
          readOnly
          onKeyDown={handleKey}
        />
        <button
          className="quantity-input__modifier quantity-input__modifier--right"
          onClick={incrementar}
        >
          <BiPlus />
        </button>
      </div>
    </div>
  );
};
