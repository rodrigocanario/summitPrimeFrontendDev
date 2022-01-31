import React from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToggleFiltros } from "../../../Redux/Actions/Loja/ToggleFiltros";

export const LojaOrdenar = () => {
  let dispatch = useDispatch();
  const ordens = useSelector((state) => state.loja.ordens);
  return (
    <Row
      style={{ overflowY: "none", maxHeight: "660px" }}
      className="justify-content-center align-content-start"
    >
      {ordens.map((ordem, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              dispatch(ToggleFiltros({ ordem: ordem.value }));
            }}
            className="buttonOrdem"
          >
            {ordem.name}
          </button>
        );
      })}
    </Row>
  );
};
