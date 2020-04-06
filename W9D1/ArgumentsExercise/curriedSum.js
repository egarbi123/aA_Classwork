function curriedSum(numArgs) {
    const nums = [];

    function _curriedSum(num) {
        nums.push(num);
        if (nums.length === numArgs) {
            let sum = 0;
            for (let i = 0; i < nums.length; i++) {
                sum += nums[i];
            }
            return sum;
        } else {
            return _curriedSum
        }
    }
    return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56