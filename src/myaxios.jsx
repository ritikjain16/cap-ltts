import axios from "axios";

const myaxios = axios.create({
  // baseURL:"http://localhost:8080"
  baseURL: "http://65.0.83.191:8080",
});

export default myaxios;
