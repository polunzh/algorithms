const assert = require('assert');

const findMedianNumber = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('非法数组');
  }

  console.log(arr);

  if (arr.length === 1) {
    return arr[0];
  }

  const minArr = [];
  const maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (minArr.length === 0) {
        minArr.push(arr[i]);
      } else {
        if (minArr[minArr.length - 1] < arr[i]) {
          minArr.push(arr[i]);
        } else {
          minArr.unshift(arr[i]);
        }
      }
    } else {
      if (maxArr.length === 0) {
        maxArr.push(arr[i]);
      } else {
        if (maxArr[maxArr.length - 1] > arr[i]) {
          maxArr.push(arr[i]);
        } else {
          maxArr.unshift(arr[i]);
        }
      }
    }

    if (minArr[minArr.length - 1] > maxArr[maxArr.length - 1]) {
      let t1 = minArr.pop();
      let t2 = maxArr.pop();

      minArr.push(t2);
      maxArr.push(t1);
    }
  }

  const medianNumber =
    minArr.length === maxArr.length
      ? (minArr[minArr.length - 1] + maxArr[minArr.length - 1]) / 2
      : minArr[minArr.length - 1];

  return medianNumber;
};

assert.equal(findMedianNumber([0]), 0);
assert.equal(findMedianNumber([0, 0]), 0);
assert.equal(findMedianNumber([0, 0, 0]), 0);
assert.equal(findMedianNumber([1, 1]), 1);
assert.equal(findMedianNumber([1, 2]), 1.5);
assert.equal(findMedianNumber([1, 1, 1]), 1);
assert.equal(findMedianNumber([1, 5, 3]), 3);
assert.equal(findMedianNumber([3, 1, 2, 3]), 2.5);
assert.equal(findMedianNumber([6, 7, 2, 3, 8]), 6);
