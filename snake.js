import { getInputDirection, resetInputDirection } from './input.js';
export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];

let newSegment = 0;

export function update() {
    addSegment();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeELement = document.createElement('div');
        snakeELement.style.gridRowStart = segment.y;
        snakeELement.style.gridColumnStart = segment.x;
        snakeELement.classList.add('snake');
        gameBoard.appendChild(snakeELement);
    })
}

export function expandSnake(amount) {
    newSegment += amount;
}

export function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPositions(segment, position);
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegment() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegment = 0;
}

export function checkBorder() {
    if (snakeBody[0].x === 0 || snakeBody[0].x === 22) return true;
    else if (snakeBody[0].y === 0 || snakeBody[0].y === 22) return true;
    else return false;
}

export function checkDeath() {
    const snakeHead = snakeBody[0];
    for (let index = 1; index < snakeBody.length; index++) {
        if (snakeHead.x == snakeBody[index].x && snakeHead.y == snakeBody[index].y) {
            return true;
        }
    }
    return false;
}

export function resetGame() {
    snakeBody.splice(0, snakeBody.length, { x: 11, y: 11 });
    resetInputDirection();
}


