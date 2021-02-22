import dotenv from "dotenv";
dotenv.config();

export const headers = {
  Authorization: `${process.env.GITHUB_TOKEN}`,
};
