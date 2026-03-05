import moviesData from '../data/movies.json' with {type: 'json'}
import seates from '../data/seats.json' with {type: 'json'}

async function loadMoviesServiece(){

    // const data =  moviesData.map((movie) => {
    //     console.log(movie);
    //     movie.movieSeats = seates
    //     console.log(movie);
    // });
    // console.log(moviesData)
    console.log(seates)
    return seates
}

export default loadMoviesServiece;