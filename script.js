// script.js
function toggleEnvelope() {
    var envelope = document.querySelector('.envelope');
    var music = document.getElementById('backgroundMusic');
    envelope.classList.toggle('open');

    if (envelope.classList.contains('open')) {
        music.play();
    } else {
        music.pause();
        music.currentTime = 0; // Reset the song to the start
    }
}
