// http://www.omdbapi.com/?i=tt3896198&apikey=5b793dc0

import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});