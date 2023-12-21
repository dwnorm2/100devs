//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
  constructor(name, genre, numOfEpisodes, episodeRunTime) {
    this.name = name;
    this.genre = genre;
    this.numOfEpisodes = numOfEpisodes;
    this.episodeRunTime = episodeRunTime;
  }

  startSeason() {
    console.log("Season has started");
  }

  endSeason() {
    console.log(`Season has ended after ${this.numOfEpisodes} episodes`);
  }

  playShow() {
    console.log(`${this.name} is playing`);
  }
}

let bobShow = new NetflixShow("Bob Show", "Comedy", 12, 45);

console.log(bobShow);
