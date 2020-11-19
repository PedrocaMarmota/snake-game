import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, checkBorder, checkDeath, resetGame } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    console.log("render");
    lastRenderTime = currentTime;

    update()
    draw()
}


window.requestAnimationFrame(main);

function update() {
    if (checkBorder()) {
        alert('PERDEU RAPÁ!')
        resetGame();
        return;
    }
    if (checkDeath()) {
        alert('PERDEU RAPÁ!')
        resetGame();
        return;
    }
    updateSnake();
    updateFood();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}