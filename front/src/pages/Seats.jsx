import { useMovies } from "../hooks/useZustand";

const movies = useMovies((state) => state.movies);


function Seats() {
  return (
    <div>
      <h1>choose your seats</h1>
      <p>movie details</p>
      <p>{movies.imdbID}</p>
      
    </div>
  )
}

export default Seats