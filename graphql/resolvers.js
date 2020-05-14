import { moviesApi } from "./api";

const resolvers = {
  Query: {
    movies: (_, { limit }) => moviesApi.getMovies(limit),
    movie: (_, { id }) => moviesApi.getMovie(id),
    suggestions: (_, { id }) => moviesApi.getSuggestions(id),
  },
};

export default resolvers;
