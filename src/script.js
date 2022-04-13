const button1 = document.getElementById("button1");


let audio1 = new Audio('../music/song.mp3');

button1.addEventListener('click', () => {
    audio1.play();
})