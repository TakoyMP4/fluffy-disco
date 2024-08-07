  


  let cor;
  let posicaoHorizontal;
  let posicaoVertical;

  let posicaoHorizontal2;
  let posicaoVertical2;



function setup() {
  createCanvas(400, 400);
}

function setup() {

  createCanvas(500, 500)
  cor = color(random(0, 255), random(0, 255),random (0, 255));
  background(color(100, 0 , 0));
    posicaoHorizontal = 0;
    posicaoVertical = random(height);
    
    posicaoHorizontal2 = 0;
    posicaoVertical2 = random(height);
}
    
function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  circle(posicaoHorizontal2, posicaoVertical2, 50);
  
  posicaoHorizontal+= random(0,3);
  posicaoVertical+= random(-3,5);
  
  posicaoHorizontal2+= random(0,3);
  posicaoVertical2+= random(-3,3);
  
  if (mouseIsPressed){
    cor = color(random(0, 255), random(0, 255),random (0, 255), random(0, 100));
    
  }
  
}