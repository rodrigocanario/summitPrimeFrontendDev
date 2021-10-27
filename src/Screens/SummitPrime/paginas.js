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
    nome: "Home",
    page: "home",
    icon: <BiHome />,
    component: <Home />,
    isTab: true,
  },
  {
    nome: "Novo Orçamento",
    page: "criarOrcamento",
    icon: <AiOutlineFileAdd />,
    isTab: true,
  },
  {
    nome: "Orçamentos Salvos",
    page: "salvos",
    icon: <BiFolder />,
    component: <OrcamentosSalvos />,
    isTab: true,
  },
  {
    nome: "Listas Da Plataforma Catálogo",
    nomeAbreviado: "Listas Da Plat. Cat.",
    page: "vnda",
    icon: <BsListCheck />,
    component: <OrcamentosVnda />,
    isTab: true,
  },
  {
    nome: "Catálogos",
    page: "catalogos",
    icon: <BsJournalBookmark />,
    component: <Catalogos />,
    isTab: true,
  },
  {
    nome: "Orcamento Atual",
    page: "orcamentoAtual",
    icon: <BsJournalBookmark />,
    component: <OrcamentoAtual />,
    isTab: false,
  },
];

export default paginas;
