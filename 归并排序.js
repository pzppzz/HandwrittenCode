/**
 * 归并排序 非原地排序
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 * 稳定性 稳定
 */
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const res = [];
  const mid = ~~(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));
  const leftLen = leftArr.length;
  const rightLen = rightArr.length;
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftLen && rightIndex < rightLen) {
    res.push(
      leftArr[leftIndex] > rightArr[rightIndex] ? leftArr[leftIndex++] : rightArr[rightIndex++]
    );
  }
  return res.concat(leftIndex < leftLen ? leftArr : rightArr);
}
console.log(mergeSort(new Array(100000).fill(0).map((_, index) => index))); // 0.168 seconds
