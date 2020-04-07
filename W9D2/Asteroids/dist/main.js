/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroids.js":
/*!**************************!*\
  !*** ./src/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\n\r\n\r\nfunction Asteroid(options) {\r\n  options.color = 'red';\r\n  options.radius = 5;\r\n  options.vel = Util.randomVec(2)\r\n  MovingObject.call(this, options)\r\n}\r\n\r\n\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\nmodule.exports = Asteroid; \n\n//# sourceURL=webpack:///./src/asteroids.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroids.js */ \"./src/asteroids.js\");\r\n\r\n\r\nGame.DIM_Y = 300;\r\nGame.DIM_X = 300;\r\nGame.NUM_ASTEROIDS = 3;\r\n\r\nfunction Game() {\r\n    // const DIM_Y = DIM_Y;\r\n    // const DIM_X = DIM_X;\r\n    // const NUM_ASTEROIDS = NUM_ASTEROIDS;\r\n    this.asteroids = []\r\n    this.addAsteroids()\r\n   \r\n}\r\n\r\n\r\n\r\n\r\nGame.prototype.addAsteroids = function(){\r\n    \r\n    while (this.asteroids.length !== Game.NUM_ASTEROIDS) {\r\n      this.asteroids.push(new Asteroid(this.randomPosition))\r\n  }\r\n}\r\n\r\n\r\nGame.prototype.randomPosition = function(){\r\n  let randomPos = [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_X)];\r\n  return randomPos;\r\n}\r\n\r\n\r\n// Write a Game.prototype.draw(ctx) method. It should call clearRect on the ctx to wipe down the entire \r\n// space. Call the draw method on each of the asteroids.\r\n\r\nGame.prototype.draw = function(ctx){\r\n  ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y)\r\n\r\n  for (let i = 0; i < this.asteroids.length; i ++) {\r\n      this.asteroids[i].draw(ctx)\r\n  }\r\n}\r\n\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroids.js */ \"./src/asteroids.js\");\r\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\r\n\r\nwindow.MovingObject = MovingObject;\r\nconsole.log(\"Webpack sucks!\")\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    canvas = document.getElementById('game-canvas');\r\n    ctx = canvas.getContext('2d');\r\n    window.canvas = canvas\r\n    window.ctx = ctx\r\n\r\n  //  console.log(Game.DIM_X)\r\n  //  console.log(Game.DIM_Y)\r\n    canvas.width = Game.DIM_X\r\n    canvas.height = Game.DIM_Y\r\n    mygame = new Game();\r\n    mygame.draw(ctx);    \r\n\r\n    \r\nconst asteroid1 = new Asteroid({\r\n    pos: [30, 30]\r\n  \r\n  });\r\n  \r\n  asteroid1.draw(ctx)\r\n  \r\n});\r\n\r\n\r\n// game.js:38 Uncaught TypeError: Failed to execute 'clearRect' on 'CanvasRenderingContext2D': 4 arguments required, but only 0 present.\r\n//     at Game.draw (game.js:38)\r\n//     at HTMLDocument.eval (index.js:16)\r\n// Game.draw @ game.js:38\r\n// eval @ index.js:16\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nfunction MovingObject(options){\r\n  this.pos = options[\"pos\"];\r\n  this.vel = options[\"vel\"];\r\n  this.radius = options[\"radius\"];\r\n  this.color = options[\"color\"];\r\n}\r\n\r\nMovingObject.prototype.draw = function(ctx){\r\n  console.log(ctx);\r\n\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\r\n\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n\r\n}\r\n\r\nMovingObject.prototype.move = function(){\r\n  this.pos[0] += this.vel[0];\r\n  this.pos[1] += this.vel[1];\r\n}\r\n\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\r\n    inherits: function inherits(childClass, parentClass) {\r\n        function Surrogate(){};\r\n        Surrogate.prototype = parentClass.prototype;\r\n        childClass.prototype = new Surrogate();\r\n        childClass.prototype.contructor = childClass\r\n\r\n    },\r\n    randomVec(length) {\r\n      const deg = 2 * Math.PI * Math.random();\r\n      return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n    // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n      return [vec[0] * m, vec[1] * m];\r\n    }\r\n  };\r\n  \r\n\r\n\r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });