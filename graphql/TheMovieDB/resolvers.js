import { moviesApi } from "./api";

const resolvers = {
  Query: {
    movies: () => moviesApi.getMovies(),
  },
};

export default resolvers;
