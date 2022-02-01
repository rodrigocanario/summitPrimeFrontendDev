import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import { Header } from "../Frame/Header";
import { Login } from "../Pages/Login/Login";
import { Loading } from "../Frame/Loading";
import { SideBar } from "../Frame/SideBar";
import { ModalInstrucoes } from "../Modals/Instrucoes";
import { ModalCriarOrcamentoBranco } from "../Modals/CriarOrcamentoBranco";
import { ModalCriarOrcamentoVnda } from "../Modals/CriarOrcamentoVnda";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";

import paginas from "./paginas";

import { addSocket, toggleLoading } from "./../../Redux/Actions/Actions";
import { GetUserInfo } from "./../../Redux/Actions/Config/GetUserInfo";
import { ModalNovoProduto } from "../Modals/NovoProduto";

let socket;

export const Controller = () => {
  const databank = useSelector((state) => state.databank);
  const informacoes = databank.userInfo;
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  // const ENDPOINTDEV = "localhost:3001";
  const ENDPOINTPROD = "3.82.223.232:3001";

  useEffect(() => {
    const token = localStorage.getItem("token");
    socket = io(ENDPOINTPROD, { transports: ["websocket"] });
    dispatch(addSocket(socket));
    let getinfos = async () => {
      await dispatch(GetUserInfo());
      dispatch(toggleLoading(false));
    };
    if (token) {
      getinfos();
    }

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [dispatch]);

  let pagina = paginas.find((paginaa) => {
    return paginaa.page === config.currentPage;
  });

  if (Object.keys(informacoes).length < 1) {
    return (
      <>
        {config.loading ? <Loading /> : ""}
        <Login />
        <ToastContainer />
      </>
    );
  }
  return (
    <>
      {config.loading ? <Loading /> : ""}
      <Container fluid>
        <SideBar />
        <Header />
        {pagina.component}
        <ModalCriarOrcamentoBranco />
        <ModalCriarOrcamentoVnda />
        <ModalInstrucoes />
        <ModalNovoProduto />
      </Container>
      <ToastContainer />
    </>
  );
};
