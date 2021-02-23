import { Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Repo from "./Repo/Repo";
import styles from "./Userrepo.module.css";
import Pagination from "@material-ui/lab/Pagination";
const Userrepo = ({ userrepo, username }) => {
  const [currentpage, setCurrentpage] = useState(1);

  const reposPerPage = 6;
  const indexOfLastRepo = currentpage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = userrepo.slice(indexOfFirstRepo, indexOfLastRepo);

  const changePageHandler = (e, pagenumber) => {
    e.preventDefault();
    setCurrentpage(pagenumber);
  };
  let totalPages = Math.ceil(userrepo.length / reposPerPage);
  return (
    <div className={styles.container}>
      <Typography variant="h5" align="left">
        Repos by <strong>{username}</strong>
      </Typography>
      <div className={styles.pagination}>
        <Pagination
          count={totalPages}
          page={currentpage}
          onChange={changePageHandler}
        />
      </div>
      <Grid container spacing={2}>
        {currentRepos.map((repo) => (
          <Grid item xs={12} md={6} lg={6} key={repo.id}>
            <Repo
              name={repo.name}
              description={repo.description}
              language={repo.language}
              url={repo.html_url}
              stars={repo.stargazers_count}
            />
          </Grid>
        ))}
      </Grid>
      {/* <div className={styles.activities}>
        <Typography variant="h5" align="left">
          Activities by <strong>{username}</strong>
        </Typography>
      </div> */}
    </div>
  );
};

export default Userrepo;
