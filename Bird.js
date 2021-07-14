class Shooter extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
  }
};