function Tile(x, y, size, type){
  this.x = x;
  this.y = y;
  this.size = size;
  this.type = type;



  this.show = function(){
    push();
    if(this.type == "wall"){
      fill(0);
    }

    if(this.type == "floor"){
      fill(255);
    }

    rect(this.x, this.y, this.size, this.size);
    pop();
  }
}
