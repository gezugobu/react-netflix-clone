import axios from "axios";    //axios module itself

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

 instance.get("/movie/top_rated");

export default instance;