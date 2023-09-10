function songs(arr) {

    class Song {
        constructor(status, name, duration) {
            this.status = status;
            this.name = name;
            this.duration = duration;
        }
    }

    let songsArr = [];
    let num = arr.shift();
    let songsStatus = arr.pop();

    for (let i = 0; i < num; i++) {
        let [status, name, duration] = arr[i].split('_');
        let song = new Song(status, name, duration);
        songsArr.push(song);
    }

    if (songsStatus === 'all') {
        songsArr.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsArr.filter((i) => i.status === songsStatus);
        filtered.forEach((i) => console.log(i.name));
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

console.log("____________________________");

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

console.log("____________________________");

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);