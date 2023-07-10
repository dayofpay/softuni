let movieId;
let userId;
let defaultUrl = "http://localhost:3030"
export let apiEndpoints = {

    allMovies :  defaultUrl + "/data/movies", // GET
    createMovie : defaultUrl + "/data/movies", // Post
    updateMovie : defaultUrl + "/data/movies/" + movieId, // PUT
    deleteMovie : defaultUrl + "/data/movies" + movieId, // DELETE
    getNumberOfLikes : defaultUrl + `/data/likes?where=movieId="${movieId}"&distinct=_ownerId&count`, // GET
    getLikeForMoviePerSpecificUser : defaultUrl + `/data/likes?where=movieId="${movieId}" and _ownerId="${userId}"`, // GET
    addLike : defaultUrl + "/data/likes",
    revokeLike : defaultUrl + "/data/likes/" + movieId,

}

export {movieId,userId}