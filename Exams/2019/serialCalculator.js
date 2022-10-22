function start(input){
    let movieName = input[0];
    let totalSeasons = Number(input[1]);
    let totalEpisodes = Number(input[2]);
    let movieLength = Number(input[3]);

    let adsLength = (movieLength * 20) / 100;
    let movieLengthWithAds = movieLength + adsLength;
    let specialEpisodesTime = totalSeasons * 10;
    let totalTime = (movieLengthWithAds * totalEpisodes * totalSeasons) + specialEpisodesTime;
    console.log(`Total time needed to watch the ${movieName} series is ${totalTime} minutes.`);
}

start(["Lucifer","3","18","55"]);