const assert = require('assert');

/**
 *
 * @param {array} heap
 * @param {char} item
 */
const insertToHeap = (heap, item) => {
  for (let i = heap.length - 1; i >= 0; i--) {
    if (item <= heap[i]) {
      heap.splice(i + 1, 0, item);
      return;
    }
  }

  heap.unshift(item);
};

const adjustHeap = (heap, item, k) => {
  insertToHeap(heap, item);

  if (heap.length > k) {
    heap.pop();
  }
};

const findMaxNumberSeq = (numStr, k) => {
  if (numStr.length < k) {
    throw new Error('非法K');
  }

  const maxSeqHeap = [numStr[0]];

  for (let i = 1; i < numStr.length; i++) {
    if (
      maxSeqHeap.length < k ||
      numStr[i] > maxSeqHeap[maxSeqHeap.length - 1]
    ) {
      adjustHeap(maxSeqHeap, numStr[i], k);
    }
  }

  return maxSeqHeap.join('');
};

assert.equal(findMaxNumberSeq('0', 1), '0');
assert.equal(findMaxNumberSeq('00', 2), '00');
assert.equal(findMaxNumberSeq('01', 2), '10');
assert.equal(findMaxNumberSeq('11', 2), '11');
assert.equal(findMaxNumberSeq('3189719', 2), '99');
assert.equal(findMaxNumberSeq('3889719', 2), '99');
assert.equal(findMaxNumberSeq('9032309483119', 2), '99');
assert.equal(findMaxNumberSeq('903230948311', 1), '9');
assert.equal(findMaxNumberSeq('323094311', 2), '94');
assert.equal(findMaxNumberSeq('323094311', 4), '9433');
