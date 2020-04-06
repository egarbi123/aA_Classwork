// Collect up arguments until there are numArgs of them,
// If there are too few arguments still, it should return itself.
// When there are numArgs arguments, it should call the original function.
// Write a version that uses Function.prototype.apply and another one that uses ... (the spread operator).

Function.prototype.curry = function(numArgs) {
    const args = [];
    const juice = this;

    function _curriedSum(num) {
        args.push(num);
        if (args.length === numArgs) {
            return juice.apply(null, args);
            // return juice(...args);
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
};

function sumThree(arg1, arg2, arg3) {
    return (arg1 + arg2 + arg3);
};