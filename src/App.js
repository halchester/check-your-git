import { Container } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <Container fixed>
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </Container>
  );
}

export default App;
