const array = [10, 20, 15, 30, 40];

class MaxHeap {
  private _heap = [null];

  get heap() {
    return this.heap;
  }

  insert(element) {
    this.heap.push(element);
    if (this.heap.length > 2) {
      let index = this.heap.length - 1;
      let parentIndex = Math.floor(index / 2);
      while (this.heap[index] > this.heap[parentIndex]) {
        if (index > 1) {
          [this.heap[index], this.heap[parentIndex]] = [
            this.heap[parentIndex],
            this.heap[index],
          ];
          index = parentIndex;
          parentIndex = Math.floor(index / 2);
        } else {
          break;
        }
      }
    }
  }

  remove() {
    const lastIndex = this.heap.length - 1;
    this.heap[1] = this.heap[lastIndex];
    this.heap.pop();

    let currentIndex = 1;
    let leftChildIndex, rightChildIndex, potentialParentIndex;

    while (currentIndex < lastIndex) {
      leftChildIndex = 2 * currentIndex;
      rightChildIndex = 2 * currentIndex + 1;

      const leftChild = this.heap[leftChildIndex];
      const rightChild = this.heap[rightChildIndex];

      potentialParentIndex =
        rightChild === undefined || leftChild >= rightChild
          ? leftChildIndex
          : rightChildIndex;

      if (this.heap[potentialParentIndex] === undefined) {
        break;
      }

      if (this.heap[currentIndex] > this.heap[potentialParentIndex]) {
        break;
      }

      // Swap the elements
      [this.heap[currentIndex], this.heap[potentialParentIndex]] = [
        this.heap[potentialParentIndex],
        this.heap[currentIndex],
      ];

      currentIndex = potentialParentIndex;
    }
  }

  createHeapFromArray(array: number[]) {
    array.unshift(null);
    for (let i = array.length - 1; i > 0; i--) {
      array = this.heapify(array, i);
    }
    return (this._heap = array);
  }

  private heapify(array, index) {
    let leftIndex, rightIndex, leftChild, rightChild;
    leftIndex = 2 * index;
    rightIndex = 2 * index + 1;
    leftChild = array[leftIndex];
    rightChild = array[rightIndex];
    const currentParent = array[index];
    if (leftChild === undefined && rightChild === undefined) return array;
    let potentialParentIndex =
      rightChild === undefined || leftChild > rightChild
        ? leftIndex
        : rightIndex;
    let potentialParent = array[potentialParentIndex];
    if (potentialParent < currentParent) return array;
    [array[potentialParentIndex], array[index]] = [
      array[index],
      array[potentialParentIndex],
    ];
    array = this.heapify(array, potentialParentIndex);
    return array;
  }
}

class MinHeap {
  private _heap: number[];
  constructor(array: number[]) {
    this._heap = this.createHeapFromArray(array);
  }

  get heap() {
    return this._heap;
  }

  createHeapFromArray(array: number[]) {
    array.unshift(null);
    for (let i = array.length - 1; i > 0; i--) {
      array = this.heapify(array, i);
    }
    return (this._heap = array);
  }

  private heapify(array, index): number[] {
    let currentParent, leftIndex, rightIndex, leftChild, rightChild;
    leftIndex = 2 * index;
    rightIndex = 2 * index + 1;
    leftChild = array[leftIndex];
    rightChild = array[rightIndex];
    currentParent = array[index];
    if (leftChild === undefined && rightChild === undefined) return array;
    let potentialParentIndex =
      rightChild === undefined || leftChild < rightChild
        ? leftIndex
        : rightIndex;
    let potentialParent = array[potentialParentIndex];
    if (potentialParent > currentParent) return array;
    [array[potentialParentIndex], array[index]] = [
      array[index],
      array[potentialParentIndex],
    ];
    array = this.heapify(array, potentialParentIndex);
    return array;
  }

  insert(element: number) {
    const array = this.heap;
    array.push(element);
    let currentIndex, parentIndex;
    currentIndex = array.length - 1;
    parentIndex = Math.floor(currentIndex / 2);
    while (array[currentIndex] < array[parentIndex]) {
      [array[currentIndex], array[parentIndex]] = [
        array[parentIndex],
        array[currentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  remove() {
    const heap = this.heap;
    let lastIndex = heap.length - 1;
    const removed = heap[1];
    heap[1] = heap[lastIndex];
    heap.pop();

    let currentIndex,
      leftIndex,
      rightIndex,
      leftChild,
      rightChild,
      potentialParentIndex,
      currentParent;

    currentIndex = 1;
    while (true) {
      leftIndex = 2 * currentIndex;
      rightIndex = 2 * currentIndex + 1;
      leftChild = heap[leftIndex];
      rightChild = heap[rightIndex];
      currentParent = heap[currentIndex];
      if (leftChild === undefined && rightChild === undefined) break;
      potentialParentIndex =
        rightChild === undefined || leftChild < rightChild
          ? leftIndex
          : rightIndex;
      if (heap[potentialParentIndex] > currentParent) break;
      [heap[potentialParentIndex], heap[currentIndex]] = [
        heap[currentIndex],
        heap[potentialParentIndex],
      ];
      currentIndex = potentialParentIndex;
    }

    return removed;
  }
}
