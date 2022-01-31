import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LojaFiltro } from "./LojaFiltro";

export const LojaFilters = () => {
  let filtros = useSelector((state) => state.loja.filtros);
  let filtrosKeys = ["marca", "linha", "categoria", "embalagem"];

  return (
    <Row
      style={{ overflowY: "scroll", maxHeight: "660px" }}
      className="justify-content-center align-content-start"
    >
      {filtrosKeys.map((filtroKey, index) => {
        return (
          <LojaFiltro
            key={index}
            titulo={filtroKey}
            filtros={filtros[filtroKey]}
          />
        );
      })}
    </Row>
  );
};
