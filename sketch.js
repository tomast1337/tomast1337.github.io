var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.parent('CanvasHome')
    canvas.style([('z-index', '-10;'), ('position:', 'fixed;')]);
}

function draw() {}