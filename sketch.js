function setup() {
  createCanvas(400, 400);
}

let olhoX
let olhoY

function draw() {
  background('green');
  //rosto
  fill('blue')
  circle(200, 200, 300);
  //olhos
  fill('')
  stroke('#9E9E9E')
  strokeWeight('6')
  circle(150, 150,60 );
  circle(250, 150, 60);
  
  
  //pupilas
  fill('red')
  stroke('black')
  strokeWeight('6')
  //circle(150, 150, 10)//olho esquerdo
  //circle(250, 150, 10)//olho direito
  
  
  
  olhoX = map(mouseX,0,400,125,170)
  olhoY = map(mouseY,0,400,125,170)
  
  circle(olhoX,olhoY, 10)
  circle(olhoX+100,olhoY, 10)
  
  //boca
  fill('rgb(0,0,0)')
  stroke('')
  strokeWeight('4')
  line(134, 265, 255, 265)
  //cicatriz
  stroke('rgb(252,0,0)')
  strokeWeight(3)
  line(256, 204, 230,100)
  //nariz
  fill('yellow')
  stroke('green')
  strokeWeight('3')
  triangle(202, 183, 150, 224, 242, 223)
  

  if(mouseIsPressed){
     console.log(mouseX,mouseY);
  }


}