import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sendOrcamento } from "../../../../../Redux/Actions/SendOrcamento";
import { changePage } from "../../../../../Redux/Actions/Actions";

export const BotaoNext = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleNext = () => {
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
                <Button variant="primary" onClick={handleNext}>
                  Enviar
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}

      <Button variant="outline-light" onClick={handleOpen}>
        Enviar
      </Button>
    </Fragment>
  );
};
