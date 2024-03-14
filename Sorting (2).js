//Sorting techniques in JavaScript
// 1. Bubble Sort
// 2. Selection Sort
// 3. Insertion Sort

//Example of Bubble Sort
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
        }
    }
    return arr;
    }
    const arr = [5, 3, 8, 4, 2];
    console.log(bubbleSort(arr)); // [2, 3, 4, 5, 8]
    

//Example of Selection Sort
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
        if (arr[min] > arr[j]) {
            min = j;
        }
        }
        if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
        }
    }
    return arr;
    }
    const ar = [5, 3, 8, 4, 2];
    console.log(selectionSort(arr)); // [2, 3, 4, 5, 8]

//Example of Insertion Sort
function insertionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let el = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > el; j--) {
        arr[j + 1] = arr[j];
        }
        arr[j + 1] = el;
    }
    return arr;
    }
    const a = [5, 3, 8, 4, 2];
    console.log(insertionSort(arr)); // [2, 3, 4, 5, 8]

//Example of Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
    }
    function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
        } else {
        result.push(right[j]);
        j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
    }
    const n = [5, 3, 8, 4, 2];
    console.log(mergeSort(arr)); // [2, 3, 4, 5, 8]

//Example of Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const [pivot, ...rest] = arr;
    const left = [];
    const right = [];
    rest.forEach(el => (el < pivot ? left.push(el) : right.push(el)));
    return [...quickSort(left), pivot, ...quickSort(right)];
    }
    const m = [5, 3, 8, 4, 2];
    console.log(quickSort(arr)); // [2, 3, 4, 5, 8]
    
