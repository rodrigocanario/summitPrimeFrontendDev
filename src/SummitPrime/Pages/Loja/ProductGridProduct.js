import React from "react";
import { Col, Figure } from "react-bootstrap";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import { AddItens } from "./../../../Redux/Actions/Itens/AddItens";
import { ChangeQuantidade } from "./../../../Redux/Actions/Itens/ChangeQuantidade";
import { DeleteItens } from "./../../../Redux/Actions/Itens/DeleteItens";
import "./ProductGridProduct.css";
// import CornerRibbon from "./cornerRibbon";
export const ProductGridProduct = (props) => {
  let baseLink = "https://buckettelexpress.s3.amazonaws.com/FOTOS+GOFIND/";
  let { produto } = props;
  const dispatch = useDispatch();

  let decrement = () => {
    if (produto.quantidade > produto.multiplo) {
      dispatch(
        ChangeQuantidade(produto.sku, produto.quantidade - produto.multiplo)
      );
    } else if (produto.quantidade === produto.multiplo) {
      dispatch(DeleteItens(produto.sku));
    }
  };
  let increment = () => {
    if (produto.quantidade === 0) {
      dispatch(AddItens(produto.sku, produto.quantidade + produto.multiplo));
    } else {
      dispatch(
        ChangeQuantidade(produto.sku, produto.quantidade + produto.multiplo)
      );
    }
  };
  return (
    <Col xs={3} className="text-start ">
      <Figure
        className="figureProducts"
        style={{
          position: "relative",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        {produto.estoque > 0 ? (
          ""
        ) : (
          <></>
          // <CornerRibbon
          //   position="top-right" // OPTIONAL, default as "top-right"
          //   fontColor="#f0f0f0" // OPTIONAL, default as "#f0f0f0"
          //   backgroundColor="rgb(223 0 21)" // OPTIONAL, default as "#2c7"
          //   containerStyle={{}} // OPTIONAL, style of the ribbon
          //   style={{ zIndex: 1 }} // OPTIONAL, style of ribbon content
          //   className="" // OPTIONAL, css class of ribbon
          // >
          //   SEM ESTOQUE
          // </CornerRibbon>
        )}
        <a
          target="_blank"
          rel="noreferrer"
          href={baseLink + produto.sku + ".jpg"}
        >
          <LazyLoad height={200}>
            <img
              className="img-fluid"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "errorImage.jpg";
              }}
              alt={produto.nome}
              src={baseLink + produto.sku + ".jpg"}
              style={{ borderRadius: "20px" }}
            />
          </LazyLoad>
        </a>{" "}
        <Figure.Caption style={{ color: "black", width: "100%" }}>
          <div style={{ textAlign: "-webkit-center", padding: "10px" }}>
            <div
              className="quantity-input"
              style={
                produto.quantidade > 0
                  ? {
                      backgroundColor: "#132f89",
                      color: "white",
                      width: "fit-content",
                    }
                  : {
                      backgroundColor: "black",
                      color: "white",
                      width: "fit-content",
                    }
              }
            >
              <button
                onClick={decrement}
                className="quantity-input__modifier quantity-input__modifier--left"
                style={{ color: "inherit" }}
              >
                {produto.quantidade === produto.multiplo ? (
                  <BiTrash />
                ) : (
                  <BiMinus />
                )}
              </button>
              <input
                className="quantity-input__screen"
                type="text"
                value={produto.quantidade ? produto.quantidade : 0}
                readOnly
                style={{ color: "inherit" }}
              />
              <button
                onClick={increment}
                style={{ color: "inherit" }}
                className="quantity-input__modifier quantity-input__modifier--right"
              >
                <BiPlus />
              </button>
            </div>
          </div>
        </Figure.Caption>
        <Figure.Caption>{produto.nome}</Figure.Caption>
        <Figure.Caption>Referencia: {produto.sku}</Figure.Caption>
        <Figure.Caption>Preco Unitario: R$ {produto.valor}</Figure.Caption>
        <Figure.Caption>
          No Meu Orcamento: R$ {(produto.valor * produto.quantidade).toFixed(2)}
        </Figure.Caption>
      </Figure>
    </Col>
  );
};
