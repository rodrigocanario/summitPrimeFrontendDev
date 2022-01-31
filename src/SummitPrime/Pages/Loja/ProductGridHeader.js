import React, { useState } from "react";
import { Button, Card, Col, Collapse, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import { changePage } from "./../../../Redux/Actions/Actions";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LojaFilters } from "./LojaFilters";
import { FiArrowDown } from "react-icons/fi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { SetFiltros } from "../../../Redux/Actions/Loja/SetFiltros";
import { LojaOrdenar } from "./LojaOrdenar";
import { ToggleFiltros } from "../../../Redux/Actions/Loja/ToggleFiltros";
export const ProductGridHeader = () => {
  const saving = useSelector((state) => state.config.saving);
  const dispatch = useDispatch();
  const [openOrdem, setOpenOrdem] = useState(false);
  const [openFiltro, setOpenFiltro] = useState(false);

  return (
    <Row className="align-items-end justify-content-between barra-filtros">
      <Col sm={true} className="text-start">
        <Button
          variant="outline-light"
          className="me-2"
          onClick={() => setOpenFiltro(!openFiltro)}
        >
          {!openFiltro ? (
            <IoIosArrowForward style={{ float: "left" }} />
          ) : (
            <IoIosArrowDown style={{ float: "left" }} />
          )}
          <h6 style={{ float: "right", margin: "0px 2px" }}>Filtros</h6>
        </Button>
        <Button
          variant="outline-light"
          className="me-2"
          onClick={() => {
            dispatch(SetFiltros(true));
          }}
        >
          <h6 style={{ float: "left", margin: "0px 2px" }}>Limpar Filtros</h6>
        </Button>

        <div style={{ minHeight: "150px", position: "absolute" }}>
          <Collapse in={openFiltro} dimension="height">
            <div id="example-collapse-text">
              <Card
                body
                style={{
                  color: "white",
                  width: "auto",
                  backgroundColor: "#04048f",
                }}
              >
                <LojaFilters />
              </Card>
            </div>
          </Collapse>
        </div>
      </Col>

      <Col className="text-center">
        {saving ? (
          <p
            style={{
              marginBottom: "0px",
              color: "#ff0018a8",
            }}
          >
            Salvando Orçamento... <Spinner size="sm" animation="border" />{" "}
          </p>
        ) : (
          <p
            style={{
              marginBottom: "0px",
              color: "#15cb00c7",
            }}
          >
            Orçamento Salvo <AiOutlineCheck />{" "}
          </p>
        )}
      </Col>
      {/* <Col sm={true}>
        <LojaFilters />
      </Col> */}
      <Col sm={true} className="text-end">
        <Button
          variant="outline-light"
          className="me-2"
          onClick={() => setOpenOrdem(!openOrdem)}
        >
          {!openOrdem ? (
            <IoIosArrowForward style={{ float: "left" }} />
          ) : (
            <IoIosArrowDown style={{ float: "left" }} />
          )}
          <h6 style={{ float: "left", margin: "0px 2px" }}>Ordenar</h6>
        </Button>
        <div
          style={{ minHeight: "150px", position: "absolute", right: "270px" }}
        >
          <Collapse in={openOrdem} dimension="height">
            <div id="example-collapse-text">
              <Card
                body
                style={{
                  color: "white",
                  width: "auto",
                  backgroundColor: "#04048f",
                }}
              >
                <LojaOrdenar />
              </Card>
            </div>
          </Collapse>
        </div>
        <Button
          variant="outline-light"
          onClick={() => dispatch(changePage("orcamentoAtual"))}
        >
          <h6 style={{ float: "left", margin: "0px 2px" }}>
            Planilha do Orçamento
          </h6>
          <RiArrowGoBackLine style={{ float: "right" }} />
        </Button>
      </Col>
    </Row>
  );
};
