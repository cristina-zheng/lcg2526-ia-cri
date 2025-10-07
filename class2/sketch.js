let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.6;

let table;
let star_img;
let rocket_img;

function preload() { //funzione eseguita all'inizio che carica tutti i dati
  table = loadTable("star.csv", "csv", "header");
  star_img = loadImage("star.png");
  rocket_img = loadImage("shuttle.png");
}

function setup() { //invocata ogni volta che refresh la pagina
  createCanvas(xMax, yMax);
  //rallentare
  frameRate(10);
}

function drawSingleStarFromFile(index, posX, posY) {
  let starSize = table.getNum(index, "starSize")
  image(star_img, posX, posY, starSize, starSize);
}

function drawStarsFromFile() {
  for(let k = 0; k < table.getRowCount(); k++) { //k parte da 0 e arriverà fino al numero totale delle righe
    let starX = (k*37) % width + (k%3) * 5;
    let starY = (k*73) % height + (k%7);

    drawSingleStarFromFile(k, starX, starY);
  }
}

/*function drawSingleStar(i, starX, starY, random_transparency, random_size){
}*/

/*function drawStars(num_stars=120) { //di default sarà dato 120
  for(let i=0; i < num_stars; i++) {
    let starX = (i*37) % width + (1%3) * 5;
    let starY = (i*73) % height + (i%7);

    let random_transparency = random(150, 255);
    let random_size = random(2.8, 5.8);

    drawSingleStar(i, starX, starY, random_transparency, random_size)
  }
}*/

function drawRocketFromFile(xRocket, yRocket) {
  image(rocket_img, xRocket, yRocket, 50, 50);
}

/*function drawRocket(xRocket, yRocket) {
  fill(220);
  stroke(40);
  //alternativa, disegnato dal centro
  rectMode(CENTER);
  rect(xRocket, yRocket+30, 80, 180, 20); //il quarto valore è la smoothness degli angoli

  //triangolo
  fill(200,40,40);
  triangle(xRocket-40, yRocket-60, xRocket+40, yRocket-60, xRocket, yRocket-120);

  //cerchio
  fill(40,150,220);
  stroke(255);
  strokeWeight(3);
  ellipse(xRocket, yRocket+30, 48, 48);

  //triangoli
  fill(200,40,40);
  stroke(40);
  strokeWeight(1);
  triangle(xRocket-40, yRocket+90, xRocket-20, yRocket+90, xRocket-80, yRocket+130);
  triangle(xRocket+40, yRocket+90, xRocket+80, yRocket+130, xRocket+20, yRocket+90);
}*/

function moveRocket(yRocket, step=1) {
    //xRocket = (xRocket + 1) % xMax; //reset quando esce
    yRocket = yRocket - step;
  //quando la yRocket sarà oltre una certa soglia
    let soglia = - (yMax * 0.6);
    if(yRocket < soglia){
      yRocket = yMax;
    }
    return yRocket; //così mi viene yRocket aggiornato
  //allora devo resettare la yRocket
  }

function draw() {
  background("#9fcbf0ff");
  // mostrare un testo bianco che
  // dice le coordinate del mouse
  // sul foglio da disegno
  fill(0); //bianco
  textSize(20);
  //stringa, x, y
  text("mouseX:"+ mouseX + ", \
    mouseY: " + mouseY,20,20); // mouseX dice la posizione X del mouse all'interno del foglio

  noStroke();
  drawStarsFromFile();

  //drawRocket(xRocket, yRocket);
  drawRocketFromFile(xRocket, yRocket);

  yRocket = moveRocket(yRocket, 1);
}