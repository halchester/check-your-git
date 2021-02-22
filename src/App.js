import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/:username" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
