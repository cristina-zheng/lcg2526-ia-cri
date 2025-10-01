let xMax = 400;

let xSun = 400;
let ySun = 130;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#ffffffff");
  // mostrare un testo bianco che
  // dice le coordinate del mouse
  // sul foglio da disegno
  fill(0); //bianco
  textSize(20);
  //stringa, x, y
  text("mouseX:"+ mouseX + ", \
    mouseY: " + mouseY,20,20); // mouseX dice la posizione X
    // del mouse all'interno del foglio

  noStroke();

  //cielo
  push();
    //colori sole
    let azzurro = [135, 206, 250];
    let arancione= [255, 165, 0];

    let r, g, b;

    if(xSun > width/2){
      //destra -> centro: arancione -> azzurro
    r = map(xSun, width, width/2, arancione[0], azzurro[0]);
    g = map(xSun, width, width/2, arancione[1], azzurro[1]);
    b = map(xSun, width, width/2, arancione[2], azzurro[2]);    
    } else {
      //centro -> sinistra: azzurro -> arancione
    r = map(xSun, width/2, 0, azzurro[0], arancione[0]);
    g = map(xSun, width/2, 0, azzurro[1], arancione[1]);
    b = map(xSun, width/2, 0, azzurro[2], arancione[2]);  
    }

    fill(r, g, b);
    rect(0,0,width,height);
  pop();

  //sole  
  push();
    fill('rgba(251, 255, 0, 1)');
    circle(xSun,ySun,50);
  pop();

  //edificio 3 dietro
  push();
    let colore3 = map(xSun, 0, xMax, 100, 255);
    fill(colore3, 100, 200);
    rect(60,200,200,200);
  pop();

  //edificio 4 dietro
  push();
    let colore4 = map(xSun, 0, xMax, 100, 255);
    fill(colore4, 141, 29);
    rect(270,230,100,170);
    let tetto4 = map(xSun, 0, xMax, 100, 255);
    fill(tetto4, 141, 29);
    triangle(250,230,360,230,320,210);
  pop();

  //edificio 5 in mezzo
  push();
    let colore5 = map(xSun, 0, xMax, 100, 255);
    fill(255, colore5, 50);
    rect(340,180,100,230);
  pop();

  //edificio 2 in mezzo
  push();
    let colore2 = map(xSun, 0, xMax, 100, 255);
    fill(colore2, 198, 117);
    rect(100,150,80,300);
    let finestra2 = map(xSun, 0, xMax, 100, 255);
    fill(finestra2, 226, 247);
    rect(140,190,30,20);
  pop();

  //edificio 1 davanti
  push();
    let colore1 = map(xSun, 0, xMax, 100, 255);
    fill(colore1, 130, 180);
    rect(0,250,140,300);
    let tetto1 = map(xSun, 0, xMax, 100, 255);
    fill(tetto1, 33, 105);
    triangle(-20,250,160,250,70,220);
  pop();

  //prato
  push();
    let prato = map(xSun, 0, xMax, 100, 255);
    stroke(100, prato, 100);
    strokeWeight(100);
    curve(-30, 420, 0, 390, 400, 390, 430, 420);
  pop();

  //movimento del sole
  xSun = xSun - 1;
  if(xSun < 0){
    xSun = xMax;
  }
}