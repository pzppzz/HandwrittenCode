/**
 * 函数使用
 * compose(a,b,c)(...args) => a(b(c(...args)))
 */
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduceRight(
    (pre, cur) =>
      (...args) =>
        cur(pre(...args))
  );
}

// test
function f1(num) {
  return num + 1;
}

function f2(num) {
  return num + 2;
}

function f3(num) {
  return num + 3;
}
console.log(compose(f1, f2, f3)(0));
