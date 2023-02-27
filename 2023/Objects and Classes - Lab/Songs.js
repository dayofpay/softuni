function start(inputData) {
    class Song {
      constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
      }
    }
  
    let typeList = inputData[inputData.length - 1];
    let songs = [];
  
    for (let x = 1; x < inputData.length - 1; x++) {
      let dataSong = inputData[x].split('_');
      let songType = dataSong[0];
      let songName = dataSong[1];
      let songDuration = dataSong[2];
      songs.push(new Song(songType, songName, songDuration));
    }
  
    if (typeList === 'all') {
      // Nachin 1 : songs.forEach((i) => console.log(i.name));
      songs.forEach(song => {
        console.log(song.name);
      });
    } else {
      let filterData = songs.filter((i) => i.type === typeList);
      filterData.forEach((i) => console.log(i.name));
    }
  }
  
start([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'all']
    
    );