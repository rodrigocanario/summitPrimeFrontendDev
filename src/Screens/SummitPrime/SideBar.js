import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../Redux/Actions/Actions";
import { ChangePage } from "../../Redux/Actions/ChangePage";
import paginas from "./paginas";

export const SideBar = () => {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.modals);
  const informacoes = useSelector((state) => state.informacoes);

  return (
    <ProSidebar collapsed={modals.sidebar.show}>
      <SidebarHeader>
        <Menu iconShape="square">
          <MenuItem
            onClick={() =>
              dispatch(toggleModal("sidebar", !modals.sidebar.show))
            }
            icon={
              <img
                alt="Logo Summit Prime"
                style={{ width: "55px" }}
                src="/logo.png"
              ></img>
            }
          >
            Summit Prime
          </MenuItem>
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          {paginas.map((pagina, index) => {
            if (pagina.isTab) {
              switch (informacoes.role) {
                case "master":
                  if (pagina.master) {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(ChangePage(pagina.page))}
                        icon={pagina.icon}
                      >
                        {pagina.nomeAbreviado
                          ? pagina.nomeAbreviado
                          : pagina.nome}
                      </MenuItem>
                    );
                  }
                  break;
                case "consultor":
                  console.log(pagina.consultor);
                  if (pagina.consultor) {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(ChangePage(pagina.page))}
                        icon={pagina.icon}
                      >
                        {pagina.nomeAbreviado
                          ? pagina.nomeAbreviado
                          : pagina.nome}
                      </MenuItem>
                    );
                  }
                  break;
                case "cliente":
                  if (pagina.cliente) {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(ChangePage(pagina.page))}
                        icon={pagina.icon}
                      >
                        {pagina.nomeAbreviado
                          ? pagina.nomeAbreviado
                          : pagina.nome}
                      </MenuItem>
                    );
                  }
                  break;

                default:
                  break;
              }
            }
            return false;
          })}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};
