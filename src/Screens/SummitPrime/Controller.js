import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { authenticate } from "../../Redux/Actions/authenticate";
import { Login } from "./Login";
import { Error } from "./Error";
import { Home } from "./Pages/OrcamentoAtual/Home";
import { Loading } from "./Loading";
import { MeusOrcamentos } from "./Pages/MeusOrcamentos/MeusOrcamentos";
import { Obrigado } from "./Obrigado";

export const Orcamento = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.informacoes.isAuth);
  const Infos = useSelector((state) => state.orcamento);
  const pages = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("orcamento", JSON.stringify(Infos));
  }, [Infos]);

  if (!isAuthenticated) {
    return (
      <>
        {pages.loading ? <Loading /> : ""}
        <Login />
      </>
    );
  }
  return (
    <>
      {pages.loading ? <Loading /> : ""}
      <Header />
      {(() => {
        switch (pages.name) {
          case "home":
            return <Home />;
          case "obrigado":
            return <Obrigado />;
          case "meusOrcamentos":
            return <MeusOrcamentos />;
          default:
            return <Error />;
        }
      })()}
    </>
  );
};
