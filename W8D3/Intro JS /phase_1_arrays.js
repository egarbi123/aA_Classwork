Array.prototype.uniq = function() {
    let returnValue = [];
    for (let i = 0; i < this.length; i++) {
        if (!returnValue.includes(this[i])) {
            returnValue.push(this[i])
        }
    }
    return returnValue
}


Array.prototype.twoSum = function() {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (i !== j) {
                if ((this[i] + this[j]) === 0) {
                    output.push([i, j]);
                }
            }
        }
    }
    return output;
}

Array.prototype.transpose = function() {
    let output = [];
    for (let row = 0; row < this[0].length; row++) {
        let pusher = []
        for (let col = 0; col < this.length; col++) {
            pusher.push(this[col][row])
        }
        output.push(pusher)
    }
    return output;
}