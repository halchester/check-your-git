import axios from "axios";

export const checkValidUser = (username) => {
  axios.get(`https://api.github.com/users/${username}`).then((response) => {
    console.log(response);
  });
};
