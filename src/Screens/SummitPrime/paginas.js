import { AiOutlineFileAdd } from "react-icons/ai";
import { BiFolder, BiHome } from "react-icons/bi";
import { BsJournalBookmark, BsListCheck } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { Catalogos } from "./Pages/Catalogos/Catalogos";
import { Home } from "./Pages/Home/Home";
import { Nfs } from "./Pages/Nfs/Nfs";
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
    notAdmin: true,
    admin: true,
  },
  {
    nome: "Novo Orçamento",
    page: "criarOrcamento",
    icon: <AiOutlineFileAdd />,
    isTab: true,
    notAdmin: true,
    admin: false,
  },
  {
    nome: "Orçamentos Salvos",
    page: "salvos",
    icon: <BiFolder />,
    component: <OrcamentosSalvos />,
    isTab: true,
    notAdmin: true,
    admin: false,
  },
  {
    nome: "Listas Da Plataforma Catálogo",
    nomeAbreviado: "Listas Da Plat. Cat.",
    page: "vnda",
    icon: <BsListCheck />,
    component: <OrcamentosVnda />,
    isTab: true,
    notAdmin: true,
    admin: false,
  },
  {
    nome: "Catálogos",
    page: "catalogos",
    icon: <BsJournalBookmark />,
    component: <Catalogos />,
    isTab: true,
    notAdmin: true,
    admin: true,
  },
  {
    nome: "Orcamento Atual",
    page: "orcamentoAtual",
    icon: <BsJournalBookmark />,
    component: <OrcamentoAtual />,
    isTab: false,
    notAdmin: true,
  },
  {
    nome: "Notas Fiscais",
    page: "nf",
    icon: <FaFileInvoiceDollar />,
    component: <Nfs />,
    isTab: true,
    notAdmin: true,
    admin: false,
  },
];

export default paginas;
