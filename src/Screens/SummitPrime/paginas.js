import { AiOutlineFileAdd } from "react-icons/ai";
import { BiFolder, BiHome } from "react-icons/bi";
import { BsJournalBookmark, BsListCheck } from "react-icons/bs";
import { Catalogos } from "./Pages/Catalogos/Catalogos";
import { Home } from "./Pages/Home/Home";
import { OrcamentoAtual } from "./Pages/OrcamentoAtual/OrcamentoAtual";
import { OrcamentosSalvos } from "./Pages/OrcamentosSalvos/OrcamentosSalvos";
import { OrcamentosVnda } from "./Pages/OrcamentosVnda/OrcamentosVnda";

const paginas = [
  {
    page: "home",
    icon: <BiHome />,
    nome: "Home",
    component: <Home />,
    isTab: true,
  },
  {
    page: "criarOrcamento",
    icon: <AiOutlineFileAdd />,
    nome: "Novo Orçamento",
    isTab: true,
  },
  {
    page: "salvos",
    icon: <BiFolder />,
    nome: "Orçamentos Salvos",
    isTab: true,
    component: <OrcamentosSalvos />,
  },
  {
    page: "vnda",
    icon: <BsListCheck />,
    nome: "Listas Da Plataforma Catálogo",
    nomeAbreviado: "Listas Da Plat. Cat.",
    isTab: true,
    component: <OrcamentosVnda />,
  },
  {
    page: "catalogos",
    icon: <BsJournalBookmark />,
    nome: "Catálogos",
    isTab: true,
    component: <Catalogos />,
  },
  {
    page: "orcamentoAtual",
    icon: <BsJournalBookmark />,
    nome: "Orcamento Atual",
    isTab: false,
    component: <OrcamentoAtual />,
  },
];

export default paginas;
