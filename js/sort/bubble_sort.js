/**
 * 冒泡排序
 * @param {array} arr 待排序的数组
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 2];
const arr3 = [4, 4];
const arr4 = [4, 1, 19, 4];
bubbleSort(arr1);
bubbleSort(arr2);
bubbleSort(arr3);
bubbleSort(arr4);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
