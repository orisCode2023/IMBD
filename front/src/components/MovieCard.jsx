function MovieCard({img, title, year, runtime, genre, language}) {
  return (
    <div>
        <img src={img} alt="" />
        {title}
        {year}
        {runtime}
        {genre}
        {language}
    </div>
  )
}

export default MovieCard