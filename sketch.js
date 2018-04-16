//wall tiles surrounding dungeon
var walls = [];
//tiles within dungeon
var tiles = [];

function setup() {
  createCanvas(640, 480);
  //create wall around canvas
  for (var x = 0; x < 650; x = x + 10) {
    for (var y = 0; y < 490; y = y + 10) {
      if (y == 0 || y == 470) {
        var tile = new Tile(x, y, 10, "wall");
        walls.push(tile);
      } else {
        if (x == 0 || x == 630) {
          var tile = new Tile(x, y, 10, "wall");
          walls.push(tile);
        }
      }
    }
  }

  //create first floor tile
  var tile = new Tile(10, 10, 10, "floor");
  tiles.push(tile);

}

function draw() {

  background(51);

  //show wall tiles
  for(var i = 0; i < walls.length; i++){
    walls[i].show();
  }

  //create new tiles using Markov's Chain
  for(var i = 0; i < tiles.length; i++){
    //creates tiles in the x direction until the end of the row
    if(tiles[tiles.length - 1].x != 620){
      var tile = new Tile(tiles[i].x + 10, tiles[i].y, tiles[i].size, new Chain(tiles[i]).mk());
      tiles.push(tile);
    }else{
    //when end of row, create new row and repeat above
      if(tiles[tiles.length - 1]. y != 460){
        var tile = new Tile(tiles[i - 61].x, tiles[i - 61].y + 10, tiles[i].size, new Chain(tiles[i - 61]).mk())
        tiles.push(tile);
      }
    }
  }

  //Show dungeon tiles
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].show();
  }

}
