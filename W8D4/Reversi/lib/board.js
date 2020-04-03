let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid() {
    let grid = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, new Piece("white"), new Piece("black"), null, null, null],
        [null, null, null, new Piece("black"), new Piece("white"), null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
    ];

    return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board() {
    this.grid = _makeGrid();
}

Board.DIRS = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function(pos) {
    x_pos = pos[0];
    y_pos = pos[1];
    return this.grid[x_pos][y_pos];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function(color) {


};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function(pos, color) {
    if (this.getPiece(pos)) {
        return (this.getPiece(pos).color === color);
    }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function(pos) {
    if (this.getPiece(pos) === null) {
        return false;
    }
    return true;
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function() {};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function(pos) {
    let x = pos[0];
    let y = pos[1];
    if (x < 0 || y < 0) {
        return false;
    }
    if (y > 7 || x > 7) {
        return false;
    }
    return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */

// return null if hit an empty pos
// return null if no pieces of the opp color were found
// if we hit our color... return piecesToFlip
// if we hit another color... add that piece to piecesToFlip && recursive step

// use .getPiece && .isMine
function _positionsToFlip(board, pos, color, dir, piecesToFlip) {
    if (!board.getPiece(pos)) {
        return null;
    } else if (board.isMine(pos, color)) {
        return piecesToFlip;
    } else {
        piecesToFlip.push(pos);
        let newPos = [pos[0] + dir[0], pos[1] + dir[1]];
        return _positionsToFlip(board, newPos, color, dir, piecesToFlip);
    }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function(pos, color) {};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function() {};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function(pos, color) {
    if (!this.isValidPos(pos)) {
        return false;
    }
    if (this.isOccupied(pos)) {
        return false;
    }
    for (let i = 0; i < Board.DIRS.length; i++) {
        if (_positionsToFlip(this.board, pos, color, Board.DIRS[i], [])) {
            return true;
        }
    }
    return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function(color) {
    let output = [];
    for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid.length; j++) {
            let pos = [i, j];
            if (this.validMove(pos, color)) {
                output.push(pos);
            }
        }
    }
    return output;
};

module.exports = Board;