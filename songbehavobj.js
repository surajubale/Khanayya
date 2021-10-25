function Song(id, name, artist, fav, duration) {
    this.id = id,
        this.name = name,
        this.artist = artist,
        this.fav = fav,
        this.duration = duration,

        this.songInfo = function () {
            console.log(this.id + this.name + this.artist + this.fav + this.duration);
        },
        this.play = function () {
            console.log(this.name + " is playing....");
        },
        this.pause = function () {
            console.log(this.name + ' is paused');
        },
        this.resume = function () {
            console.log(this.name + ' is resumed');
        },
        this.stop = function () {
            console.log(this.name + ' is stopped');
        }
};

Song.prototype.lyrics = '  not available ';
Song.prototype.download = function () {
    console.log(this.name + "  click here to download ");
}

var anthem = new Song( 1 , 'national anthem', ' tagore ', ' yes ', 52);
var nadaGeethe = new Song(2, ' nada geethe ', ' kuvempu', true, 120);
var song = new Song(3, ' harivarasam ', 'K J yesudas ', 'YESS', 420 + 'sec');

anthem.callerTune = ' request for caller tune created successfully ';

console.log(anthem.callerTune);
anthem.songInfo();
anthem.play();
anthem.stop();

console.log(anthem.lyrics);
anthem.download();





