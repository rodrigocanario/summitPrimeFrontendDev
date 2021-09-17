import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  calcularTotal,
  decrement,
  increment,
} from "../../../../../Redux/Actions/Actions";
import { BiMinus, BiPlus } from "react-icons/bi";

export const Quantity = (props) => {
  const dispatch = useDispatch();
  const Infos = useSelector((state) => state.orcamento.itens[props.index]);
  const multiplo = useSelector(
    (state) => state.orcamento.itens[props.index].multiplo
  );
  const incrementar = () => {
    dispatch(increment(props.index, multiplo));
    dispatch(calcularTotal(props.index));
  };

  const decrementar = () => {
    dispatch(decrement(props.index, multiplo));
    dispatch(calcularTotal(props.index));
  };

  const handleKey = (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp":
        incrementar();
        break;
      case "ArrowDown":
        decrementar();
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
          value={Infos.quantidade}
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
