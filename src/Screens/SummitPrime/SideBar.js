import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiCart, BiFolder, BiHome, BiListUl, BiPencil } from "react-icons/bi";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  showSalvosModal,
  toggleSideBar,
} from "../../Redux/Actions/Actions";
import { GetOrcamentos } from "../../Redux/Actions/GetOrcamentos";

export const SideBar = () => {
  const dispatch = useDispatch();
  const modals = useSelector((state) => state.modals);

  return (
    <ProSidebar collapsed={modals.sidebar.show}>
      <SidebarHeader>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => dispatch(toggleSideBar(!modals.sidebar.show))}
            icon={<img style={{ width: "55px" }} src="/logo.png"></img>}
          >
            Summit Prime
          </MenuItem>
        </Menu>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => dispatch(changePage("home"))}
            icon={<BiHome />}
            active={true}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => dispatch(dispatch(showSalvosModal()))}
            icon={<AiOutlineFileAdd />}
          >
            Novo Orçamento
          </MenuItem>

          <MenuItem
            onClick={() => dispatch(GetOrcamentos("salvos"))}
            icon={<BiFolder />}
          >
            Orçamentos Salvos
          </MenuItem>
          <MenuItem
            onClick={() => dispatch(GetOrcamentos("vnda"))}
            icon={<BiPencil />}
          >
            Lista P. Catálogo
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};
