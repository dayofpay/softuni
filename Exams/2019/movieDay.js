function start(input){
    let photoTime = Number(input[0]);

    let totalScenes = Number(input[1]);

    let sceneDuration = Number(input[2]);

    let terrainTime = photoTime * 0.15;

    let sceneTime = totalScenes * sceneDuration;

    let requiredTime = terrainTime + sceneTime;

    if(requiredTime > photoTime){
        console.log(`Time is up! To complete the movie you need ${(requiredTime-photoTime)} minutes.`);
    }
    else{
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(photoTime - requiredTime)} minutes left!`);
    }
}
start(["135",
"5",
"20"])
