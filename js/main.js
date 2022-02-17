'use strict';

let elGameBottom = document.querySelector('.game');
let elDino = document.getElementById('dino');
let elCactus = document.getElementById('cactus');
let elCactuses = document.getElementById('cactuses');
let elCloud = document.getElementById('cloud');

// Rastart
let elBody = document.querySelector('.game__body');
let elGameOver = document.querySelector('.game__over');
let elGameContainer = document.querySelector('.game__over-container');
let elRestart = document.querySelector('.restart__box');
let elBtn = document.querySelector('.restart__btn');
let elResultBox = document.querySelector('.result__box');


document.addEventListener('keydown', function(event) {
    jump();
})

function jump () {
    if (elDino.classList != 'jump') {
        elDino.classList.add('jump');
    }

    setTimeout (function() {
        elDino.classList.remove('jump');
        elDino.style.display = 'block';
        elCactus.style.display = 'block';
        elCactuses.style.display = 'block';
        elCloud.style.display = 'block';
        elGameBottom.style.width = '600px';
        elGameBottom.style.margin = 'auto';
    }, 450)
}

let isAlive = setInterval (function () {
    let dinoTop = parseInt(window.getComputedStyle(elDino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(elCactus).getPropertyValue('left'));
    let cactusLeftTwo = parseInt(window.getComputedStyle(elCactuses).getPropertyValue('left'));
    // One
    if( cactusLeft < 20 && dinoTop >= 150) {
        elGameOver.style.display = 'flex';
        elGameBottom.style.display = 'flex';
        elDino.style.display = 'none';
        elCactus.style.display = 'none';
        elCactuses.style.display = 'none'
        elCloud.style.display = 'none';
    } 
    // Two
    else if (cactusLeftTwo < 20 && dinoTop >= 150) {
        elGameOver.style.display = 'flex';
        elGameBottom.style.display = 'flex';
        elDino.style.display = 'none';
        elCactus.style.display = 'none';
        elCactuses.style.display = 'none'
        elCloud.style.display = 'none';
    }
}, 10);

elRestart.addEventListener('click', function() {
    elGameOver.style.display = 'none';
    elDino.style.display = 'block';
    elCactus.style.display = 'block';
    elCactuses.style.display = 'block';
    elGameBottom.style.display = 'block';
    elCloud.style.display = 'block';
    // Style
    elCactus.style.animationDuration = '1.3s';
    elCactuses.style.animationDuration = '1.3s';
    elCactus.style.animationDelay = '0.1';
    elCactuses.style.animationDelay = '3.5s';
})