import axios from "axios";

const myaxios = axios.create({
    // baseURL:"http://localhost:8080"
    baseURL:"http://65.2.124.51:8080"
})

export default myaxios;