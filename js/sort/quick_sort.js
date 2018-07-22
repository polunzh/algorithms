function swap (arr, x, y) {
    const t = arr[x];
    arr[x] = arr[y];
    arr[y] = t;
}

function partition(arr, lo, hi) {
    let v = arr[lo];
    const start = lo;
    let left = lo + 1;
    let right = hi - 1;

    while(true) {
        while(arr[left] < v) {
            left++;
        }

        while(arr[right] > v) {
            right--;
        }

        if(left < right) {
            swap(arr, left, right);
        } else {
            break;
        }

    }

    swap(arr, start, right);
    return right;
}

function sort(arr, left, right) {
    while(left < right) {
        const position = partition(arr, left, right);
        sort(arr, left, position - 1);
        sort(arr, position + 1, right);
    }
}

function print(arr) {
    partition(arr, 0, arr.length);
    console.log(arr);
}

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 2];
const arr3 = [4, 4];
const arr4 = [4, 1, 19];

print(arr1);
print(arr2);
print(arr3);
print(arr4);
