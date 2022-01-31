import { AiOutlineFileAdd } from "react-icons/ai";
import { BiCart, BiFolder, BiHome } from "react-icons/bi";
import {
  BsFillCartXFill,
  BsJournalBookmark,
  BsListCheck,
} from "react-icons/bs";

import { FaBoxOpen } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";

import { Catalogos } from "../Pages/Catalogos/Catalogos";
import { ClientesGold } from "../Pages/ClientesGold/ClientesGold";
import { ProductGrid } from "../Pages/Loja/ProductGrid";
import { Home } from "../Pages/Home/Home";
import { OrcamentoAtual } from "../Pages/OrcamentoAtual/OrcamentoAtual";
import { OrcamentosSalvos } from "../Pages/OrcamentosSalvos/OrcamentosSalvos";
import { OrcamentosVnda } from "../Pages/OrcamentosVnda/OrcamentosVnda";
import { Produtos } from "../Pages/Produtos/Produtos";
import { VndaCarrinhosPerdidos } from "../Pages/VndaCarrinhosPerdidos/VndaCarrinhosPerdidos";

const paginas = [
  {
    nome: "Home",
    page: "home",
    icon: <BiHome />,
    component: <Home />,
    isTab: true,
    master: true,
    consultor: true,
    cliente: true,
  },
  {
    nome: "Novo Orçamento",
    page: "criarOrcamento",
    icon: <AiOutlineFileAdd />,
    isTab: true,
    cliente: true,
  },
  {
    nome: "Meus Orçamentos",
    page: "salvos",
    icon: <BiFolder />,
    component: <OrcamentosSalvos />,
    isTab: true,
    cliente: true,
  },
  {
    nome: "Listas Da Plataforma Catálogo",
    nomeAbreviado: "Listas Da Plat. Cat.",
    page: "vnda",
    icon: <BsListCheck />,
    component: <OrcamentosVnda />,
    isTab: true,
    cliente: true,
  },
  {
    nome: "Catálogos",
    page: "catalogos",
    icon: <BsJournalBookmark />,
    component: <Catalogos />,
    isTab: true,
    master: true,
    consultor: true,
    cliente: true,
  },
  {
    nome: "Orcamento Atual",
    page: "orcamentoAtual",
    icon: <BsJournalBookmark />,
    component: <OrcamentoAtual />,
    cliente: true,
  },
  // {
  //   nome: "Notas Fiscais",
  //   page: "nf",
  //   icon: <FaFileInvoiceDollar />,
  //   component: <Nfs />,
  //   isTab: true,
  //   master: false,
  //   consultor: false,
  //   cliente: true,
  // },
  {
    nome: "Clientes Ouro",
    page: "clientesGold",
    icon: <IoSparklesOutline />,
    component: <ClientesGold />,
    isTab: true,
    master: true,
  },
  {
    nome: "Loja",
    page: "loja",
    icon: <BiCart />,
    component: <ProductGrid />,
    cliente: true,
  },
  {
    nome: "Carrinhos Perdidos",
    page: "carrinhosPerdidos",
    icon: <BsFillCartXFill />,
    component: <VndaCarrinhosPerdidos />,
    isTab: true,
    master: true,
    vnda: true,
  },
  {
    nome: "Produtos",
    page: "produtos",
    icon: <FaBoxOpen />,
    component: <Produtos />,
    isTab: true,
    master: true,
  },
];

export default paginas;
