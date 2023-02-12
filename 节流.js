// 节流
function throttle1(func, delay = 200) {
  let timer = null;
  return function (...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      func(...args);
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
}
function throttle2(func, delay = 200) {
  let preTime = Date.now();
  return function (...args) {
    if (Date.now() - preTime >= delay) {
      preTime = Date.now();
      func(...args);
    }
  };
}

// test
let count = 0;
const fn = throttle2(() => {
  console.log(count);
});
let timer = setInterval(() => {
  fn();
  count++;
  if (count === 6) {
    clearInterval(timer);
  }
}, 100);
