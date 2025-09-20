const apiKey = "f6b8896f";

async function getMovies(){
    const moiveURL = `http://www.omdbapi.com/?apikey=${apiKey}&t={gran Turismo}`
    const response = await fetch(moiveURL);
    const movieData = await response.json();
    console.log(movieData)
}

getMovies();