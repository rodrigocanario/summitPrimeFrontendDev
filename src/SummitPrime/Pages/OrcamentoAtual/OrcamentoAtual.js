import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Tabela } from "./Tabela/Tabela";
import { FooterHome } from "./FooterAtual";
import { AiOutlineCheck } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import { BsQuestionCircle } from "react-icons/bs";
import {
  changePage,
  toggleModal,
  updateOrcamentoSalvo,
} from "./../../../Redux/Actions/Actions";
import { BiPencil, BiStore } from "react-icons/bi";
import { SaveOrcamento } from "./../../../Redux/Actions/Orcamentos/SaveOrcamento";

export const OrcamentoAtual = () => {
  const orcamentos = useSelector((state) => state.databank.orcamentosPrime);
  const config = useSelector((state) => state.config);

  let orcamentoAtual = orcamentos[config.orcamentoAtivo];
  const dispatch = useDispatch();

  const changeTitle = (e) => {
    let infos = { ...orcamentoAtual, titulo: e.target.value };
    let index = orcamentos.salvos.findIndex(
      (orcamento) => orcamento.id === orcamentos.atual
    );
    dispatch(updateOrcamentoSalvo(index, infos));
    dispatch(SaveOrcamento({ index }));
  };

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
                {config.saving ? (
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
                  onClick={() => dispatch(toggleModal({ instrucoes: true }))}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  Instruções <BsQuestionCircle />
                </button>
                <Button
                  style={{ float: "right", height: "35px" }}
                  variant="outline-light"
                  onClick={() => dispatch(changePage("loja"))}
                >
                  <h6 style={{ float: "left" }}>LOJA</h6>
                  <BiStore style={{ verticalAlign: "baseline" }} />
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
