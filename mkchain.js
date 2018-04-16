function Chain(tile){
  this.currentState = tile.type;

  this.mk = function(){
    var randomNumber = Math.floor(Math.random() * 100);
    var newState = "";
    switch(true){
      //60% chance to stay the same
      case randomNumber < 70:
        if(this.currentState == "wall"){
          newState = "wall";
        }
        if(this.currentState == "floor"){
          newState = "floor";
        }
        break;
      //40% chance to change states
      case randomNumber >= 70:
        if(this.currentState == "wall"){
          newState = "floor";
        }
        if(this.currentState == "floor"){
          newState = "wall";
        }
        break;
      default:
        newState = "wall";
    }

    return newState;
  }
}
