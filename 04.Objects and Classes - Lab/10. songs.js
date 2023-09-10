function songs(arr) {

    let songsArr = [];
    let num = arr.shift();
    let songsStatus = arr.pop();

    for (let singleSong of arr) {
        let tokens = singleSong.split("_");
        let status = tokens[0];
        let name = tokens[1];
        let duration = tokens[2];

        if (songsStatus == 'all') {
            songsArr.push(name)
        } else if (status === songsStatus) {
            songsArr.push(name)
        }

    }
    console.log(songsArr.join("\n"))
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