Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}


Array.prototype.myMap = function(callback) {
    output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(callback(this[i]))
    }
    return output;
}

Array.prototype.myReduce = function(callback, init) {
    let i = 0;
    if (!init) {
        init = this[0];
        i++;
    }
    for (i; i < this.length; i++) {
        init = callback(init, this[i]);
    }
    return init;
}

// function testReduce(val1, val2) {
//     return val1 + val2;
// }

// function testMap(val) { 
//     return val * val;
// }

// let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.myReduce(testReduce, 5));

// console.log(arr.myMap(testMap))