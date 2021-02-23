import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/:username" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
