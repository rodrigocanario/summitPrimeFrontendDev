import { AiOutlineFileAdd } from "react-icons/ai";
import { BiCart, BiFolder, BiHome } from "react-icons/bi";
import { BsJournalBookmark, BsListCheck } from "react-icons/bs";
import { IoSparklesOutline } from "react-icons/io5";
import { Catalogos } from "./Pages/Catalogos/Catalogos";
import { ClientesGold } from "./Pages/ClientesGold/ClientesGold";
import { ProductGrid } from "./Pages/Ecommerce/ProductGrid";
import { Home } from "./Pages/Home/Home";
import { OrcamentoAtual } from "./Pages/OrcamentoAtual/OrcamentoAtual";
import { OrcamentosSalvos } from "./Pages/OrcamentosSalvos/OrcamentosSalvos";
import { OrcamentosVnda } from "./Pages/OrcamentosVnda/OrcamentosVnda";

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
    master: false,
    consultor: false,
    cliente: true,
  },
  {
    nome: "Meus Orçamentos",
    page: "salvos",
    icon: <BiFolder />,
    component: <OrcamentosSalvos />,
    isTab: true,
    master: false,
    consultor: false,
    cliente: true,
  },
  {
    nome: "Listas Da Plataforma Catálogo",
    nomeAbreviado: "Listas Da Plat. Cat.",
    page: "vnda",
    icon: <BsListCheck />,
    component: <OrcamentosVnda />,
    isTab: true,
    master: false,
    consultor: false,
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
    isTab: false,
    master: false,
    consultor: false,
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
    consultor: false,
    cliente: false,
  },
  {
    nome: "Produtos",
    page: "produtos",
    icon: <BiCart />,
    component: <ProductGrid />,
    isTab: false,
    master: false,
    consultor: false,
    cliente: true,
  },
];

export default paginas;
