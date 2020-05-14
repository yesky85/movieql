import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";

const api = axios.create({
  baseURL: API_URL,
  params: {
    api_key: "6f4e46529695845bf36a1ce1369523a5",
    language: "en-US",
  },
});

export const moviesApi = {
  getMovies: async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await api.get("movie/now_playing");
      return nowPlaying;
    } catch (e) {
      console.log(e);
    }
  },
};
