function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setup();
}
var canvas;
var linhas;
var colunas;
var resolucao = 1
var escalaRuido = 0.001;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.parent('CanvasHome');
    canvas.style('z-index', '-1');
    linhas = floor(windowHeight / resolucao);
    colunas = floor(windowWidth / resolucao);
}

function draw() {
    var sand = color(248, 200, 104);
    var grass = color(44, 176, 55);
    var water = color(0, 119, 190);
    background(220);
    for (let i = 0; i < colunas; i++) {
        for (let j = 0; j < linhas; j++) {
            let posX = i * resolucao;
            let posY = j * resolucao;
            ruidoL = floor(noise(i * escalaRuido, j * escalaRuido) * 100)
                /*
                r = 10;
                b = 255 - ruidoL;
                g = ruidoL;
                */
            if (ruidoL < 66) fill(grass);
            if (ruidoL < 55) fill(sand);
            if (ruidoL < 40) fill(water);


            noStroke();
            rect(posX, posY, resolucao, resolucao);
        }
    }
    noLoop();
}