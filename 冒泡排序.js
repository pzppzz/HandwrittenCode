/**
 * 冒泡排序 原地排序
 * 时间复杂度 O(n2)
 * 空间复杂度 O(1)
 * 稳定性 稳定
 */
function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    // 一轮排好一个数，可以不用重复排已经排好的
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(new Array(100000).fill(0).map((_, index) => index))); // 9.544 seconds
