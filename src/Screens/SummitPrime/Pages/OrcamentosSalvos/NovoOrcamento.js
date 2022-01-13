import React from "react";
import { Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../Redux/Actions/Actions";

export const NovoOrcamento = () => {
  const dispatch = useDispatch();

  return (
    <Col id="coluna" className="text-end" xs={1}>
      <Button
        variant="outline-light"
        onClick={() => dispatch(toggleModal({ criarOrcamentoBranco: true }))}
      >
        Novo Orçamento
      </Button>
    </Col>
  );
};
