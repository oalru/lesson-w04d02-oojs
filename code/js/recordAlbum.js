export default class RecordAlbum {
    constructor(artistName, albumName, songs = [''], currentSong = '') {
        this.artistName = artistName;
        this.albumName = albumName;
        this.songs = songs;
        this.currentSong = currentSong;
    }
    nextSong(){
        this.currentSong += 1;
        console.log(`Playing ${this.currentSong}`);
    }
    previousSong(){
        this.currentSong -= 1;
        console.log(`Playing ${this.currentSong}`);
    }
};