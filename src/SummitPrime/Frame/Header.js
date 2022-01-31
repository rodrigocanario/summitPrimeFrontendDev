import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loading, logout } from "./../../Redux/Actions/Actions";
import { BiPowerOff } from "react-icons/bi";
import { Logout } from "../../Redux/Actions/Config/Logout";

export const Header = () => {
  const dispatch = useDispatch();
  const informacoes = useSelector((state) => state.databank.userInfo);

  return (
    <Row className="justify-content-end align-items-end text-end header">
      <Col sm={1} style={{ width: "auto" }}>
        <h6>{informacoes.razaoSocial}</h6>
      </Col>
      <Col style={{ width: "auto" }} sm={1}>
        <Button
          onClick={() => {
            dispatch(Logout());
          }}
          id="buttonLogout"
        >
          <BiPowerOff />
        </Button>
      </Col>
    </Row>
  );
};
