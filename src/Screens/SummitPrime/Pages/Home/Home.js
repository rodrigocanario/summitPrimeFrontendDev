import React from "react";
import { Container } from "react-bootstrap";
import { ModalOrcamentosSalvos } from "../OrcamentosSalvos/ModalOrcamentosSalvos";
import { FooterHome } from "../OrcamentoAtual/FooterAtual";
import { HeaderHome } from "./HeaderHome";
import { Selection } from "./Selection";

export const Home = () => {
  return (
    <Container fluid>
      <HeaderHome />
      <Selection />
      <FooterHome />
      <ModalOrcamentosSalvos />
    </Container>
  );
};
