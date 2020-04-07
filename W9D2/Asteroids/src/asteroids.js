const Util = require("./util.js");
const MovingObject = require('./moving_object.js');


function Asteroid(options) {
  options.color = 'red';
  options.radius = 5;
  options.vel = Util.randomVec(2)
  MovingObject.call(this, options)
}


Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid; 