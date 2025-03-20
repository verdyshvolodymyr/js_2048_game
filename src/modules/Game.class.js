'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */

  constructor(initialState = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    ],
    boardElement = document.querySelector('.game-field'),
  ) {
    this.grid = initialState;
    this.boardElement = boardElement;
    this.emptyCells = [];
  }

  moveLeft() {
    this.start();
  }
  moveRight() {
    const arrRigth = [];

    for (let i = 0; i < this.grid.length; i++) {
      const tasty = [];

      for (let y = 0; y < this.grid.length; y++) {
        if (this.grid[i][y] !== 0) {
          tasty.push(this.grid[i][y]);
        }
      }

      for (let k = tasty.length; k < 4; k++) {
        tasty.unshift(0);
      }
      arrRigth.push(tasty);
    }

    this.grid = arrRigth;
    this.start();
  }
  moveUp() {
    this.start();
  }
  moveDown() {
    this.start();
  }

  /**
   * @returns {number}
   */
  getScore() {}

  /**
   * @returns {number[][]}
   */
  getState() {}

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {}

  /**
   * Starts the game.
   */
  start() {
    this.spawnTile();
    this.render();
  }

  /**
   * Resets the game.
   */
  restart() {
    this.boardElement.innerHTML = '';

    for (let row = 0; row < this.grid.length; row++) {
      let test = document.createElement('tr');

      for (let col = 0; col < this.grid.length; col++) {
        let tile = document.createElement('td');

        tile.classList.add('field-cell');
        test.appendChild(tile);
      }
      this.boardElement.appendChild(test);
    }

    this.grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  }

  spawnTile() {
    this.emptyCells = [];

    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid.length; col++) {
        if (this.grid[row][col] === 0) {
          this.emptyCells.push({ row, col });
        }
      }
    }

    if (this.emptyCells.length === 0) {
      return;
    }

    let { row, col } = this.emptyCells[Math.floor(Math.random() * this.emptyCells.length)];

    this.grid[row][col] = Math.random() < 0.9 ? 2 : 4;
  }

  render() {
    this.boardElement.innerHTML = '';

    for (let row = 0; row < this.grid.length; row++) {
      let test = document.createElement('tr');

      for (let col = 0; col < this.grid.length; col++) {
        let value = this.grid[row][col];
        let tile = document.createElement('td');

        tile.classList.add('field-cell');
        tile.setAttribute("data-row", row);
        tile.setAttribute("data-col", col);

        if (value !== 0) {
          tile.classList.add(`field-cell--${value}`);
          tile.textContent = value;
        } else {
          tile.classList.add('field-cell');
        }
        test.appendChild(tile);
      }
      this.boardElement.appendChild(test);
    }
  }
}

module.exports = Game;
