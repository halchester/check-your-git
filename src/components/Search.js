import { TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./Search.module.css";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");

  const getUserInfo = (e, username) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className={styles.container}>
      <Typography variant="h3" align="center" className={styles.text}>
        Check your git
      </Typography>
      <Typography variant="body1" align="center" className={styles.text}>
        A place to check your github profile and check all the activities
      </Typography>
      <form onSubmit={(e) => getUserInfo(e, username)}>
        <TextField
          className={styles.textfield}
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          label="Enter your github username"
        />
      </form>
    </div>
  );
};

export default Search;
