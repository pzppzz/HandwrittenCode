const isObject = (val) => val !== null && typeof val === "object";
Function.prototype.call = function (context, ...args) {
  if (!isObject(context)) {
    context = typeof window !== "undefined" ? window : globalThis;
  }
  context.fn = this;
  const res = context.fn(...args);
  context.fn = undefined;
  return res;
};
// test
function foo(num) {
  console.log(this);
  return num;
}
const obj = { name: "obj" };

console.log(foo(0), foo.call(undefined, 2), foo.call(obj, 3));
