const Asteroid = require('./asteroids.js');


Game.DIM_Y = 300;
Game.DIM_X = 300;
Game.NUM_ASTEROIDS = 3;

function Game() {
    // const DIM_Y = DIM_Y;
    // const DIM_X = DIM_X;
    // const NUM_ASTEROIDS = NUM_ASTEROIDS;
    this.asteroids = []
    this.addAsteroids()
   
}




Game.prototype.addAsteroids = function(){
    
    while (this.asteroids.length !== Game.NUM_ASTEROIDS) {
      this.asteroids.push(new Asteroid(this.randomPosition))
  }
}


Game.prototype.randomPosition = function(){
  let randomPos = [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_X)];
  return randomPos;
}


// Write a Game.prototype.draw(ctx) method. It should call clearRect on the ctx to wipe down the entire 
// space. Call the draw method on each of the asteroids.

Game.prototype.draw = function(ctx){
  ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y)

  for (let i = 0; i < this.asteroids.length; i ++) {
      this.asteroids[i].draw(ctx)
  }
}


module.exports = Game;