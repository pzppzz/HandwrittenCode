/**
 * 插入排序 原地排序
 * 时间复杂度 O(n2)
 * 空间复杂度 O(1)
 * 稳定性 稳定
 */
function insertSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}
console.log(insertSort(new Array(100000).fill(0).map((_, index) => index))); // 9.663 seconds
