import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home, { PATH as PATH_HOME } from "../home/HomePage";
import MoviesPage, { PATH as PATH_MOVIES_PAGE } from "../movies/MoviesPage";
//import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <Route path={PATH_HOME} exact component={Home} />
      <Route path={PATH_MOVIES_PAGE} exact component={MoviesPage} />
    </Router>
  );
}

export default App;
