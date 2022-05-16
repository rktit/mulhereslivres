import React from "react";
import { configureAnchors } from "react-scrollable-anchor";

import {
  Aplicativo,
  Topo,
  Tratamento,
  Etapas,
  Invista,
  Depoimentos,
  Motivos,
  Biografia,
  Faq,
  Footer,
} from "../../components";

const Home_Page = () => {
  configureAnchors({ offset: -60, scrollDuration: 2000 });

  return (
    <div>
      <Aplicativo />
      <Topo />
      <Tratamento />
      {/* <Etapas /> */}
      <Invista /> 
      <Depoimentos />
      <Motivos />
      <Biografia />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
};

export default Home_Page;
