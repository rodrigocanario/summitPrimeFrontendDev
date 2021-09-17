import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../../Redux/Actions/Actions";

export const BotaoAdd = () => {
  const dispatch = useDispatch();
  const addItens = () => {
    dispatch(addItem());
  };
  return (
    <Button variant="outline-light" onClick={addItens}>
      +
    </Button>
  );
};
