import React, { useState } from "react";
import { Col, Container, Row, Button, Form, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import InputMask from "react-input-mask";
import { authenticate } from "../../Redux/Actions/Authenticate";

export const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ cnpj: "", senha: "" });
  const [error, setError] = useState(false);

  const changeForm = (e) => {
    let { name, value } = e.target;
    if (name === "cnpj") {
      value = value.replace(/[^0-9]/g, "");
    }
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(authenticate(form));
  };

  return (
    <Container>
      <Row
        style={{ height: "100vh" }}
        className="align-items-center justify-content-center"
      >
        <Col>
          <Row className="align-items-center justify-content-center">
            <Col>
              <Row className="align-items-start justify-content-center">
                <Col xs={6}>
                  <Row className="align-items-center justify-content-center">
                    <Image
                      src="logo.png"
                      id="summit-img"
                      alt="summit-logo"
                      fluid
                    />
                    <h1 className="text-nowrap" id="summit-titulo">
                      Summit Prime{" "}
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
                    <InputMask
                      mask="99.999.999/9999-99"
                      className="login-input"
                      name="cnpj"
                      placeholder="CNPJ"
                      onChange={changeForm}
                      value={form.cnpj}
                    />
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
                    {error === true ? (
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
