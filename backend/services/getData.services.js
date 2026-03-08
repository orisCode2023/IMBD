import moviesData from "../data/movies.json" with { type: "json" };
import seates from "../data/seats.json" with { type: "json" };

async function loadMoviesServiece() {
  const data = moviesData.map(
    (movie) => { return {...movie, movieSeats : seates[movie.imdbID]}
});
  return data;
}

export default loadMoviesServiece;
