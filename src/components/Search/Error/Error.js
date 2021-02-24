import { Typography } from "@material-ui/core";
import React from "react";

const Error = () => {
  return (
    <Typography
      variant="h5"
      style={{ color: "red", marginTop: "2rem" }}
      align="center"
    >
      User not found!
    </Typography>
  );
};
export default Error;
