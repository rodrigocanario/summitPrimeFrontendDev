import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ChangePage } from "../../../../Redux/Actions/ChangePage";
import paginas from "../../paginas";

export const Selection = () => {
  const dispatch = useDispatch();
  const informacoes = useSelector((state) => state.informacoes);
  return (
    <>
      <Row
        className="align-items-center justify-content-center"
        style={{ marginBottom: "60px", padding: "40px 0px" }}
      >
        {paginas.map((pagina, index) => {
          if (pagina.isTab && pagina.nome !== "Home") {
            switch (informacoes.role) {
              case "master":
                if (pagina.master) {
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
                break;
              case "consultor":
                console.log(pagina.consultor);
                if (pagina.consultor) {
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
                break;
              case "cliente":
                if (pagina.cliente) {
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
                break;

              default:
                break;
            }
          }
        })}
      </Row>
    </>
  );
};
