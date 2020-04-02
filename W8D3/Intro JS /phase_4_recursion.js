const range = function(start, end) {
    if (start === end) {
        return [start];
    }
    return [start].concat(range(start + 1, end));
}

// console.log(range(1, 5))

const sumRec = function(array) {
    if (array.length === 1) {
        return array[0];
    }
    return (array[0] + sumRec(array.slice(1)));
}

// console.log("Output:", sumRec([1, 2, 3, 4, 5]));

const exponent = function(base, exp) {
    if (exp === 1) {
        return base;
    }
    if (exp < 0) {
        return (1 / (base * exponent(base, -exp - 1)));
    } else {
        return (base * exponent(base, exp - 1));
    }
}

// console.log("Output:", exponent(2, -3))

const fibonacci = function(n) {
    if (n === 1) { return [1] }
    if (n === 2) { return [1, 1] }

    let lastFib = fibonacci(n - 1);
    let length = lastFib.length;
    return lastFib.concat([lastFib[length - 1] + lastFib[length - 2]])
}

// console.log(fibonacci(7));

// [1,1,2,3,5,8]

// fibonacci(5)
// lastFib = [1,1,2,3].concat([5])
// length = 4

const deepDup = function(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            output.push(deepDup(array[i]));
        } else {
            output.push(array[i]);
        }
    }
    return output;
}

// let arr = [1, 2, [3],
//     [4, [5]]
// ]
// const output = deepDup(arr)
// arr[2] = [12];
// console.log(arr)
// console.log(output)
// console.log(deepDup(arr) == arr)
// console.log(deepDup(arr), " = ", arr)