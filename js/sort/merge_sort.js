/**
 *
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 */
const merge = (arr1, arr2) => {
  const arr = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] <= arr2[index2]) {
      arr.push(arr1[index1++]);
    } else {
      arr.push(arr2[index2++]);
    }
  }

  if (arr1.length > index1) {
    arr.push(...arr1.slice(index1));
  }

  if (arr2.length > index2) {
    arr.push(...arr2.slice(index2));
  }

  return arr;
};

console.log(merge([1, 2], [3, 4]));
console.log(merge([2, 9], [3, 4]));
