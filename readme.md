# getdsa

A comprehensive npm package providing commonly used searching algorithms, sorting algorithms, and basic data structures for JavaScript.

## Installation
`npm install getdsa`

# Usage

### Searching Algorithms

#### 1. Linear Search
```import { linearSearch } from 'getdsa';
const array = [1, 2, 3, 4, 5];
const target = 3;
const result = linearSearch(array, target);

console.log(result); // Index of the target: 2
```
#### 2. Binary Search
```import { BinarySearch } from 'getdsa';

const sortedArray = [1, 2, 3, 4, 5];
const target = 3;
const result = binarySearch(sortedArray, target);

console.log(result); // Index of the target: 2
```

### Sorting Algorithms
#### 1. Selection Sort
```import { SelectionSort } from 'getdsa';

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);

console.log(sortedArray); // Sorted array: [11, 12, 22, 25, 64]
```
#### 2. Insertion Sort
```
import { InsertionSort } from 'getdsa';

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);

console.log(sortedArray); // Sorted array: [11, 12, 22, 25, 64]
```
#### 3. Bubble Sort
```import { BubbleSort } from 'getdsa';

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray); // Sorted array: [11, 12, 22, 25, 64]
```
#### 4. Merge Sort
```import { MergeSort } from 'getdsa';

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = mergeSort(unsortedArray);

console.log(sortedArray); // Sorted array: [11, 12, 22, 25, 64]
```
#### 5. Quick Sort
```import { QuickSort } from 'getdsa';

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = quickSort(unsortedArray);

console.log(sortedArray); // Sorted array: [11, 12, 22, 25, 64]
```
### Data Structures
#### 1. Stack
```import { Stack } from 'getdsa';

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
```
#### 2. Queue
```import { Queue } from 'getdsa';

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
```
#### 3. Linked List
```import { LinkedList } from 'getdsa';

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList.toArray()); // [1, 2, 3]
```

##### Contributing
If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.



