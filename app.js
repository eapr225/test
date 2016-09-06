//This is the most basic template for working with P5 javascript library
function FunnyFace(x,y){
  strokeWeight(3);
  stroke(225,39,95,255);
  fill(245,242,34,255);
  triangle(x, y, x+60, y, x+30, y+60);

  fill(255,0,0,255);
  ellipse(x+20, y+15, 10, 10);
  ellipse(x+40, y+15, 10, 10);

  ellipse(x+30,y+35, 10, 10);
}

function setup() {
  createCanvas(800, 800);
  //http://p5js.org/reference/#/p5/createCanvas
  background(102,227,229,255)
  //http://p5js.org/reference/#p5/rect

  for(var x=0;x<8;x++){
    for(var y=0;y<8;y++){
      FunnyFace(x*100,15+y*100);
      console.log("x:"+x+" y:"+y);
    }
  }
}
