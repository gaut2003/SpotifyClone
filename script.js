console.log("Welcome to Spotify Clone");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs =[
    {songName: "Song1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Song3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Song7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Song8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // console.log(songs[i]);
    let audioElement2 = new Audio('songs/1.mp3');
    // var x = audioElement2.duration;
    console.log(audioElement2.duration);
    // element.getElementsByClassName('timing')[0].innerText = x;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    // console.log(audioElement.duration);
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value/100)*audioElement.duration);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        gif.style.opacity = 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex<9){
        songIndex += 1;
    }else{
        songIndex = 0;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex>0){
        songIndex -= 1;
    }else{
        songIndex = 0;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
})