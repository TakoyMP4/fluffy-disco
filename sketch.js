  


  let cor;
  let posicaoHorizontal;
  let posicaoVertical;

function setup() {
  createCanvas(400, 400);
}

function setup() {

  createCanvas(500, 500)
  cor = color(random(0, 255), random(0, 255),random (0, 255));
  background(color(100, 0 , 0));
    posicaoHorizontal = 400;
    posicaoVertical = 300;
}
    
function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal--;
  }
  
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal++;
  }
  if (mouseY < posicaoHorizontal) {
    posicaoVertical--;
  }
  
  if (mouseY > posicaoHorizontal) {
    posicaoVertical++;
  }
  
  if (mouseIsPressed){
    cor = color(random(0, 255), random(0, 255),random (0, 255), random(0, 100));
    
  }
  
}