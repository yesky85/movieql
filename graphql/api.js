import axios from "axios";

const API_URL = "https://yts-proxy.now.sh";
const LISTS_URL = "/list_movies.json";
const DETAIL_URL = "/movie_details.json";
const SUGGESTIONS_URL = "/movie_suggestions.json";

const api = axios.create({
  baseURL: API_URL,
});

export const moviesApi = {
  getMovies: async (limit) => {
    const {
      data: {
        data: { movies },
      },
    } = await api.get(LISTS_URL, {
      params: {
        limit,
      },
    });
    return movies;
  },
  getMovie: async (id) => {
    const {
      data: {
        data: { movie },
      },
    } = await api.get(DETAIL_URL, {
      params: {
        movie_id: id,
      },
    });
    return movie;
  },
  getSuggestions: async (id) => {
    const {
      data: {
        data: { movies },
      },
    } = await api.get(SUGGESTIONS_URL, {
      params: {
        movie_id: id,
      },
    });
    return movies;
  },
};
