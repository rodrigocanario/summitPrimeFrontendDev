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

export const Controller = () => {
  const isAuthenticated = localStorage.getItem("token");
  const pages = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  let pagina = paginas.find((paginaa) => {
    return paginaa.page === pages.name;
  });

  if (!isAuthenticated) {
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
