import React from "react";
import { Col, Figure, Row } from "react-bootstrap";

export const Catalogos = () => {
  let baseLink = "https://buckettelexpress.s3.amazonaws.com/catalogos/";
  let listaCatalogos = [
    { nomeArquivo: "catalogoTris", caption: "Catálogo Tris" },
    { nomeArquivo: "catalogoArtools", caption: "Catálogo Artools" },
    { nomeArquivo: "catalogoBazze", caption: "Catálogo Bazze" },
    { nomeArquivo: "top15Dezembro", caption: "Promoção Top 15" },
  ];
  return (
    <div className="bodie">
      <Row
        style={{ height: "100%", minHeight: "100vh", paddingTop: "20px" }}
        className="justify-content-center align-content-start"
      >
        <Col xs={11}>
          <Row className="text-center">
            <Col style={{ padding: "0px 0px 30px 0px" }}>
              <h1>Catálogos</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {listaCatalogos.map((catalogo, index) => {
              return (
                <Col
                  key={index}
                  xs={true}
                  className="text-center"
                  style={{ paddingTop: "20px" }}
                >
                  {catalogo.noLink ? (
                    <Figure>
                      <Figure.Image
                        className="imgCatalogos"
                        alt={catalogo.nomeArquivo}
                        src={baseLink + catalogo.nomeArquivo + ".png"}
                      />
                      <Figure.Caption style={{ color: "white" }}>
                        {catalogo.caption}
                      </Figure.Caption>
                    </Figure>
                  ) : (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={baseLink + catalogo.nomeArquivo + ".pdf"}
                    >
                      <Figure>
                        <Figure.Image
                          className="imgCatalogos"
                          alt={catalogo.nomeArquivo}
                          src={baseLink + catalogo.nomeArquivo + ".png"}
                        />
                        <Figure.Caption style={{ color: "white" }}>
                          {catalogo.caption}
                        </Figure.Caption>
                      </Figure>
                    </a>
                  )}
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
