function createAssemblyLine(){
    let data = {
        hasClima: function(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function() {
              if (this.temp < this.tempSettings) {
                this.temp += 1;
              } else if (this.temp > this.tempSettings) {
                this.temp -= 1;
              }
            };
        },
        hasAudio: function(car) {
            car.currentTrack = null;
            car.nowPlaying = function() {
              if (this.currentTrack !== null) {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
              }
            };
        },
        hasParktronic : function(car){
            car.checkDistance = function(distance){
                if(distance < 0.1){
                    console.log("Beep! Beep! Beep!");
                }
                else if(distance >= 0.1 && distance < 0.25){
                    console.log("Beep! Beep!");
                }
                else if(distance > 0.25 && distance < 0.50){
                    console.log("Beep!");
                }
                else{
                    console.log("");
                }
            }
        }
    }
    return data;
}
const assemblyLine = createAssemblyLine();
const myCar = {
make: 'Toyota',
model: 'Avensis'
};
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
name: 'Never Gonna Give You Up',
artist: 'Rick Astley'
};
myCar.nowPlaying();