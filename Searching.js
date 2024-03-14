//Searching techniques in javascript
// 1. Linear Search
// 2. Binary Search
// 3. Jump Search
// 4. Interpolation Search
// 5. Exponential Search
// 6. Fibonacci Search
// 7. Ternary Search

//Example of Linear Search
function linearSearch(arr, x) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}
const arr = [5, 3, 8, 4, 2];
console.log(linearSearch(arr, 4)); // 3

//Example of Binary Search
function binarySearch(arr, x) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
const ar = [2, 3, 4, 5, 8];
console.log(binarySearch(arr, 5)); // 3

//Example of Jump Search
function jumpSearch(arr, x, n) {
    let step = Math.sqrt(n);
    let prev = 0;
    while (arr[Math.min(step, n) - 1] < x) {
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n) {
            return -1;
        }
    }
    while (arr[prev] < x) {
        prev++;
        if (prev === Math.min(step, n)) {
        return -1;
        }
    }
    if (arr[prev] === x) {
        return prev;
    }
    return -1;
}
const a = [2, 3, 4, 5, 8];
console.log(jumpSearch(arr, 4, arr.length)); // 3

//Example of Interpolation Search
function interpolationSearch(arr, x) {
    let lo = 0, hi = (arr.length - 1);
    while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
        if (lo === hi) {
            if (arr[lo] === x) return lo;
            return -1;
        }
        let pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));
        if (arr[pos] === x) {
            return pos;
        }
        if (arr[pos] < x) {
            lo = pos + 1;
        } else {
            hi = pos - 1;
        }
    }
    return -1;
}
const b = [2, 3, 4, 5, 8];
console.log(interpolationSearch(arr, 4)); // 2

//Example of Exponential Search
function exponentialSearch(arr, x) {
    if (arr[0] === x) {
        return 0;
    }
    let i = 1;
    while (i < arr.length && arr[i] <= x) {
        i = i * 2;
    }
    return binarySearch(arr, x, i / 2, Math.min(i, arr.length));
}
const c = [2, 3, 4, 5, 8];
console.log(exponentialSearch(arr, 4)); // 2

//Example of Fibonacci Search
function fibonacciSearch(arr, x, n) {
    let fibMMm2 = 0;
    let fibMMm1 = 1;
    let fibM = fibMMm2 + fibMMm1;
    while (fibM < n) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }
    let offset = -1;
    while (fibM > 1) {
        let i = Math.min(offset + fibMMm2, n - 1);
        if (arr[i] < x) {
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > x) {
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            return i;
        }
    }
    if (fibMMm1 && arr[offset + 1] === x) {
        return offset + 1;
    }
    return -1;
}
const d = [2, 3, 4, 5, 8];
console.log(fibonacciSearch(arr, 4, arr.length)); // 2

//Example of Ternary Search
function ternarySearch(l, r, key, ar) {
    if (r >= l) {
        let mid1 = l + Math.floor((r - l) / 3);
        let mid2 = r - Math.floor((r - l) / 3);
        if (ar[mid1] === key) {
            return mid1;
        }
        if (ar[mid2] === key) {
            return mid2;
        }
        if (key < ar[mid1]) {
            return ternarySearch(l, mid1 - 1, key, ar);
        } else if (key > ar[mid2]) {
            return ternarySearch(mid2 + 1, r, key, ar);
        } else {
            return ternarySearch(mid1 + 1, mid2 - 1, key, ar);
        }
    }
    return -1;
}
const e = [2, 3, 4, 5, 8];
console.log(ternarySearch(0, arr.length, 4, arr)); // 2

