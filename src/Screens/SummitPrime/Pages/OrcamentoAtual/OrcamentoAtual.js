import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Tabela } from "./Tabela/Tabela";
import { FooterHome } from "./FooterAtual";
import { AiOutlineCheck } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import { saveOrcamento } from "../../../../Redux/Actions/SaveOrcamento";

export const OrcamentoAtual = () => {
  const orcamentos = useSelector((state) => state.orcamentos);
  const pages = useSelector((state) => state.pages);
  const [orcamentoAtual, setOrcamentoAtual] = useState({});
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    let infos = { ...orcamentoAtual, titulo: e.target.value };

    dispatch(saveOrcamento(infos));
  };

  useEffect(() => {
    if (orcamentos.atual) {
      setOrcamentoAtual(
        orcamentos.salvos.find((orcamento) => orcamento.id === orcamentos.atual)
      );
    }
  }, [orcamentos]);

  return (
    <Container fluid>
      <Row className="justify-content-center text-center align-items-start">
        <Col className="text-center">
          <>
            <Row className="justify-content-center text-center">
              <h1>
                <input
                  className="inputHomeTitulo"
                  defaultValue={orcamentoAtual.titulo}
                  onChange={changeTitle}
                />
              </h1>
            </Row>
            {pages.savingOrcamento ? (
              <p style={{ marginBottom: "0px", color: "#ff0018a8" }}>
                Salvando Orçamento... <VscLoading />{" "}
              </p>
            ) : (
              <p style={{ marginBottom: "0px", color: "#15cb00c7" }}>
                Orçamento Salvo <AiOutlineCheck />{" "}
              </p>
            )}
            <Tabela />
          </>
        </Col>
      </Row>
      <FooterHome />
    </Container>
  );
};
