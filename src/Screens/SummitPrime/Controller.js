import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { Login } from "./Login";
import { Loading } from "./Loading";
import { SideBar } from "./SideBar";
import { Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ModalCriarOrcamentoBranco } from "./Modals/CriarOrcamentoBranco";
import { ModalInstrucoes } from "./Modals/Instrucoes";
import paginas from "./paginas";
import { Error } from "./Error";
import { getUserInfo } from "../../Redux/Actions/Config/GetUserInfo";
import io from "socket.io-client";
import { addSocket, toggleLoading } from "../../Redux/Actions/Actions";
import { ModalCriarOrcamentoVnda } from "./Modals/CriarOrcamentoVnda";
let socket;

export const Controller = () => {
  const databank = useSelector((state) => state.databank);
  const informacoes = databank.userInfo;
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  const ENDPOINTDEV = "localhost:3001";
  // const ENDPOINTPROD = "35.170.234.123:3000";

  useEffect(() => {
    const token = localStorage.getItem("token");
    socket = io(ENDPOINTDEV, { transports: ["websocket"] });
    dispatch(addSocket(socket));
    let getinfos = async () => {
      await dispatch(getUserInfo());
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
        {pagina.component ? pagina.component : <Error />}
        <ModalCriarOrcamentoBranco />
        <ModalCriarOrcamentoVnda />
        <ModalInstrucoes />
      </Container>
      <ToastContainer />
    </>
  );
};
