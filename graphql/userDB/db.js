let movies = [
  {
    id: 1,
    name: "kec",
    score: 36,
  },
  {
    id: 2,
    name: "phn",
    score: 32,
  },
  {
    id: 3,
    name: "khk",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filterd = movies.filter((movie) => movie.id === id);
  return filterd[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const cleaned = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleaned.length) {
    movies = cleaned;
    return true;
  } else {
    return false;
  }
};
