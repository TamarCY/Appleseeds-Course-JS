
let lastRenderTime = 0;
const SNAKE_SPEED = 2;

function main(currentTime) {
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    secondSinceLastRender < 1 / SNAKE_SPEED;
    window.requestAnimationFrame(main);
    lastRenderTime = currentTime;
    
}