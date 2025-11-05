let data;

function preload() {
  data = loadTable("assets/data.csv", 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);

  console.log("i miei dati: ", data);

  let selected = data.findRows("Italy", "country")[0] //dammi il primo elemento

  console.log(selected);

  let dimensions = [
    "Access to financial assets",
    "Access to justice",
    "Access to land assets",
    "Access to non-land assets",
    "Child marriage eradication",
    "Female genital mutilation eradication",
    "Freedom of movement",
    "Household responsibilities",
    "Political voice",
    "Violence against women eradication",
    
  ]
}

function draw() {
  background(220);
}
