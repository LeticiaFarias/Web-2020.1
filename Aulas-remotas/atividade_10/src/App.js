import React from "react";

import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import Mult from "./components/Mult/index";
import Maior from "./components/Maior";
import Soma from "./components/Soma";

function App() {
  return (
    <div>
      <h1> Calculadora Redux</h1>
      <Layout />,
      <Mult />,
      <Maior />,
      <Soma />,
      <GlobalStyles />
    </div>
  );
}

export default App;
