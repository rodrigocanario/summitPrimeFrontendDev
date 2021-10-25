import React from "react";
import { Container } from "react-bootstrap";
import { ModalOrcamentosSalvos } from "../OrcamentosSalvos/ModalOrcamentosSalvos";
import { FooterHome } from "../OrcamentoAtual/FooterAtual";
import { HeaderHome } from "./HeaderHome";
import { Selection } from "./Selection";

export const Home = () => {
  return (
    <div className="bodie">
      <HeaderHome />
      <Selection />
    </div>
  );
};
