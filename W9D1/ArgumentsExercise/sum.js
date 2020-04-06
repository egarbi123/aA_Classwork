// Solve it first using the arguments keyword, 
// then rewrite your solution to use the ... rest operator.

// arguments keyword:
function sum() {
    // let args = arguments;
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// ... rest operator:
// function sum(...args){
//     let sum = 0;
//     for (let i = 0; i < args.length; i++){
//         sum += args[i];
//     }
//     return sum;
// }

// function sum() {
//     let args = arguments;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }



console.log(sum(1, 2, 3, 4))
console.log(sum(1, 2, 3, 4, 5))