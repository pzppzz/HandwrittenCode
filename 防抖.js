// 防抖函数
function debounce(func, delay = 200) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  };
}
