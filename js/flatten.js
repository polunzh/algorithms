const assert = require('assert');

function flatten(arr) {
    const queue = [[].concat(arr)];

    const res = [];
    while(queue.length > 0) {
        const item = queue.pop();
        item.forEach(x => {
            if(Array.isArray(x)) {
                queue.push(x);
            } else {
                res.push(x);
            }
        });
    }

    return res;
}

console.log(flatten([1, 2, 3]));
console.log(flatten([1, [2], 3]));
console.log(flatten([1, [2, 3], [3, [2, 1]]]));
