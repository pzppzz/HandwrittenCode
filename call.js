Function.prototype.call = function (context, ...args) {
  if (typeof context !== "object") {
    context = typeof window !== "undefined" ? window : globalThis;
  }
  context.fn = this;
  const res = context.fn(...args);
  context.fn = undefined;
  return res;
};
// test
function foo(num) {
  return num;
}
const obj = { name: "obj" };

console.log(foo(0), foo.call(undefined, 2), foo.call(obj, 3));
