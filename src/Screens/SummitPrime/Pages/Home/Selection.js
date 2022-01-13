import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ChangePage } from "../../../../Redux/Actions/Config/ChangePage";
import paginas from "../../paginas";

export const Selection = () => {
  const dispatch = useDispatch();
  const informacoes = useSelector((state) => state.databank.userInfo);
  return (
    <>
      <Row
        className="align-items-center justify-content-center"
        style={{ marginBottom: "60px", padding: "40px 0px" }}
      >
        {paginas.map((pagina, index) => {
          let component = "";
          if (pagina.isTab && pagina.nome !== "Home") {
            switch (informacoes.role) {
              case "master":
                if (pagina.master) {
                  component = (
                    <Col key={index} xs={true} className="selectionCard">
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
                if (pagina.consultor) {
                  component = (
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
                  component = (
                    <Col key={index} xs={true} className="selectionCard">
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
          return component;
        })}
      </Row>
    </>
  );
};
