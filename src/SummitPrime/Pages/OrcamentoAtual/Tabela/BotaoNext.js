import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changePage, setError } from "./../../../../Redux/Actions/Actions";
import { toast } from "react-toastify";
import { SendOrcamento } from "../../../../Redux/Actions/Orcamentos/SendOrcamento";

export const BotaoNext = (props) => {
  const dispatch = useDispatch();
  const pedidoMinimo = useSelector(
    (state) => state.databank.userInfo.pedidoMinimo
  );
  const { totalDisponivel } = props;
  const [showModal, setShowModal] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleNext = () => {
    if (pedidoMinimo && pedidoMinimo > totalDisponivel) {
      dispatch(setError("pedidoMinimo", true));
      window.scrollTo(0, document.body.scrollHeight);
      toast.error("Pedido Mínimo Não Atingido", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch(setError("pedidoMinimo", false));
      setShowModal(true);
    }
  };
  const handleClose = () => setShowModal(false);

  const handleSend = () => {
    dispatch(SendOrcamento());
    setEnviado(true);
  };
  return (
    <Fragment>
      {enviado ? (
        <Modal show={showModal} animation={true} onHide={handleClose} centered>
          <Modal.Header className="align-items-center justify-content-center">
            <Modal.Title style={{ color: "black", textAlign: "center" }}>
              Enviado com sucesso para seu consultor de vendas!
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
                  Retornar à pagina inicial
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
        Enviar Orçamento <br /> Para Consultor de Vendas
      </Button>
    </Fragment>
  );
};
