import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { authenticate } from "../../Redux/Actions/Authenticate";
import { Login } from "./Login";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { OrcamentosVnda } from "./Pages/OrcamentosVnda/OrcamentosVnda";
import { Obrigado } from "./Obrigado";
import { OrcamentosSalvos } from "./Pages/OrcamentosSalvos/OrcamentosSalvos";
import { Home } from "./Pages/Home/Home";
import { OrcamentoAtual } from "./Pages/OrcamentoAtual/OrcamentoAtual";

export const Orcamento = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.informacoes.isAuth);
  const pages = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

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
          case "orcamentoAtual":
            return <OrcamentoAtual />;
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
