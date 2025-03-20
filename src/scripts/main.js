'use strict';

import Game from '../modules/Game.class';

const game = new Game();

// Write your code here

const start = document.querySelector('.start');

start.addEventListener('click', (e) => {
  if (e.target.textContent === 'Restart') {
    e.target.textContent = 'Start';
    e.target.classList.add('start');
    e.target.classList.remove('restart');

    game.restart();
  } else {
    e.target.textContent = 'Restart';
    e.target.classList.add('restart');
    e.target.classList.remove('start');

    game.start();
    game.start();
  }
});

document.addEventListener('keydown', (e) => {
  if (start.textContent === 'Restart') {
    if (e.key === 'ArrowUp') {
      game.moveUp();
    }

    if (e.key === 'ArrowRight') {
      game.moveRight();
    }

    if (e.key === 'ArrowDown') {
      game.moveDown();
    }

    if (e.key === 'ArrowLeft') {
      game.moveLeft();
    }
  }
});
