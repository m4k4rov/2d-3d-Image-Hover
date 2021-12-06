const title = document.querySelector('.title'),
    prev = document.querySelector('.prev'),
    playPause = document.querySelector('.playPause'),
    next = document.querySelector('.next'),
    audio = document.querySelector('audio');

//Лист с песнями

const songList = [
    {
        path: "1.mp3",
        songName: "Deck the Halls",
    },
    {
        path: "2.mp3",
        songName: "Lukewarm Banjo",
    },
    {
        path: "3.mp3",
        songName: "Magical Transition",
    },
    {
        path: "4.mp3",
        songName: "Dark Hallway",
    }
];
let song_playing = false;

//Проигрывание песен

function playSong() {
    song_playing = true;
    audio.play();
    playPause.classList.add('active');
    playPause.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 96h16v320h-16zM320 96h16v320h-16z"/></svg>`;
}

//Пауза песни

function pauseSong() {
    song_playing = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>`;
}

// Пауза/воспроизведение по клику

playPause.addEventListener("click",() => song_playing ? pauseSong() : playSong());

//Загрузка песни

function loadSong(songList) {
    title.textContent = songList.songName;
    audio.src = songList.path;
}

// Текущая песня

let i=0;

//Первая песня при загрузке страницы

loadSong(songList[i]);

//Предыдущая песня

function prevSong() {
    i--;
    if(i<0) {
        i = songList.length-1;
    };
    loadSong(songList[i]);
    if(song_playing) playSong();
}
prev.addEventListener("click", prevSong);

//Следующая песня 

function nextSong() {
    i++;
    if(i==songList.length) {
        i = 0;
    };
    loadSong(songList[i]);
    if(song_playing) playSong();
}
next.addEventListener("click", nextSong);