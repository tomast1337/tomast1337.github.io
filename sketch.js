function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setup();
}
var canvas;

var board; //Tabulheiro atual
var linhas; // Numero de linhas do tabulheiro
var colunas; // Numeros de colunas do tabulheiro
var resolucao = 50;

function boardFactory(Colunas, Linhas) {
    grid = new Array(Colunas)
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(linhas);
    }
    return grid;
}

function encherTabulheiro(tabulheiro) {
    temp = tabulheiro
    for (let i = 0; i < colunas; i++) {
        for (let j = 0; j < linhas; j++) {
            temp[j][i] = floor(random(2));
        }
    }
    return temp;
}

function Proximo(Tabulheiro) {
    let pBoard = boardFactory(linhas, colunas);
    for (let x = 0; x < linhas; x++) {
        for (y = 0; y < colunas; y++) {
            let vizinhos = 0;
            for (let i = -1; i < 1; i++) {
                for (j = -1; j < 1; j++) {
                    if ((x == 0 && i == -1) && (y == 0 && j == -1)) {
                        vizinhos += Tabulheiro[linhas - 1][colunas - 1];
                    } else if (x == 0 && i == -1) {
                        vizinhos += Tabulheiro[linhas - 1][y + j];
                    } else if (y == 0 && j == -1) {
                        vizinhos += Tabulheiro[x + i][colunas - 1];
                    } else {
                        vizinhos += Tabulheiro[x + i][y + j];
                    }
                }
            }
            //vizinhos -= Tabulheiro[x][y];
            if ((Tabulheiro[x][y] == 1) && (vizinhos < 2)) {
                pBoard[x][y] = 0;
            } else if ((Tabulheiro[x][y] == 1) && (vizinhos > 3)) {
                pBoard[x][y] = 0;
            } else if ((Tabulheiro[x][y] == 0) && (vizinhos == 3)) {
                pBoard[x][y] = 1;
            } else {
                pBoard[x][y] = Tabulheiro[x][y];
            }
        }
    }
    return pBoard;
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.parent('CanvasHome');
    canvas.style('z-index', '-1');
    frameRate(5);

    linhas = floor(windowHeight / resolucao);
    colunas = floor(windowWidth / resolucao);
    board = boardFactory(colunas, linhas);
    board = encherTabulheiro(board);
}

function mouseClicked(fxn) {

}
var passos = 0;

function draw() {
    clear();
    background((165, 50, 50))
    if (passos <= 15) {
        board = Proximo(board);
        passos++;
    } else {
        board = boardFactory(linhas, colunas);
        board = encherTabulheiro(board);
        passos = 0;
    }
    for (let i = 0; i < colunas; i++) {
        for (let j = 0; j < linhas; j++) {
            let posX = i * resolucao;
            let posY = j * resolucao;
            if (board[j][i] == 1) {
                r = 255;
                g = floor(random(150));
                b = floor(random(150));
                fill(r, g, b);
                //fill(255, 141, 129);
                noStroke();
                rect(posX, posY, resolucao - 1, resolucao - 1);
            }
        }
    }

}