import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./Header";
import { Login } from "./Login";
import { Loading } from "./Loading";
import { SideBar } from "./SideBar";
import { Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ModalCriarOrcamento } from "./Modals/ModalCriarOrcamento";
import { ModalInstrucoes } from "./Modals/ModalInstrucoes";
import paginas from "./paginas";
import { Error } from "./Error";
import { getUserInfo } from "../../Redux/Actions/GetUserInfo";
import io from "socket.io-client";
import { addSocket } from "../../Redux/Actions/Actions";
let socket;

export const Controller = () => {
  const token = localStorage.getItem("token");
  const informacoes = useSelector((state) => state.informacoes);
  const pages = useSelector((state) => state.pages);
  const dispatch = useDispatch();
  const ENDPOINTDEV = "localhost:3001";
  const ENDPOINTPROD = "35.170.234.123:3000";

  useEffect(() => {
    socket = io(ENDPOINTDEV, { transports: ["websocket"] });
    dispatch(addSocket(socket));
    if (token) {
      dispatch(getUserInfo());
    }

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  let pagina = paginas.find((paginaa) => {
    return paginaa.page === pages.name;
  });

  if (Object.keys(informacoes).length < 1) {
    return (
      <>
        {pages.loading ? <Loading /> : ""}
        <Login />
        <ToastContainer />
      </>
    );
  }
  return (
    <>
      {pages.loading ? <Loading /> : ""}
      <Container fluid>
        <SideBar />
        <Header />
        {pagina.component ? pagina.component : <Error />}
        <ModalCriarOrcamento />
        <ModalInstrucoes />
      </Container>
      <ToastContainer />
    </>
  );
};
