import React from "react";
import { Col, Row } from "react-bootstrap";
import { ClientesGoldInput } from "./ClientesGoldInput";
import { ClientesGoldMainTable } from "./ClientesGoldMainTable";
import { ClientesGoldTableByFilter } from "./ClientesGoldTableByFilter";

export const ClientesGold = () => {
  let inputs = [
    { name: "valorMes", p: "valor/mes" },
    { name: "valorAno", p: "valor/ano" },
    { name: "skuMes", p: "skus/mes" },
    { name: "skuAno", p: "skus/ano" },
    { name: "vezesAno", p: "vezes/Ano" },
  ];
  return (
    <div className="bodie">
      <Row className="text-center">
        <Col style={{ padding: "0px 0px 30px 0px" }}>
          <h1>Clientes Ouro</h1>
        </Col>
      </Row>
      <Row className="text-center">
        <Col className="painelInputs">
          <Row>
            {inputs.map((input, index) => {
              return <ClientesGoldInput key={index} input={input} />;
            })}
          </Row>
          <Row>
            <ClientesGoldMainTable />
          </Row>
          {inputs.map((input, index) => {
            return <ClientesGoldTableByFilter key={index} input={input} />;
          })}
        </Col>
      </Row>
    </div>
  );
};
