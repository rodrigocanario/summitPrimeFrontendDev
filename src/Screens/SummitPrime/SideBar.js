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
          {paginas.map((menuItem, index) => {
            if (menuItem.isTab) {
              return (
                <MenuItem
                  key={index}
                  onClick={() => dispatch(ChangePage(menuItem.page))}
                  icon={menuItem.icon}
                >
                  {menuItem.nomeAbreviado
                    ? menuItem.nomeAbreviado
                    : menuItem.nome}
                </MenuItem>
              );
            }
            return false;
          })}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};
