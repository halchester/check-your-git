import { Typography, Container, Card } from "@material-ui/core";
import React from "react";
import styles from "./Userdata.module.css";

const Userdata = ({ userdata, username }) => {
  const twitterURL = `https://twitter.com/${userdata.twitter}`;
  const website = `https://${userdata.website}`;

  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h5">
          About{" "}
          <a
            href={website}
            className={styles.link}
            rel="noreferrer"
            target="_blank"
          >
            <strong>{userdata.name}</strong>
          </a>
        </Typography>
        <img
          src={userdata.photo}
          alt="user pic"
          className={styles.image}
          align="right"
        />
      </div>
      <div className={styles.sub__header}>
        <Typography variant="h6">
          Followed by <strong>{userdata.followers}</strong> people
        </Typography>

        {userdata.hireable ? (
          <Typography>
            This person is <strong style={{ color: "green" }}>available</strong>{" "}
            for hiring
          </Typography>
        ) : (
          <Typography>
            This person is <strong style={{ color: "red" }}>unavailable</strong>{" "}
            for hiring
          </Typography>
        )}
      </div>
      <Card className={styles.body}>
        <div className={styles.description}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fweb-mobile-app-basics%2F100%2FTiNY2_BASICS_Information-512.png&f=1&nofb=1"
            alt=""
            width="25px"
            className={styles.body__image}
          />
          <Typography variant="body1">{userdata.bio}</Typography>
        </div>
        <hr />
        <div className={styles.description}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fweb-icons-2%2F64%2FLocation-512.png&f=1&nofb=1"
            alt=""
            width="24px"
            className={styles.body__image}
          />
          <Typography variant="body1">{userdata.location}</Typography>
        </div>
        <div className={styles.description}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Famysmartalpha.files.wordpress.com%2F2013%2F03%2Ftwitter_logo_volt.png&f=1&nofb=1"
            alt=""
            width="24px"
            className={styles.body__image}
          />
          <Typography variant="body1">
            <a
              href={twitterURL}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              @{userdata.twitter}
            </a>
          </Typography>
        </div>
        <div className={styles.description}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG40.png&f=1&nofb=1"
            alt=""
            width="24px"
            className={styles.body__image}
          />
          <Typography variant="body1">
            <a
              href={userdata.github_url}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              {username}
            </a>
          </Typography>
        </div>
      </Card>
    </Container>
  );
};
export default Userdata;
