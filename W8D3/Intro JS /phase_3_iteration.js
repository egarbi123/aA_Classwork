Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                sorted = false;
            }
        }
    }
}

String.prototype.substrings = function() {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length + 1; j++) {
            if (i !== j) {
                output.push(this.slice(i, j));
            }
        }
    }
    return output;
}


// let string = "Hello"
// console.log(string.substrings())
// let arr = [5, 3, 4, 1, 2]
// arr.bubbleSort()
// console.log(arr)