import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiFolder, BiHome } from "react-icons/bi";
import { BsListCheck } from "react-icons/bs";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { changePage, toggleModal } from "../../Redux/Actions/Actions";
import { GetOrcamentos } from "../../Redux/Actions/GetOrcamentos";

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
          <MenuItem
            onClick={() => dispatch(changePage("home"))}
            icon={<BiHome />}
            active={true}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => dispatch(toggleModal("criarOrcamento", true))}
            icon={<AiOutlineFileAdd />}
          >
            Novo Orçamento
          </MenuItem>

          <MenuItem
            onClick={() => dispatch(GetOrcamentos("salvos", true))}
            icon={<BiFolder />}
          >
            Orçamentos Salvos
          </MenuItem>
          <MenuItem
            onClick={() => dispatch(GetOrcamentos("vnda", true))}
            icon={<BsListCheck />}
          >
            Listas Da Plat. Cat.
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};
