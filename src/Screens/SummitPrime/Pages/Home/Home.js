import React from "react";
import { Container } from "react-bootstrap";
import { FooterHome } from "./FooterHome";
import { HeaderHome } from "./HeaderHome";
import { Selection } from "./Selection";

export const Home = () => {
  return (
    <Container fluid>
      <HeaderHome />
      <Selection />
      <FooterHome />
    </Container>
  );
};
