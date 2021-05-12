import axios from "axios";

export const reqCompany = axios.create({
  baseURL: "https://jobs.github.com/",
});

export default reqCompany