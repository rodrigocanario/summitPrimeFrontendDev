import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { BsQuestionCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  toggleModal,
  updateOrcamentos,
} from "../../../../Redux/Actions/Actions";

export const Nfs = () => {
  const nfs = useSelector((state) => state.orcamentos.nf);
  const dispatch = useDispatch();

  const handleAbrirNf = (e) => {
    let link = nfs[e.target.parentElement.id].link;
    window.open(link, "_blank");
  };
  const parseDatee = (date) => {
    let dia = date.substring(8, 10);
    let mes = date.substring(5, 7);
    let ano = date.substring(0, 4);
    let hora = date.substring(11, 19);
    let data = `${dia}/${mes}/${ano} ${hora}`;
    return data;
  };

  return (
    <div className="bodie">
      <Row
        style={{ height: "100%", minHeight: "100vh", paddingTop: "20px" }}
        className="justify-content-center align-content-start"
      >
        <Col xs={11}>
          <Row className="text-center">
            <Col style={{ padding: "0px 0px 30px 0px" }}>
              <h1>Notas Fiscais</h1>
            </Col>
          </Row>
          <Row>
            <Table
              style={{
                color: "white",
                backgroundColor: "transparent",
                borderColor: "white",
              }}
              bordered
            >
              <thead>
                <tr>
                  <th style={{ width: "225px" }}> Data</th>
                  <th>Valor</th>
                  {/* <th>Fazer Download</th> */}
                </tr>
              </thead>
              <tbody>
                {nfs.map((nf, index) => {
                  return (
                    <tr
                      className={
                        index % 2 === 0
                          ? "tdWhite trOrcamentosSalvos"
                          : "trOrcamentosSalvos"
                      }
                      onClick={handleAbrirNf}
                      id={index}
                      key={index}
                    >
                      <td> {nf.data}</td>
                      <td>{nf.valor}</td>
                      {/* <td>{nf.link}</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
