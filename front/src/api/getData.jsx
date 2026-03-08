useEffect(() => {
  const data = async () => {
    const result = await fetch("http://localhost:3000/api/movies");
    const movies = await result.json();
    console.log(movies.data);
  };
  data();
}, []);
