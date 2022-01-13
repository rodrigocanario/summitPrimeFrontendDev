import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import { changePage } from "../../../../Redux/Actions/Actions";
import { BiStore } from "react-icons/bi";

export const ProductGridHeader = () => {
  const saving = useSelector((state) => state.config.saving);
  const dispatch = useDispatch();

  return (
    <Row className="align-items-end">
      <Col className="text-center" sm={{ span: 2, offset: 5 }}>
        {saving ? (
          <p
            style={{
              width: "max-content",
              marginBottom: "0px",
              color: "#ff0018a8",
            }}
          >
            Salvando Orçamento... <VscLoading />{" "}
          </p>
        ) : (
          <p
            style={{
              width: "max-content",
              marginBottom: "0px",
              color: "#15cb00c7",
            }}
          >
            Orçamento Salvo <AiOutlineCheck />{" "}
          </p>
        )}
      </Col>
      <Col className="text-end" sm={5}>
        <Button
          style={{ float: "right", height: "35px" }}
          variant="outline-light"
          onClick={() => dispatch(changePage("orcamentoAtual"))}
        >
          <h6 style={{ float: "left" }}>ORCAMENTO ATUAL</h6>
          <BiStore style={{ verticalAlign: "baseline" }} />
        </Button>
      </Col>
    </Row>
  );
};
