function swap(arr, x, y) {
  const t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
}

function partition(arr, lo, hi) {
  let v = arr[lo];
  const start = lo;
  let left = lo + 1;
  let right = hi - 1;

  while (true) {
    while (arr[left] < v) {
      left++;
    }

    while (arr[right] > v) {
      right--;
    }

    if (left < right) {
      swap(arr, left, right);
    } else {
      break;
    }
  }

  swap(arr, start, right);
  return right;
}

function partition2(arr, lo, hi) {
  const v = arr[lo];
  let i = lo;
  let j = hi + 1;
  while (true) {
    while (arr[++i] <= v) {
      if (i === hi) {
        break;
      }
    }

    while (arr[--j] >= v) {
      if (j === lo) {
        break;
      }
    }

    if (i >= j) break;

    swap(arr, i, j);
    break;
  }

  swap(arr, lo, j);
  return j;
}

function sort(arr, left, right) {
  if (right <= left) return;
  const position = partition2(arr, left, right);
  console.log(position);
  console.log(arr);
  sort(arr, left, position - 1);
  sort(arr, position + 1, right);
}

function print(arr) {
  sort(arr, 0, arr.length - 1);
  console.log(arr);
}

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 2];
const arr3 = [4, 4];
const arr4 = [4, 1, 19, 4];

// print(arr1);
// print(arr2);
// print(arr3);
print(arr4);
