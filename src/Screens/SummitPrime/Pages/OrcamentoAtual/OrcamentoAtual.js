import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Tabela } from "./Tabela/Tabela";
import { FooterHome } from "./FooterAtual";
import { AiOutlineCheck } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import { saveOrcamento } from "../../../../Redux/Actions/SaveOrcamento";
import { ChangeAllProdutos } from "../../../../Redux/Actions/TabelaActions/ChangeAllProdutos";
import { ModalOrcamentoAtual } from "./ModalOrcamentoAtual";
import { BsQuestionCircle } from "react-icons/bs";
import { toggleModal } from "../../../../Redux/Actions/Actions";

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
    dispatch(
      ChangeAllProdutos(
        orcamentos.salvos.findIndex(
          (orcamento) => orcamento.id === orcamentos.atual
        )
      )
    );
  }, []);

  useEffect(() => {
    if (orcamentos.atual) {
      setOrcamentoAtual(
        orcamentos.salvos.find((orcamento) => orcamento.id === orcamentos.atual)
      );
    }
  }, [orcamentos]);

  return (
    <div className="bodie">
      <ModalOrcamentoAtual />
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
            <Row>
              <Col className="text-center" sm={{ span: 2, offset: 5 }}>
                {pages.savingOrcamento ? (
                  <p style={{ marginBottom: "0px", color: "#ff0018a8" }}>
                    Salvando Orçamento... <VscLoading />{" "}
                  </p>
                ) : (
                  <p style={{ marginBottom: "0px", color: "#15cb00c7" }}>
                    Orçamento Salvo <AiOutlineCheck />{" "}
                  </p>
                )}
              </Col>
              <Col className="text-end" sm={{ span: 2, offset: 3 }}>
                <button
                  onClick={() => dispatch(toggleModal("atual", true))}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  Instruções <BsQuestionCircle />
                </button>
              </Col>
            </Row>
            <Tabela />
          </>
        </Col>
      </Row>
      <FooterHome />
    </div>
  );
};
