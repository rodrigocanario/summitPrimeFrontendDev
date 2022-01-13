import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductGridHeader } from "./ProductGridHeader";
import { ProductGridProduct } from "./ProductGridProduct";

export const ProductGrid = () => {
  const databank = useSelector((state) => state.databank);
  const indexOrcamento = useSelector((state) => state.config.orcamentoAtivo);
  const orcamentoAtual = databank.orcamentosPrime[indexOrcamento];
  const produtos = databank.produtos;
  const { titulo } = orcamentoAtual;

  let mapProdutos = (produto, index) => {
    let prod = orcamentoAtual.itens.find((item) => {
      return item.sku === produto.sku;
    });
    if (prod) {
      produto.quantidade = prod.quantidade;
    } else {
      produto.quantidade = 0;
    }
    if (index < 12) {
      return <ProductGridProduct key={index} index={index} produto={produto} />;
    }
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
              <h1>{titulo}</h1>
            </Col>
          </Row>
          <ProductGridHeader />

          <Row className="justify-content-center">
            {produtos.map(mapProdutos)}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
