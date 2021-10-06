import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../../../Redux/Actions/Actions";
import { BiMinus, BiPlus } from "react-icons/bi";
import { ChangeQuantidade } from "../../../../../Redux/Actions/TabelaActions/ChangeQuantidade";

export const Quantity = (props) => {
  const dispatch = useDispatch();
  const orcamentos = useSelector((state) => state.orcamentos);
  const incrementar = () => {
    dispatch(ChangeQuantidade("inc", props.index, props.indexOrcamento));
  };

  const decrementar = () => {
    dispatch(ChangeQuantidade("dec", props.index, props.indexOrcamento));
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
        dispatch(addItem());
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
          <BiMinus />
        </button>
        <input
          name={`input-quantity-${props.index}`}
          className="quantity-input__screen"
          type="text"
          value={
            orcamentos.salvos[props.indexOrcamento].itens[props.index]
              .quantidade
          }
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
