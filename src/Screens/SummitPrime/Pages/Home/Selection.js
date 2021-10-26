import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ChangePage } from "../../../../Redux/Actions/ChangePage";
import paginas from "../../paginas";

export const Selection = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Row
        className="align-items-center justify-content-center"
        style={{ marginBottom: "60px", padding: "40px 0px" }}
      >
        {paginas.map((pagina, index) => {
          if (pagina.page !== "home" && pagina.isTab) {
            return (
              <Col key={index} xs={2} className="selectionCard">
                <button
                  onClick={() => dispatch(ChangePage(pagina.page))}
                  className="buttonLarge"
                >
                  {pagina.icon}
                  <div style={{ paddingTop: "10px", fontSize: "20px" }}>
                    {pagina.nome}
                  </div>
                </button>
              </Col>
            );
          }
        })}
      </Row>
    </>
  );
};
