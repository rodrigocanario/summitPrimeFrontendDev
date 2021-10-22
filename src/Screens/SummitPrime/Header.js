import React from "react";
import {
  Button,
  Col,
  Image,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ImWarning } from "react-icons/im";
import {
  changePage,
  logout,
  showSalvosModal,
} from "../../Redux/Actions/Actions";
import { GetOrcamentos } from "../../Redux/Actions/GetOrcamentos";
import { BiPowerOff } from "react-icons/bi";

export const Header = () => {
  const dispatch = useDispatch();
  const informacoes = useSelector((state) => state.informacoes);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Summit Prime - Beta 0.3.1</Popover.Header>
      <Popover.Body>
        Esta plataforma está ainda em desenvolvimento. Somente nossos principais
        clientes possuem acesso à mesma. Agradecemos se puder nos avisar ao
        encontrar qualquer erro nos mecanismos. Obrigado.
      </Popover.Body>
    </Popover>
  );

  return (
    <Row className="justify-content-end align-items-end text-end header">
      {/* <OverlayTrigger
        trigger="click"
        placement="bottom-start"
        overlay={popover}
      >
        <Button id="warningLogout">
          <ImWarning style={{ marginBottom: "5px" }} />
          Versão Beta 0.3.1
        </Button>
      </OverlayTrigger> */}
      <Col sm={1} style={{ width: "auto" }}>
        <h6>{informacoes.razaoSocial}</h6>
      </Col>
      <Col style={{ width: "auto" }} sm={1}>
        <Button onClick={() => dispatch(logout())} id="buttonLogout">
          <BiPowerOff />
        </Button>
      </Col>
    </Row>
  );
};
