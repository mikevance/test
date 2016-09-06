//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function FunnyFace(x,y,z){
  stroke(156,196,178,255);
  fill(156,20,77,z);
  rect(x, y, 70, 90);

  rect(x+15, y+10, 40, 5);

  var d = 10
  triangle(x+15, y+10+d, x+35, y+10+d, x+35, y+20+d);
  triangle(x+55, y+10+d, x+35, y+10+d, x+35, y+20+d);


  var a = 10;
  for(i = 0; i < 4; i++){
    a = a+10;
    line(x+a, y+34, x+a, y+38);
  }

  a = 5;
  for(i = 0; i < 5; i++){
    a = a+10;
    point(x+a, y+40);
  }

  a = 5;
  for(i = 0; i < 5; i++){
    a = a+10;
    point(x+a, y+50);
  }

  a = 5;
  for(i = 0; i < 5; i++){
    a = a+10;
    line(x+a, y+44, x+a, y+46);
  }

  a = 10;
  for(i = 0; i < 4; i++){
    a = a+10;
    line(x+a, y+52, x+a, y+56);
  }


  var c = 60;
  triangle(x+15, y+10+c, x+35, y+c, x+35, y+10+c);
  triangle(x+55, y+10+c, x+35, y+c, x+35, y+10+c);

  rect(x+15, y+75, 40, 5);

}

function setup() {
  createCanvas(800,810);
  background(231,109,131,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var x=0;x<8;x++){

    for(var y=0;y<8;y++){
      var z = 255
      FunnyFace(15+x*100, 15+y*115, z-y*50);
      console.log("x:"+x+"y:"+y)
    }
  }
}
