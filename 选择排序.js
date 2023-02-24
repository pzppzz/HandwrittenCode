/**
 * 选择排序 原地排序
 * 时间复杂度 O(n2) 但比其他同级时间复杂度的排序算法快
 * 空间复杂度 O(1)
 * 稳定性 不稳定
 */
function selectSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let max = arr[i];
    let maxIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
  }
  return arr;
}
console.log(selectSort(new Array(100000).fill(0).map((_, index) => index))); // 2.866 seconds
