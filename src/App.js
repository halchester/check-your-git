import { Container } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Container fixed>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/:username" component={Profile} />
      </Switch>
    </Container>
  );
}

export default App;
