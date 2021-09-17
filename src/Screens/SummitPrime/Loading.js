import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <Row
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        textAlign: "center",
        backgroundColor: "#00000063",
        margin: "0px",
      }}
      className="justify-content-center align-content-center"
    >
      <Col>
        <Spinner
          style={{ height: "100px", width: "100px" }}
          animation="border"
          variant="light"
        />
      </Col>
    </Row>
  );
};
