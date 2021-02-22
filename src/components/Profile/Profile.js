import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import axios from "axios";
import Userdata from "./Userdata/Userdata";
import { headers } from "../../utils/headers";
import Userrepo from "./Userrepo/Userrepo";

const Profile = (props) => {
  const [userdata, setUserdata] = useState({});
  const [userrepo, setUserrepo] = useState([]);
  const username = props.match.params.username;

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`, {
        method: "GET",
        headers: headers,
      })
      .then((response) => {
        setUserdata({
          photo: response.data.avatar_url,
          name: response.data.name,
          bio: response.data.bio,
          website: response.data.blog,
          followers: response.data.followers,
          hireable: response.data.hireable,
          github_url: response.data.html_url,
          location: response.data.location,
          twitter: response.data.twitter_username,
        });
      })
      .catch((err) => {
        console.warn({
          Error: `Error at Profile.js fetching user info : ${err}`,
        });
      });
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setUserrepo(response.data);
      })
      .catch((err) => {
        console.warn({
          Erro: `Error at Profile.js fetching user repo : ${err}`,
        });
      });
  }, [username]);
  return (
    <Container className={styles.container}>
      <Userdata userdata={userdata} username={username} />
      <Userrepo userrepo={userrepo} username={username} />
    </Container>
  );
};
export default Profile;
