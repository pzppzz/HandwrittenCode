function mySetInterval(cb, delay = 4) {
  if (delay < 4) {
    delay = 4;
  }
  let timer;
  let isYeild = false;
  function interval() {
    if (timer) {
      clearTimeout(timer);
    }
    if (isYeild) {
      return;
    }
    timer = setTimeout(() => {
      cb();
      interval();
    }, delay);
  }
  interval();
  return {
    cancle: () => {
      isYeild = true;
      clearTimeout(timer);
      timer = null;
    },
  };
}

// test
let count = 0;
let timer = mySetInterval(() => {
  console.log(count++);
  if (count === 6) {
    timer.cancle();
  }
}, 1000);
