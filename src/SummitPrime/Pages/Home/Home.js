import React from "react";
import { HeaderHome } from "./HeaderHome";
import { Selection } from "./Selection";
import "./Home.css";

export const Home = () => {
  return (
    <div className="bodie">
      <HeaderHome />
      <Selection />
    </div>
  );
};
