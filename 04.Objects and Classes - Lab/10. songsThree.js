class Song {
    constructor(type, name, legth) {
        this.type = type;
        this.name = name;
        this.legth = legth;
    }
}

function songs(arr) {

    const typeToDisplay = arr.pop();
    const [_, ...songs] = arr;

    const result = songs.map((songAsText) => {
        const [type, name, length] = songAsText.split("_");
        const song = new Song(type, name, length);

        return song;
    }).filter(song => {
        if (typeToDisplay === 'all') {
            return song;
        }

        return song.type === typeToDisplay;
    })
        .map((song) => song.name)
        .join("\n");

    console.log(result)
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