import React from "react";
import { Button, Card, Typography } from "@material-ui/core";
import styles from "./Repo.module.css";

const Repo = ({ name, description, language, url, stars, forks }) => {
  return (
    <Card className={styles.container}>
      <Typography variant="h6" gutterBottom>
        <a href={url} className={styles.link}>
          <strong>{name}</strong>
        </a>
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <hr />
      {language ? (
        <div className={styles.footer}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={styles.button}
          >
            {language}
          </Button>
          {stars ? <Typography>⭐️ {stars}</Typography> : null}
          {forks ? (
            <Typography>
              <strong>⑂</strong> {forks}
            </Typography>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
};

export default Repo;
