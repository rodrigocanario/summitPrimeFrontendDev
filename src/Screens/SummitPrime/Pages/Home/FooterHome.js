import React from "react";
import { Col, Row } from "react-bootstrap";
// import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
// import { BiGlobe } from 'react-icons/bi';
import { useSelector } from "react-redux";
export const FooterHome = () => {
  const info = useSelector((state) => state.informacoes);
  return (
    <footer className="d-flex flex-wrap justify-content-between border-top">
      <div className="col d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <svg className="bi" width={30} height={24}>
            <use xlinkHref="#bootstrap" />
          </svg>
        </a>
        <Row style={{ color: "white" }}>
          <Col xs={6}>
            <div>Observações: </div>
            <ol style={{ paddingLeft: "2rem" }}>
              <li>
                Consultor de vendas responsável pela sua conta é{" "}
                <span style={{ fontWeight: "bold" }}>
                  {info.consultor.nome}{" "}
                </span>{" "}
                de Whatsapp número{" "}
                <span style={{ fontWeight: "bold" }}>
                  {info.consultor.telefone}{" "}
                </span>{" "}
                e e-mail{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {info.consultor.email}{" "}
                </span>
                .
              </li>
              <li>
                Respeitar o{" "}
                <span style={{ fontWeight: "bold" }}>
                  PEDIDO MINIMO DE R${info.pedidoMinimo.toFixed(2)}
                </span>{" "}
              </li>
              <li>
                Previsao de entrega de{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {info.previsaoEntrega} dias úteis após o faturamento.
                </span>
              </li>
              {info.creditoAprovado ? (
                <li>
                  Crédito pré-aprovado estimado de{" "}
                  <span style={{ fontWeight: "bold" }}>
                    R${info.creditoAprovado}
                  </span>{" "}
                </li>
              ) : (
                ""
              )}
              <li>
                As alterações feitas neste ambiente não retornam para a PC
              </li>
              <li>
                A SUMMIT PRIME está em desenvolvimento portanto somente algumas
                de suas funcionalidades estāo ativadas no momento.
              </li>
              <li>
                Toda e qualquer informação aqui disponibilizada deve ser tratada
                somente como uma indicação, sendo sempre validada pelo seu
                consultor de vendas. Sendo ele absolutamente prioritário em
                qualquer caso de divergência nas informações.
              </li>
              <li>
                Essa ferramenta trabalha com preço estimado. Valores serão
                validados pelo consultor de vendas.
              </li>
            </ol>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
