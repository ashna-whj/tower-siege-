class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,40,40);
  }
display(){
fill("cyan");
  if(this.body.speed<2.14){
    super.display();
  }
  else{
    World.remove(world,this.body)
  }
}
};