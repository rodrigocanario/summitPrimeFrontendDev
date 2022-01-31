import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeleteOrcamento } from "./../../../../Redux/Actions/Orcamentos/DeleteOrcamento";

export const BotaoDelete = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDelete = () => {
    dispatch(DeleteOrcamento());
  };
  return (
    <Fragment>
      <Modal show={showModal} animation={true} onHide={handleClose} centered>
        <Modal.Header className="align-items-center justify-content-center">
          <Modal.Title style={{ color: "black", textAlign: "center" }}>
            TEM CERTEZA QUE DESEJA DELETAR?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-evenly">
            <Col xs={4} className="text-center">
              <Button variant="secondary" onClick={handleClose}>
                NAO
              </Button>
            </Col>
            <Col xs={4} className="text-center">
              <Button variant="danger" onClick={handleDelete}>
                SIM
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Button onClick={handleOpen} variant="outline-danger">
        Deletar Orçamento
      </Button>
    </Fragment>
  );
};
