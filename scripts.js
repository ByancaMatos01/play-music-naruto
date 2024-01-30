const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeMusica = document.getElementById('musica');
const audioMusica = document.getElementById('audio-musicas');

const numeroMusicas = 6;
let taTocando = 0;
let musicaAtual = 1;

function tocarFaixa() {
    audioMusica.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioMusica.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa() {
    nomeMusica.innerText = `musica ${musicaAtual}`;
}

function proximaFaixa() {
    if (musicaAtual === numeroMusicas) {
        musicaAtual = 1;
    } else {
        musicaAtual += 1;
    }

    audioMusica.src = `./books/naruto/${musicaAtual}.mp3`;
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa() {
    if (musicaAtual === 1) {
        musicaAtual = numeroMusicas;
    } else {
        musicaAtual -= 1;
    }

    audioMusica.src = `./books/naruto/${musicaAtual}.mp3`;
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
