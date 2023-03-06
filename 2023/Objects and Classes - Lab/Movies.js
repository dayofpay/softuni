function start(data) {
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let movieData = [];
    let movies = [];
    let lastDirector = "";
    for (let x = 0; x < data.length; x++) {
        let movieOperation = data[x].split(" ");
        if (movieOperation[0] === "addMovie") {
            let theMovie = data[x].split("addMovie ");
            let currentMovie = new Movie(theMovie[1].trim(), "", "");
            movieData.push(currentMovie);
            movies.push(theMovie[1]);
        } else if (movieOperation.includes("directedBy")) {
            let director = data[x].split("directedBy");
            lastDirector = director[1].trim();
            if (movies.includes(director[0].trim())) {
                let currentMovieIndex = movieData.findIndex(movie => movie.name === director[0].trim());
                if (currentMovieIndex !== -1) {
                    movieData[currentMovieIndex].director = director[1].trim();
                } else {
                    let currentMovie = new Movie(director[0].trim(), director[1].trim(), "");
                    movieData.push(currentMovie);
                }
            }
        } else if (movieOperation.includes("onDate")) {
            let date = data[x].split("onDate");
            if (movies.includes(date[0].trim())) {
                let currentMovieIndex = movieData.findIndex(movie => movie.name === date[0].trim());
                if (currentMovieIndex !== -1) {
                    movieData[currentMovieIndex].date = date[1].trim();
                } else {
                    let currentMovie = new Movie(date[0].trim(), lastDirector, date[1].trim());
                    movieData.push(currentMovie);
                }
            }
        }
    }

    for (let i = 0; i < movieData.length; i++) {
        let movie = movieData[i];
        if (movie.date !== "") {
            console.log(JSON.stringify(movie));
        }
    }
}

start([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
);
