let songs = [
  {
    label: "Aglama",
    src: "assest/ağlama.mp3",
    img: "assest/pexels-dominika-roseclay-1021876.jpg",
    artist: "artist 1",
  },
  {
    label: "Hasbihal",
    src: "assest/hasbihal.mp3",
    img: "assest/pexels-dominika-roseclay-1021876.jpg",
    artist: "artist 2",
  },
  {
    label: "Son",
    src: "assest/son.mp3",
    img: "assest/pexels-dominika-roseclay-1021876.jpg",
    artist: "artist 3",
  },
];

const player = document.getElementById("player");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const shuffleButton = document.getElementById("shuffle");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const playList = document.getElementById("playlist-songs");
const songName = document.getElementById("song-name");
const artistName = document.getElementById("song-artist");

let currentSong = 0;
const loadSong = () => {
  songName.innerHTML = songs[currentSong].label;
  artistName.innerHTML = songs[currentSong].artist;
  player.src = songs[currentSong].src;
  Array.from(playList.children).forEach((item, i) => {
    if (i === currentSong) {
      item.style.color = "blue";
    } else {
      item.style.color = "";
    }
  });
};

const loadPlaylist = () => {
  playList.innerHTML = "";
  songs.map((song) => {
    const newSongItem = document.createElement("li");
    newSongItem.innerHTML = song.label;
    playList.appendChild(newSongItem);
  });
};

const play = () => {
  player.play();
  playButton.disabled = true;
  pauseButton.disabled = false;
};

const pause = () => {
  player.pause();
  playButton.disabled = false;
  pauseButton.disabled = true;
};

const shuffle = () => {
  songs = shuffleArray(songs);
  loadPlaylist();
  currentSong = 0;
  loadSong();
  play()
};

const prev = () => {
  currentSong--;
  loadSong();
  if (currentSong === 0) {
    prevButton.disabled = true;
  }
  nextButton.disabled = false;
  play();
};
const next = () => {
  currentSong++;
  loadSong();
  if (currentSong === songs.length - 1) {
    nextButton.disabled = true;
  }
  prevButton.disabled = false;
  play();
};
const repeat = () => {
  player.repeat();
};

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
shuffleButton.addEventListener("click", shuffle);
prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
repeatButton.addEventListener("click", repeat);

loadPlaylist();
loadSong();
