import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateClientesGoldHeaders } from "./../../../Redux/Actions/Actions";
import { CalculateClientesGold } from "./../../../Redux/Actions/ClientesGold/CalculateClientesGold";

export const ClientesGoldInput = (props) => {
  let { input } = props;
  const valor = useSelector((state) => state.clientesGold.headers[input.name]);
  const dispatch = useDispatch();

  const heads = useSelector((state) => state.clientesGold.headers);
  useEffect(() => {
    dispatch(CalculateClientesGold());
  }, [dispatch, heads]);

  let handleChange = (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      dispatch(updateClientesGoldHeaders(input.name, parseInt(e.target.value)));
    }
  };
  return (
    <Col className="inputGoldsCol">
      <p className="inputGoldsP">{input.p}</p>
      <input
        className="inputGolds"
        autoComplete="off"
        name={input.name}
        defaultValue={valor}
        onChange={handleChange}
      />
    </Col>
  );
};
