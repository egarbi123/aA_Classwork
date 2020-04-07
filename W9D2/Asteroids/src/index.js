const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroids.js');
const Game = require('./game.js');

window.MovingObject = MovingObject;
console.log("Webpack sucks!")



document.addEventListener('DOMContentLoaded', () => {
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');
    window.canvas = canvas
    window.ctx = ctx

  //  console.log(Game.DIM_X)
  //  console.log(Game.DIM_Y)
    canvas.width = Game.DIM_X
    canvas.height = Game.DIM_Y
    mygame = new Game();
    mygame.draw(ctx);    

    
const asteroid1 = new Asteroid({
    pos: [30, 30]
  
  });
  
  asteroid1.draw(ctx)
  
});


// game.js:38 Uncaught TypeError: Failed to execute 'clearRect' on 'CanvasRenderingContext2D': 4 arguments required, but only 0 present.
//     at Game.draw (game.js:38)
//     at HTMLDocument.eval (index.js:16)
// Game.draw @ game.js:38
// eval @ index.js:16