import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MoviePage, { PATH as PATH_MOVIES_PAGE } from "../movies/MoviePage";

import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Route path={PATH_MOVIES_PAGE} exact component={MoviePage} />
      </Router>
    </Container>
  );
}

export default App;
