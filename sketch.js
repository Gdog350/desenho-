function setup() {
  createCanvas(400, 400); 
background("red");
}

function draw() {
stroke("white") ; //cor da linha
fill("black"); //cor do fundo
rect(185,185,30,30); //criando o retangulo
rect(mouseX,mouseY,100,100);
stroke("bluye");//cor da linha
}
