import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Repo from "./Repo/Repo";
import styles from "./Userrepo.module.css";

const Userrepo = ({ userrepo, username }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h5" align="left">
        Repos by <strong>{username}</strong>
      </Typography>
      <Grid container spacing={2}>
        {userrepo.map((repo) => (
          <Grid item xs={12} md={4} lg={3} key={repo.id}>
            <Repo
              name={repo.name}
              description={repo.description}
              language={repo.language}
              url={repo.html_url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Userrepo;
