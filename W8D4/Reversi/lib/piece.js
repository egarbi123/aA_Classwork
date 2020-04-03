/**
 * Initializes the Piece with its color.
 */

//maybe a global variable that stores color?


function Piece(color) {
    this.allColors = ["white", "black"];
    if (this.allColors.includes(color)) {
        this.color = color;
    } else {
        throw "Please pick white or black.";
    }
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function() {
    if (this.color === 'white') {
        return 'black';
    } else {
        return 'white';
    }
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function() {
    this.color = this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function() {
    return this.color[0].toUpperCase();
};

// const whatever = new Piece('white');
// console.log(whatever.toString());
// whatever.flip();
// console.log(whatever.toString());

module.exports = Piece;