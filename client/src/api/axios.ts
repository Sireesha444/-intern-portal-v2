// src/api/axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // or your actual backend URL
  withCredentials: true,
});

export default instance;
