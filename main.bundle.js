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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Fruit.js":
/*!**********************!*\
  !*** ./lib/Fruit.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Fruit, _GamePiece);

  function Fruit(x, y, color) {
    _classCallCheck(this, Fruit);

    var _this = _possibleConstructorReturn(this, (Fruit.__proto__ || Object.getPrototypeOf(Fruit)).call(this, x, y, color));

    _this.x = _this.findRandomSpace(0, 800, 20);
    _this.y = _this.findRandomSpace(0, 600, 20);
    _this.color = 'rgb(250, 0, 0)';
    return _this;
  }

  _createClass(Fruit, [{
    key: 'findRandomSpace',
    value: function findRandomSpace(min, max, inc) {
      return Math.floor(Math.random() * (max - min) / inc) * inc + 1;
    }
  }]);

  return Fruit;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Head = __webpack_require__(/*! ./Head.js */ "./lib/Head.js");
var Fruit = __webpack_require__(/*! ./Fruit.js */ "./lib/Fruit.js");

module.exports = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.isGameOver = false;
    this.score = 0;
    this.head = new Head(61, 41, 'rgb(0, 250, 0)', 0, 0);
    this.fruit = new Fruit();
    this.blocks = [];
  }

  _createClass(Game, [{
    key: 'createSnake',
    value: function createSnake() {
      this.blocks.push(this.head);
    }
  }, {
    key: 'animate',
    value: function animate(context) {
      this.blocks.forEach(function (block) {
        block.draw(context);
      });
      this.head.move();
      this.blocks.unshift(new Head(this.head.x, this.head.y, 'rgb(0, 250, 0)', 0, 0));
      this.blocks.pop();
      this.fruit.draw(context);
    }
  }, {
    key: 'hitFruit',
    value: function hitFruit() {
      var _this = this;

      if (this.head.isCollidingWith(this.fruit)) {
        this.fruit.x = Math.floor(Math.random() * (800 - 0) / 20) * 20 + 1;
        this.fruit.y = Math.floor(Math.random() * (600 - 0) / 20) * 20 + 1;
        this.blocks.forEach(function (block) {
          if (block.isCollidingWith(_this.fruit)) {
            _this.fruit.x = Math.floor(Math.random() * (800 - 0) / 20) * 20 + 1;
            _this.fruit.y = Math.floor(Math.random() * (600 - 0) / 20) * 20 + 1;
          }
        });
        this.growSnake();
        return this.score++;
      }
    }
  }, {
    key: 'hitTail',
    value: function hitTail() {
      var _this2 = this;

      var counter = 0;

      this.blocks.forEach(function (block) {
        if (_this2.head.isCollidingWith(block)) {
          counter++;
        }
      });
      if (counter > 1) {
        this.isGameOver = true;
      }
    }
  }, {
    key: 'wallCrash',
    value: function wallCrash() {
      var _this3 = this;

      this.blocks.forEach(function (block) {
        if (block.x > 782 || block.x < .5 || block.y > 642 || block.y < .5) {
          _this3.isGameOver = true;
        }
      });
    }
  }, {
    key: 'growSnake',
    value: function growSnake() {
      this.blocks.push(new Head());
      this.blocks.push(new Head());
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.color = color;
    this.height = 18;
    this.width = 18;
  }

  _createClass(GamePiece, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return this.x === object.x && this.y === object.y;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Head.js":
/*!*********************!*\
  !*** ./lib/Head.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Head, _GamePiece);

  function Head(x, y, color, dx, dy) {
    _classCallCheck(this, Head);

    var _this = _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, x, y, color));

    _this.dx = dx;
    _this.dxv = 20;
    _this.dy = dy;
    _this.dyv = 20;
    return _this;
  }

  _createClass(Head, [{
    key: 'move',
    value: function move() {
      if (this.x < 782 && this.x > 0 && this.y < 642 && this.y > 0) {
        this.x += this.dx * this.dxv;
        this.y += this.dy * this.dyv;
      }
    }
  }]);

  return Head;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var leaderboard = JSON.parse(localStorage.getItem('score')) || [];
var scoreOutput = document.querySelector('.scoreboard');
var newGame = new Game();
var difficulty = 100;
var difficultyCounter = 1;
var upButton = document.querySelector('.up-button');
var downButton = document.querySelector('.down-button');
var difficultyDisplay = document.querySelector('.difficulty');

populateLeaderboard(leaderboard, scoreOutput);
newGame.createSnake();
requestAnimationFrame(frameRate);

upButton.addEventListener('click', increaseDifficulty);
downButton.addEventListener('click', decreaseDifficulty);
window.addEventListener('keydown', changeDirection);

function increaseDifficulty(e) {
  e.preventDefault();
  if (difficultyCounter < 4) {
    difficultyCounter++;
  }
  adjustDifficulty(difficultyCounter);
}

function decreaseDifficulty(e) {
  e.preventDefault();
  if (difficultyCounter > 1) {
    difficultyCounter--;
  }
  adjustDifficulty(difficultyCounter);
}

function adjustDifficulty(difficultyCounter) {
  if (difficultyCounter === 1) {
    difficultyDisplay.innerText = 'Easy';
    difficulty = 100;
  } else if (difficultyCounter === 2) {
    difficultyDisplay.innerText = 'Medium';
    difficulty = 70;
  } else if (difficultyCounter === 3) {
    difficultyDisplay.innerText = 'Hard';
    difficulty = 45;
  } else if (difficultyCounter === 4) {
    difficultyDisplay.innerText = 'Insane';
    difficulty = 20;
  }
}

function frameRate() {
  setTimeout(gameLoop, difficulty);
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (newGame.isGameOver) {
    displayGameover();
    window.addEventListener('keydown', storeInitials);
    return;
  } else {
    newGame.wallCrash();
    newGame.hitFruit();
    newGame.hitTail();
    newGame.animate(context);
    document.querySelector('.score').innerText = newGame.score;
  }
  requestAnimationFrame(frameRate);
}

function changeDirection(e) {
  if (e.keyCode === 38 && newGame.head.dy !== 1) {
    newGame.head.dy = -1;
    newGame.head.dx = 0;
  } else if (e.keyCode === 39 && newGame.head.dx !== -1) {
    newGame.head.dx = 1;
    newGame.head.dy = 0;
  } else if (e.keyCode === 40 && newGame.head.dy !== -1) {
    newGame.head.dy = 1;
    newGame.head.dx = 0;
  } else if (e.keyCode === 37 && newGame.head.dx !== 1) {
    newGame.head.dx = -1;
    newGame.head.dy = 0;
  }
}

function sendScoreToStorage(leaderboard, initials) {
  var score = newGame.score;

  if (initials === "") {
    initials = "???";
  }

  var userScore = {
    score: score,
    initials: initials
  };

  leaderboard.push(userScore);
  var sortLeader = leaderboard.sort(function (a, b) {
    return b.score > a.score;
  });

  if (sortLeader.length > 10) {
    sortLeader.pop();
    var sortLeader = leaderboard.sort(function (a, b) {
      return b.score > a.score;
    });
  }
  localStorage.setItem('score', JSON.stringify(sortLeader));
}

function populateLeaderboard(scores, scoreBoard) {
  scoreBoard.innerHTML = scores.map(function (scores) {
    return '\n      <li class ="score-display"><p>' + scores.score + '</p><p>' + scores.initials + '</p></li>\n    ';
  });
}

function displayGameover() {
  var endgameDisplay = document.querySelector('.endgame-display');

  endgameDisplay.innerHTML += ' <div class="gameover-text font-gradient">GAME OVER!!!</div>\n      <div class="initials-text font-gradient">ENTER YOUR INITIALS:</div>\n      <input type="text" name="initials" class="initials-input" maxlength="3" style="text-transform:uppercase" placeholder="AAA">\n    ';
  window.addEventListener('keydown', storeInitials);
}

function storeInitials(e) {
  var userInitials = document.querySelector('.initials-input');

  if (userInitials === null) {
    return;
  }

  var rawInitials = userInitials.value;
  var initials = rawInitials.toUpperCase();

  userInitials.focus();

  if (e.keyCode === 13) {
    sendScoreToStorage(leaderboard, initials);
    populateLeaderboard(leaderboard, scoreOutput);
    removeGameOver();
    newGame = new Game();
    newGame.createSnake();
    requestAnimationFrame(frameRate);
    return;
  }
}

function removeGameOver() {
  var gameText = document.querySelector('.gameover-text');
  var intialsText = document.querySelector('.initials-text');
  var intialsInput = document.querySelector('.initials-input');

  gameText.remove();
  intialsText.remove();
  intialsInput.remove();
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0ZydWl0LmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJjb2xvciIsImZpbmRSYW5kb21TcGFjZSIsIm1pbiIsIm1heCIsImluYyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkhlYWQiLCJGcnVpdCIsImlzR2FtZU92ZXIiLCJzY29yZSIsImhlYWQiLCJmcnVpdCIsImJsb2NrcyIsInB1c2giLCJjb250ZXh0IiwiZm9yRWFjaCIsImJsb2NrIiwiZHJhdyIsIm1vdmUiLCJ1bnNoaWZ0IiwicG9wIiwiaXNDb2xsaWRpbmdXaXRoIiwiZ3Jvd1NuYWtlIiwiY291bnRlciIsImhlaWdodCIsIndpZHRoIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJvYmplY3QiLCJkeCIsImR5IiwiZHh2IiwiZHl2IiwiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJsZWFkZXJib2FyZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzY29yZU91dHB1dCIsIm5ld0dhbWUiLCJkaWZmaWN1bHR5IiwiZGlmZmljdWx0eUNvdW50ZXIiLCJ1cEJ1dHRvbiIsImRvd25CdXR0b24iLCJkaWZmaWN1bHR5RGlzcGxheSIsInBvcHVsYXRlTGVhZGVyYm9hcmQiLCJjcmVhdGVTbmFrZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lUmF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbmNyZWFzZURpZmZpY3VsdHkiLCJkZWNyZWFzZURpZmZpY3VsdHkiLCJ3aW5kb3ciLCJjaGFuZ2VEaXJlY3Rpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGp1c3REaWZmaWN1bHR5IiwiaW5uZXJUZXh0Iiwic2V0VGltZW91dCIsImdhbWVMb29wIiwiY2xlYXJSZWN0IiwiZGlzcGxheUdhbWVvdmVyIiwic3RvcmVJbml0aWFscyIsIndhbGxDcmFzaCIsImhpdEZydWl0IiwiaGl0VGFpbCIsImFuaW1hdGUiLCJrZXlDb2RlIiwic2VuZFNjb3JlVG9TdG9yYWdlIiwiaW5pdGlhbHMiLCJ1c2VyU2NvcmUiLCJzb3J0TGVhZGVyIiwic29ydCIsImEiLCJiIiwibGVuZ3RoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNjb3JlcyIsInNjb3JlQm9hcmQiLCJpbm5lckhUTUwiLCJtYXAiLCJlbmRnYW1lRGlzcGxheSIsInVzZXJJbml0aWFscyIsInJhd0luaXRpYWxzIiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsImZvY3VzIiwicmVtb3ZlR2FtZU92ZXIiLCJnYW1lVGV4dCIsImludGlhbHNUZXh0IiwiaW50aWFsc0lucHV0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIs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bEI7QUFDQSxNQUFJNEQsZUFBZTdELFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQW5COztBQUVBMEQsV0FBU0csTUFBVDtBQUNBRixjQUFZRSxNQUFaO0FBQ0FELGVBQWFDLE1BQWI7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJ2YXIgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGcnVpdCBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgY29sb3IpO1xuICAgIHRoaXMueCA9IHRoaXMuZmluZFJhbmRvbVNwYWNlKDAsIDgwMCwgMjApO1xuICAgIHRoaXMueSA9IHRoaXMuZmluZFJhbmRvbVNwYWNlKDAsIDYwMCwgMjApO1xuICAgIHRoaXMuY29sb3IgPSAncmdiKDI1MCwgMCwgMCknO1xuICB9XG5cbiAgZmluZFJhbmRvbVNwYWNlKG1pbiwgbWF4LCBpbmMpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgLyBpbmMpICogaW5jICsgMTtcbiAgfVxufSIsInZhciBIZWFkID0gcmVxdWlyZSgnLi9IZWFkLmpzJyk7XG52YXIgRnJ1aXQgPSByZXF1aXJlKCcuL0ZydWl0LmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaGVhZCA9IG5ldyBIZWFkKDYxLCA0MSwgJ3JnYigwLCAyNTAsIDApJywgMCwgMCk7XG4gICAgdGhpcy5mcnVpdCA9IG5ldyBGcnVpdDtcbiAgICB0aGlzLmJsb2NrcyA9IFtdO1xuICB9XG4gIFxuICBjcmVhdGVTbmFrZSgpIHsgXG4gICAgdGhpcy5ibG9ja3MucHVzaCh0aGlzLmhlYWQpXG4gIH1cblxuICBhbmltYXRlKGNvbnRleHQpIHtcbiAgICB0aGlzLmJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgIGJsb2NrLmRyYXcoY29udGV4dCk7XG4gICAgfSlcbiAgICB0aGlzLmhlYWQubW92ZSgpO1xuICAgIHRoaXMuYmxvY2tzLnVuc2hpZnQobmV3IEhlYWQodGhpcy5oZWFkLngsIHRoaXMuaGVhZC55LCAncmdiKDAsIDI1MCwgMCknLCAwLCAwKSk7XG4gICAgdGhpcy5ibG9ja3MucG9wKCk7XG4gICAgdGhpcy5mcnVpdC5kcmF3KGNvbnRleHQpO1xuICB9XG5cbiAgaGl0RnJ1aXQoKSB7XG4gICAgaWYgKHRoaXMuaGVhZC5pc0NvbGxpZGluZ1dpdGgodGhpcy5mcnVpdCkpIHtcbiAgICAgIHRoaXMuZnJ1aXQueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg4MDAgLSAwKSAvIDIwKSAqIDIwICsgMTtcbiAgICAgIHRoaXMuZnJ1aXQueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg2MDAgLSAwKSAvIDIwKSAqIDIwICsgMTtcbiAgICAgIHRoaXMuYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICBpZiAoYmxvY2suaXNDb2xsaWRpbmdXaXRoKHRoaXMuZnJ1aXQpKSB7XG4gICAgICAgICAgdGhpcy5mcnVpdC54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDgwMCAtIDApIC8gMjApICogMjAgKyAxO1xuICAgICAgICAgIHRoaXMuZnJ1aXQueSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg2MDAgLSAwKSAvIDIwKSAqIDIwICsgMTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuZ3Jvd1NuYWtlKCk7XG4gICAgICByZXR1cm4gdGhpcy5zY29yZSsrO1xuICAgIH1cbiAgfVxuXG4gIGhpdFRhaWwoKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIFxuICAgIHRoaXMuYmxvY2tzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgaWYgKHRoaXMuaGVhZC5pc0NvbGxpZGluZ1dpdGgoYmxvY2spKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChjb3VudGVyID4gMSkge1xuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB3YWxsQ3Jhc2goKSB7XG4gICAgdGhpcy5ibG9ja3MuZm9yRWFjaChibG9jayA9PiB7XG4gICAgICBpZiAoYmxvY2sueCA+IDc4MiB8fCBibG9jay54IDwgLjUgfHwgYmxvY2sueSA+IDY0MiB8fCBibG9jay55IDwgLjUpIHtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ3Jvd1NuYWtlKCkge1xuICAgIHRoaXMuYmxvY2tzLnB1c2gobmV3IEhlYWQpO1xuICAgIHRoaXMuYmxvY2tzLnB1c2gobmV3IEhlYWQpO1xuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBjb2xvcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5oZWlnaHQgPSAxODtcbiAgICB0aGlzLndpZHRoID0gMTg7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG4gICAgXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54ID09PSBvYmplY3QueCAmJlxuICAgICAgdGhpcy55ID09PSBvYmplY3QueSBcbiAgICApXG4gIH1cbn0iLCJ2YXIgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBIZWFkIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgY29sb3IsIGR4LCBkeSkge1xuICAgIHN1cGVyKHgsIHksIGNvbG9yKTtcbiAgICB0aGlzLmR4ID0gZHg7XG4gICAgdGhpcy5keHYgPSAyMDtcbiAgICB0aGlzLmR5ID0gZHk7XG4gICAgdGhpcy5keXYgPSAyMDtcbiAgfVxuICBcbiAgbW92ZSAoKSB7XG4gICAgaWYgKHRoaXMueCA8IDc4MiAmJiB0aGlzLnggPiAwICYmIHRoaXMueSA8IDY0MiAmJiB0aGlzLnkgPiAwKSB7XG4gICAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgICB9XG4gIH1cbn0iLCJ2YXIgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xudmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG52YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xudmFyIGxlYWRlcmJvYXJkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSkgfHwgW107IFxudmFyIHNjb3JlT3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlYm9hcmQnKTtcbnZhciBuZXdHYW1lID0gbmV3IEdhbWUoKTtcbnZhciBkaWZmaWN1bHR5ID0gMTAwO1xudmFyIGRpZmZpY3VsdHlDb3VudGVyID0gMTtcbnZhciB1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cC1idXR0b24nKTtcbnZhciBkb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd24tYnV0dG9uJyk7XG52YXIgZGlmZmljdWx0eURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZmljdWx0eScpO1xuXG5wb3B1bGF0ZUxlYWRlcmJvYXJkKGxlYWRlcmJvYXJkLCBzY29yZU91dHB1dCk7XG5uZXdHYW1lLmNyZWF0ZVNuYWtlKCk7XG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWVSYXRlKTtcblxudXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbmNyZWFzZURpZmZpY3VsdHkpO1xuZG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlY3JlYXNlRGlmZmljdWx0eSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hhbmdlRGlyZWN0aW9uKTtcblxuZnVuY3Rpb24gaW5jcmVhc2VEaWZmaWN1bHR5KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZGlmZmljdWx0eUNvdW50ZXIgPCA0KSB7XG4gICAgZGlmZmljdWx0eUNvdW50ZXIrKztcbiAgfVxuICBhZGp1c3REaWZmaWN1bHR5KGRpZmZpY3VsdHlDb3VudGVyKTtcbn1cblxuZnVuY3Rpb24gZGVjcmVhc2VEaWZmaWN1bHR5KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZGlmZmljdWx0eUNvdW50ZXIgPiAxKSB7XG4gICAgZGlmZmljdWx0eUNvdW50ZXItLTtcbiAgfVxuICBhZGp1c3REaWZmaWN1bHR5KGRpZmZpY3VsdHlDb3VudGVyKTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0RGlmZmljdWx0eShkaWZmaWN1bHR5Q291bnRlcikge1xuICBpZiAoZGlmZmljdWx0eUNvdW50ZXIgPT09IDEpIHtcbiAgICBkaWZmaWN1bHR5RGlzcGxheS5pbm5lclRleHQgPSAnRWFzeSc7XG4gICAgZGlmZmljdWx0eSA9IDEwMDtcbiAgfSBlbHNlIGlmIChkaWZmaWN1bHR5Q291bnRlciA9PT0gMikge1xuICAgIGRpZmZpY3VsdHlEaXNwbGF5LmlubmVyVGV4dCA9ICdNZWRpdW0nO1xuICAgIGRpZmZpY3VsdHkgPSA3MDtcbiAgfSBlbHNlIGlmIChkaWZmaWN1bHR5Q291bnRlciA9PT0gMykge1xuICAgIGRpZmZpY3VsdHlEaXNwbGF5LmlubmVyVGV4dCA9ICdIYXJkJztcbiAgICBkaWZmaWN1bHR5ID0gNDU7XG4gIH0gZWxzZSBpZiAoZGlmZmljdWx0eUNvdW50ZXIgPT09IDQpIHtcbiAgICBkaWZmaWN1bHR5RGlzcGxheS5pbm5lclRleHQgPSAnSW5zYW5lJztcbiAgICBkaWZmaWN1bHR5ID0gMjA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJhbWVSYXRlKCkge1xuICBzZXRUaW1lb3V0KGdhbWVMb29wLCBkaWZmaWN1bHR5KVxufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCAoKSB7XG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IFxuICBpZiAobmV3R2FtZS5pc0dhbWVPdmVyKSB7XG4gICAgZGlzcGxheUdhbWVvdmVyKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzdG9yZUluaXRpYWxzKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgbmV3R2FtZS53YWxsQ3Jhc2goKTtcbiAgICBuZXdHYW1lLmhpdEZydWl0KCk7XG4gICAgbmV3R2FtZS5oaXRUYWlsKCk7XG4gICAgbmV3R2FtZS5hbmltYXRlKGNvbnRleHQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZScpLmlubmVyVGV4dCA9IG5ld0dhbWUuc2NvcmU7XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lUmF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbihlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDM4ICYmIG5ld0dhbWUuaGVhZC5keSAhPT0gMSkge1xuICAgIG5ld0dhbWUuaGVhZC5keSA9IC0xO1xuICAgIG5ld0dhbWUuaGVhZC5keCA9IDA7XG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSAmJiBuZXdHYW1lLmhlYWQuZHggIT09IC0xKSB7XG4gICAgbmV3R2FtZS5oZWFkLmR4ID0gMTtcbiAgICBuZXdHYW1lLmhlYWQuZHkgPSAwXG4gIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCAmJiBuZXdHYW1lLmhlYWQuZHkgIT09IC0xKSB7XG4gICAgbmV3R2FtZS5oZWFkLmR5ID0gMTtcbiAgICBuZXdHYW1lLmhlYWQuZHggPSAwO1xuICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcgJiYgbmV3R2FtZS5oZWFkLmR4ICE9PSAxKSB7XG4gICAgbmV3R2FtZS5oZWFkLmR4ID0gLTE7XG4gICAgbmV3R2FtZS5oZWFkLmR5ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kU2NvcmVUb1N0b3JhZ2UobGVhZGVyYm9hcmQsIGluaXRpYWxzKSB7XG4gIHZhciBzY29yZSA9IG5ld0dhbWUuc2NvcmU7XG4gIFxuICBpZiAoaW5pdGlhbHMgPT09IFwiXCIpIHtcbiAgICBpbml0aWFscyA9IFwiPz8/XCI7XG4gIH1cblxuICB2YXIgdXNlclNjb3JlID0ge1xuICAgIHNjb3JlLFxuICAgIGluaXRpYWxzXG4gIH1cbiAgXG4gIGxlYWRlcmJvYXJkLnB1c2godXNlclNjb3JlKTtcbiAgdmFyIHNvcnRMZWFkZXIgPSBsZWFkZXJib2FyZC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlID4gYS5zY29yZSk7XG4gIFxuICBpZiAoc29ydExlYWRlci5sZW5ndGggPiAxMCkge1xuICAgIHNvcnRMZWFkZXIucG9wKCk7XG4gICAgdmFyIHNvcnRMZWFkZXIgPSBsZWFkZXJib2FyZC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlID4gYS5zY29yZSk7XG4gIH1cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlJywgSlNPTi5zdHJpbmdpZnkoc29ydExlYWRlcikpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUxlYWRlcmJvYXJkKHNjb3Jlcywgc2NvcmVCb2FyZCkge1xuICBzY29yZUJvYXJkLmlubmVySFRNTCA9IHNjb3Jlcy5tYXAoKHNjb3JlcykgPT4ge1xuICAgIHJldHVybiBgXG4gICAgICA8bGkgY2xhc3MgPVwic2NvcmUtZGlzcGxheVwiPjxwPiR7c2NvcmVzLnNjb3JlfTwvcD48cD4ke3Njb3Jlcy5pbml0aWFsc308L3A+PC9saT5cbiAgICBgXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlHYW1lb3ZlcigpIHtcbiAgdmFyIGVuZGdhbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZGdhbWUtZGlzcGxheScpO1xuXG4gIGVuZGdhbWVEaXNwbGF5LmlubmVySFRNTCArPSBcbiAgICBgIDxkaXYgY2xhc3M9XCJnYW1lb3Zlci10ZXh0IGZvbnQtZ3JhZGllbnRcIj5HQU1FIE9WRVIhISE8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbml0aWFscy10ZXh0IGZvbnQtZ3JhZGllbnRcIj5FTlRFUiBZT1VSIElOSVRJQUxTOjwvZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluaXRpYWxzXCIgY2xhc3M9XCJpbml0aWFscy1pbnB1dFwiIG1heGxlbmd0aD1cIjNcIiBzdHlsZT1cInRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZVwiIHBsYWNlaG9sZGVyPVwiQUFBXCI+XG4gICAgYFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3JlSW5pdGlhbHMpOyAgICAgIFxufVxuXG5mdW5jdGlvbiBzdG9yZUluaXRpYWxzKGUpIHtcbiAgdmFyIHVzZXJJbml0aWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbml0aWFscy1pbnB1dCcpO1xuXG4gIGlmICh1c2VySW5pdGlhbHMgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHZhciByYXdJbml0aWFscyA9IHVzZXJJbml0aWFscy52YWx1ZTtcbiAgdmFyIGluaXRpYWxzID0gcmF3SW5pdGlhbHMudG9VcHBlckNhc2UoKTtcblxuICB1c2VySW5pdGlhbHMuZm9jdXMoKTtcbiAgXG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgc2VuZFNjb3JlVG9TdG9yYWdlKGxlYWRlcmJvYXJkLCBpbml0aWFscyk7XG4gICAgcG9wdWxhdGVMZWFkZXJib2FyZChsZWFkZXJib2FyZCwgc2NvcmVPdXRwdXQpO1xuICAgIHJlbW92ZUdhbWVPdmVyKCk7XG4gICAgbmV3R2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgbmV3R2FtZS5jcmVhdGVTbmFrZSgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZVJhdGUpOyAgICBcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlR2FtZU92ZXIoKSB7XG4gIHZhciBnYW1lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lb3Zlci10ZXh0Jyk7XG4gIHZhciBpbnRpYWxzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbml0aWFscy10ZXh0Jyk7XG4gIHZhciBpbnRpYWxzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5pdGlhbHMtaW5wdXQnKTtcblxuICBnYW1lVGV4dC5yZW1vdmUoKTtcbiAgaW50aWFsc1RleHQucmVtb3ZlKCk7XG4gIGludGlhbHNJbnB1dC5yZW1vdmUoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9