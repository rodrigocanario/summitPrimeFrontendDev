import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Actions";
import { Login } from "../Screens/Login";
import { Pages } from "../Screens/Pages";
import { getUserInfos } from "../Utils/callBackend";

export const Orcamento = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.informacoes.isAuth);
  const Infos = useSelector((state) => state.orcamento);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUserInfos().then((response) => {
      dispatch(login(response));
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("orcamento", JSON.stringify(Infos));
  }, [Infos]);
  return loading === true ? (
    ""
  ) : isAuthenticated === true ? (
    <Pages />
  ) : (
    <Login />
  );
};
