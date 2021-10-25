import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Tabela } from "./Tabela/Tabela";
import { FooterHome } from "./FooterAtual";
import { AiOutlineCheck } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import { saveOrcamento } from "../../../../Redux/Actions/SaveOrcamento";
import { ChangeAllProdutos } from "../../../../Redux/Actions/TabelaActions/ChangeAllProdutos";
import { BsQuestionCircle } from "react-icons/bs";
import { toggleModal } from "../../../../Redux/Actions/Actions";
import { BiPencil } from "react-icons/bi";

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
                <sup>
                  <BiPencil />
                </sup>
              </h1>
            </Row>
            <Row className="align-items-end">
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
              <Col className="text-end" sm={5}>
                <button
                  onClick={() => dispatch(toggleModal("instrucoes", true))}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  Instruções <BsQuestionCircle />
                </button>
                <Button
                  style={{ float: "right" }}
                  variant="outline-light"
                  onClick={() => dispatch(toggleModal("criarOrcamento", true))}
                >
                  Novo Orçamento
                </Button>
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
