import React from "react";
import { Button, Card, Typography } from "@material-ui/core";
import styles from "./Repo.module.css";

const Repo = ({ name, description, language, url }) => {
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
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={styles.button}
        >
          {language}
        </Button>
      ) : null}
    </Card>
  );
};

export default Repo;
