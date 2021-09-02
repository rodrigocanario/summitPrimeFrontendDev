import React from "react";
import { Row } from "react-bootstrap";
// import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
// import { BiGlobe } from 'react-icons/bi';
import { useSelector } from "react-redux";
export const FooterHome = () => {
  const login = useSelector((state) => state.informacoes);
  return (
    <footer className="d-flex flex-wrap justify-content-between py-3 my-4 border-top">
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
          <div>Observações: </div>
          <ol style={{ paddingLeft: "2rem" }}>
            <li>
              Respeitar o{" "}
              <span style={{ fontWeight: "bold" }}>
                PEDIDO MINIMO DE R${login.valor}
              </span>{" "}
            </li>
            <li>
              Previsao de entrega em{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                dias {login.previsaoEntrega} úteis
              </span>
            </li>
            {login.creditoAprovado ? (
              <li>
                Seu crédito é de{" "}
                <span style={{ fontWeight: "bold" }}>
                  R${login.creditoAprovado}
                </span>{" "}
              </li>
            ) : (
              ""
            )}
            <li>
              Condição de pagamento e crédito não validados pela ferramenta.
              Entrar em contato com o vendedor.
            </li>
            <li>
              Essa ferramenta trabalha com preço estimado. Valores serão
              validados pelo consultor de vendas.
            </li>
          </ol>
        </Row>
        {/* 1- Respeitar o <span style={{ fontWeight: 'bold' }}>PEDIDO MINIMO DE  R${pedidoMinimo.valor}</span>  <br />
                    2- Previsao de entrega em <span style={{ fontWeight: 'bold' }}> dias {login.previsao} úteis</span>  <br />
                    3- Condição de pagamento e crédito não validados pela ferramenta. Entrar em contato com o vendedor.<br />
                    4- Estoque disponível não validado.<br />
                    5- Essa ferramenta trabalha com preço estimado. Valores serão validados pelo consultor de vendas.<br /> */}
      </div>
      {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" rel='noreferrer' href="https://www.summit.com.br/" target='_blank'></a><p className='icon'><BiGlobe /> </p></li>
                <li className="ms-3"><a className="text-muted" href="#" rel='noreferrer' target='_blank'><p className='icon'><FaInstagram /> </p>  </a></li>
                <li className="ms-3"><a className="text-muted" href="#" rel='noreferrer' target='_blank'><p className='icon'><FaWhatsapp /> </p>  </a></li>
            </ul> */}
    </footer>
  );
};
