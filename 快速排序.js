// 法一 非原地排序
function quickSort1(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = arr[~~(arr.length / 2)];
  const left = [];
  const right = [];
  arr.forEach((num) => {
    if (num >= mid) {
      left.push(num);
    } else {
      right.push(num);
    }
  });
  return quickSort1(left).concat(quickSort1(right));
}
// console.log(quickSort1(new Array(100000).fill(0).map((_, index) => index))); // 0.172 seconds

/**
 * 快速排序写法二 原地排序
 */
function quickSort2(target) {
  const split = (arr, left, right) => {
    // 选择一个主元
    const pivot = arr[~~((left + right) / 2)];
    while (left < right) {
      while (arr[left] > pivot) {
        left++;
      }
      while (arr[right] < pivot) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    return left;
  };
  const quick = (arr, left, right) => {
    if (arr.length > 1) {
      const index = split(arr, left, right);
      if (left < index - 1) {
        quick(arr, left, index - 1);
      }
      if (index < right) {
        quick(arr, index, right);
      }
    }
  };
  quick(target, 0, target.length - 1);
  return target;
}
console.log(quickSort2(new Array(100000).fill(0).map((_, index) => index))); // 0.126 seconds
