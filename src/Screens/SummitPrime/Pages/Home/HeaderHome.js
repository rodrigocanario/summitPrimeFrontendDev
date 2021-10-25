import React from "react";
import { Col, Row } from "react-bootstrap";

export const HeaderHome = () => {
  return (
    <Row className="justify-content-center text-center">
      <h1 style={{ fontSize: "4rem" }}>
        Bem Vindo ao{" "}
        <span style={{ fontFamily: "fontSummit" }}>Summit Prime</span>{" "}
      </h1>
      <Col xs={6} style={{ padding: "100px 0px 30px 0px" }}>
        <h2>O que deseja fazer hoje?</h2>
      </Col>
    </Row>
  );
};
// &reg;
