import React, { useState } from "react";
import { Col, Container, Row, Button, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../Redux/Actions/Config/Authenticate";

export const Login = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const [form, setForm] = useState({ cnpj: "", senha: "" });
  const [isAdmin, setIsAdmin] = useState(false);

  const changeForm = (e) => {
    let { name, value } = e.target;
    if (name === "cnpj") {
      value = value.replace(/[^0-9]/g, "");
      if (isAdmin) {
        value = value
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})/, "$1-$2")
          .replace(/(-\d{2})\d+?$/, "$1");
      } else {
        value = value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})/, "$1/$2")
          .replace(/(\d{4})(\d{1,2})/, "$1-$2")
          .replace(/(-\d{2})\d+?$/, "$1");
      }
    }
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (isAdmin && form.cnpj.length === 14) {
      dispatch(
        authenticate({ ...form, cnpj: form.cnpj.replace(/[^0-9]/g, "") })
      );
    } else if (!isAdmin && form.cnpj.length === 18) {
      dispatch(
        authenticate({ ...form, cnpj: form.cnpj.replace(/[^0-9]/g, "") })
      );
    }
  };

  return (
    <Container>
      <button id="adminButton" onClick={() => setIsAdmin(!isAdmin)}>
        {isAdmin ? "Não Sou Administrador" : "Sou Administrador"}
      </button>
      <Row
        style={{ height: "100vh" }}
        className="align-items-center justify-content-center"
      >
        <Col>
          <Row className="align-items-center justify-content-center">
            <Col>
              <Row className="align-items-start justify-content-center">
                <Col xs={12}>
                  <Row className="align-items-center justify-content-center">
                    <Image
                      src="logo.png"
                      id="summit-img"
                      alt="summit-logo"
                      fluid
                    />
                    <h1 className="text-nowrap" id="summit-titulo">
                      Summit Prime {isAdmin ? "Administrador" : ""}
                    </h1>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col
              xs={12}
              id="login-background"
              sm="auto"
              className="text-center"
            >
              <Row>
                <h1 id="login-titulo">Faça seu login</h1>
              </Row>
              <Row>
                <Form onSubmit={submitForm}>
                  <Row>
                    {isAdmin ? (
                      <input
                        className="login-input"
                        name="cnpj"
                        placeholder="CPF"
                        onChange={changeForm}
                        value={form.cnpj}
                      />
                    ) : (
                      <input
                        className="login-input"
                        name="cnpj"
                        placeholder="CNPJ"
                        onChange={changeForm}
                        value={form.cnpj}
                      />
                    )}

                    {/* <input className='login-input' name='cnpj' placeholder='CNPJ' onChange={changeForm} value={form.cnpj} /> */}
                  </Row>
                  <Row>
                    <input
                      className="login-input"
                      name="senha"
                      placeholder="Senha"
                      onChange={changeForm}
                      value={form.senha}
                      type="password"
                    />
                  </Row>
                  <Row>
                    {errors === true ? (
                      <p style={{ color: "red" }}>Usuário ou Senha Inválido</p>
                    ) : (
                      <p style={{ color: "transparent" }}>.</p>
                    )}
                  </Row>
                  <Row
                    style={{ minHeight: "83px" }}
                    className="align-items-center justify-content-center"
                  >
                    <Button
                      id="login-button"
                      type="submit"
                      variant="outline-dark"
                      size="sm"
                    >
                      Login
                    </Button>
                  </Row>
                </Form>
              </Row>
              <Row></Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
