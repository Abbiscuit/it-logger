import React, { useEffect } from "react";
// Materialize Setup

import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import Container from "./components/layout/Container";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { AddBtn } from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <React.Fragment>
      <SearchBar />
      <Container>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </Container>
    </React.Fragment>
  );
};

export default App;
