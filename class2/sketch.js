let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.6;

function setup() {
  createCanvas(xMax, yMax);
  //rallentare
  frameRate(5);
}

function draw() {
  background("#061b2dff");
  // mostrare un testo bianco che
  // dice le coordinate del mouse
  // sul foglio da disegno
  fill(0); //bianco
  textSize(20);
  //stringa, x, y
  text("mouseX:"+ mouseX + ", \
    mouseY: " + mouseY,20,20); // mouseX dice la posizione X del mouse all'interno del foglio

  //disegnare le stelle
  //120
  //tre tipi di stelle a, b, c
  //fino a che abbiamo 120 stelle
  //stelle ellipse
  push();
    //3 cicli

    //ciclo 1 specifica stella a, 40
    //noStroke();
    strokeWeight(random(0, 2))

    //un unico ciclo
    //creama una sequenza per fare a, b, c
    for(let i = 0; i < 120; i++){
      //let starX = (i*37) % width + (i%3) * 5; //posizione stella collegata
      // al valore dell'indice
      // width è la larghezza dello schermo
      //let starY = ((i*73) % height) + (i%7);

      //la posizione delle stelle random
      let starX = random(0, 500);
      let starY = random(0, 800);
      //operatore modulo %
      //stella a quando i è pari, se il resto di i/2 è 0
      if(i % 2 == 0){
        //stella tipo a
        fill(255,255,150);
        ellipse(starX,starY, 1); //1
      }else if(i % 3 == 0){
        //stella tipo b
        //per ogni i divisibile per 3
        fill(200,100,255);
        ellipse(starX,starY, 1.5); //1.5
      }else{
        //stella tipo c
        fill(255,255,100);
        ellipse(starX,starY, 2.8); //2.8
      }

    }
    //ciclo 2 specifica stella b, 40
    //    for(let i = 0; i < 40; i++){
    //  let starX = (i*37) % width + (i%3) * 5; //posizione stella collegata
      // al valore dell'indice
      // width è la larghezza dello schermo
    //  let starY = ((i*73) % height) + (i%7);
    //  fill(200,100,150);
    //  ellipse(starX, starY, 1);
    //}
    //ciclo 3 specifica stella c, 40
  pop();

  //aprire contesto di disegno, indispensabile
  push();

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

  //finire contesto
  pop();

  //xRocket = (xRocket + 1) % xMax; //reset quando esce
  yRocket = yRocket - 1;
  //quando la yRocket sarà oltre una certa soglia
  let soglia = - (yMax/2);
  if(yRocket < soglia){
    yRocket = yMax;
  }
  //allora devo resettare la yRocket
}
