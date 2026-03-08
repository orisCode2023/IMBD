import { useEffect } from "react";
import { useMovies } from "../hooks/useZustand";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router";

function Home() {
  const movies = useMovies((state) => state.movies);
  const fethcMovies = useMovies((state) => state.fethcMovies);
  useEffect(() => {
      fethcMovies();
  }, []);
  
  return (
    <>
      <div>
        <h1>Movie Night</h1>
        <p>Search a movie and pick your seats</p>
        <input type="text" placeholder="Search movie by title..." />
      </div>
      <div>
        {movies && movies?.map((movie) => (
          <li key={movie.imdbID}><MovieCard img={movie.Images[0]}
          title={movie.Title}
          year={movie.Year}
          runtime={movie.Runtime}
          genre={movie.Genre}
          language={movie.Language} />
          <Link to={'/seats'}>selec seats</Link>
         
          </li>
          
        ))}
        
      </div>
    </>
  );
}

export default Home;
