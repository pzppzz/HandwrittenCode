const isObject = (val) => val !== null && typeof val === "object";
Function.prototype.apply = function (context, args) {
  if (!isObject(context)) {
    context = typeof window !== "undefined" ? window : globalThis;
  }
  context.fn = this;
  const res = context.fn(...args);
  context.fn = undefined;
  return res;
};

function fn(...nums) {
  console.log(this, nums);
}

fn.apply(null, [1, 2, 3]);
