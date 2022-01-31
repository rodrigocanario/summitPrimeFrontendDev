import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToggleFiltros } from "../../../Redux/Actions/Loja/ToggleFiltros";

export const LojaFiltro = (props) => {
  let { titulo, filtros, checked, activo } = props;

  let dispatch = useDispatch();

  const capitalize = (string) =>
    [...string.slice(0, 1).toUpperCase(), ...string.slice(1)].join("");
  titulo = titulo
    .split(" ")
    .map((string) => capitalize(string))
    .join(" ");

  let filtrosActive = [];
  let filtrosInactive = [];
  let filtrosGeral = [];
  if (filtros) {
    let filtrosKeys = Object.keys(filtros);
    filtrosKeys.sort();
    for (let i = 0; i < filtrosKeys.length; i++) {
      const filtroKey = filtrosKeys[i];
      if (filtros[filtroKey].ativo === true) {
        filtrosActive.push({ ...filtros[filtroKey], nome: filtroKey });
      } else {
        filtrosInactive.push({ ...filtros[filtroKey], nome: filtroKey });
      }
    }
    filtrosGeral = [...filtrosActive, ...filtrosInactive];
  }

  return (
    <Col xs={true}>
      <h5>{titulo}</h5>

      {filtrosGeral.map((filtroActive, index) => {
        return (
          <Row key={index}>
            <Col
              xs={true}
              style={{
                padding: "0px",
                width: "max-content",
                maxWidth: "none",
              }}
            >
              <input
                checked={filtroActive.checked}
                disabled={!filtroActive.ativo}
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                onChange={(e) =>
                  dispatch(
                    ToggleFiltros({
                      mlce: titulo,
                      categorias: filtroActive.nome,
                      isChecked: e.target.checked,
                    })
                  )
                }
              />
              <label htmlFor="vehicle1">
                {" "}
                {filtroActive.nome} ({filtroActive.quantidade})
              </label>{" "}
              <br />
            </Col>
          </Row>
        );
      })}
    </Col>
  );
};
