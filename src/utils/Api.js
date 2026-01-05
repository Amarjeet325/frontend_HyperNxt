import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.khusindia.com/rest/api/product", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;