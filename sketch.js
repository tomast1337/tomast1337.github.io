function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setup();
}
var canvas;

let board;
let next;
let linhas;
let colunas;
let resolucao = 50;

function boardFactory(Colunas, Linhas) {
    grid = new Array(Colunas)
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(linhas);
    }
    return grid;
}

function generate() {
    for (let x = 1; x < colunas - 1; x++) {
        for (let y = 1; y < linhas - 1; y++) {
            let nVizinho = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    nVizinho += board[y + i][x + j];
                }
            }
            nVizinho -= board[x][y];
            if ((board[x][y] == 1) && (nVizinho < 2)) {
                next[x][y] = 0;
            } else if ((board[x][y] == 1) && (nVizinho > 3)) {
                next[x][y] = 0;
            } else if ((board[x][y] == 0) && (nVizinho == 3)) {
                next[x][y] = 1;
            } else {
                next[x][y] = board[x][y];
            }
        }
    }
    let temp = board;
    board = next;
    next = temp;
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.parent('CanvasHome');

    linhas = floor(windowHeight / resolucao);
    colunas = floor(windowWidth / resolucao);

    board = boardFactory(linhas, colunas);
    for (let i = 0; i < colunas; i++) {
        for (let j = 0; j < linhas; j++) {
            board[j][i] = floor(random(2));
        }
    }
}

function draw() {
    for (let i = 0; i < colunas; i++) {
        for (let j = 0; j < linhas; j++) {
            let posX = i * resolucao;
            let posY = j * resolucao;
            if (board[j][i] == 1) {

                fill(255, 141, 129);
                noStroke();
                rect(posX, posY, resolucao - 1, resolucao - 1);

            }
        }
    }
}