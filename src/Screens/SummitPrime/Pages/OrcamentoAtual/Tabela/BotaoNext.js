import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendOrcamento } from "../../../../../Redux/Actions/SendOrcamento";
import { changePage, setError } from "../../../../../Redux/Actions/Actions";

export const BotaoNext = (props) => {
  const dispatch = useDispatch();
  const pedidoMinimo = useSelector((state) => state.informacoes.pedidoMinimo);
  const totalDisponivel = useSelector(
    (state) => state.orcamentos.salvos[props.indexOrcamento].totalDisponivel
  );
  const [showModal, setShowModal] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleNext = () => {
    if (pedidoMinimo && pedidoMinimo > totalDisponivel) {
      dispatch(setError("pedidoMinimo", true));
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      dispatch(setError("pedidoMinimo", false));
      setShowModal(true);
    }
  };
  const handleClose = () => setShowModal(false);

  const handleSend = () => {
    dispatch(sendOrcamento());
    setEnviado(true);
  };
  return (
    <Fragment>
      {enviado ? (
        <Modal show={showModal} animation={true} onHide={handleClose} centered>
          <Modal.Header className="align-items-center justify-content-center">
            <Modal.Title style={{ color: "black", textAlign: "center" }}>
              ENVIADO COM SUCESSO!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-evenly">
              <Col xs={8} className="text-center">
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(changePage("home"));
                  }}
                >
                  RETORNAR AO MENU PRINCIPAL
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal show={showModal} animation={true} onHide={handleClose} centered>
          <Modal.Header className="align-items-center justify-content-center">
            <Modal.Title style={{ color: "black", textAlign: "center" }}>
              ENVIAR ORÇAMENTO
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-evenly">
              <Col xs={4} className="text-center">
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
              </Col>
              <Col xs={4} className="text-center">
                <Button variant="primary" onClick={handleSend}>
                  Enviar
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}

      <Button variant="outline-light" onClick={handleNext}>
        Enviar
      </Button>
    </Fragment>
  );
};
