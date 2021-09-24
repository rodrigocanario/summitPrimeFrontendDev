import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { authenticate } from "../../Redux/Actions/Authenticate";
import { Login } from "./Login";
import { Error } from "./Error";
import { Home } from "./Pages/OrcamentoAtual/Home";
import { Loading } from "./Loading";
import { OrcamentosVnda } from "./Pages/OrcamentosVnda/OrcamentosVnda";
import { Obrigado } from "./Obrigado";
import { OrcamentosSalvos } from "./Pages/OrcamentosSalvos/OrcamentosSalvos";

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
          case "orcamentosVnda":
            return <OrcamentosVnda />;
          case "orcamentosSalvos":
            return <OrcamentosSalvos />;
          case "obrigado":
            return <Obrigado />;
          default:
            return <Error />;
        }
      })()}
    </>
  );
};
