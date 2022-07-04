const BASE_URL = "https://api.themoviedb.org/3/";
const TYPES = {
  MOVIE: "movie",
  TV: "tv",
};
const QUERY = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;
const QUERY_MOVIE = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`;

const CATEGORIES = {
  NOW_PLAYING: "/now_playing",
  POPULAR: "/popular",
  TOP_RATED: "/top_rated",
};

const fetchMovies = (type, category) => {
  return fetch(`${BASE_URL}${type}${category}${QUERY}`);
};

const fetchMovie = (id, type) => {
  console.log('dsdsd ', `${BASE_URL}${type}/${id}${QUERY_MOVIE}`)
  return fetch(`${BASE_URL}${type}/${id}${QUERY_MOVIE}`);
}

export { TYPES, CATEGORIES, fetchMovies, fetchMovie };
