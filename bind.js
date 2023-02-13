const isObject = (val) => val !== null && typeof val === "object";
Function.prototype.bind = function (context, ...args) {
  if (!isObject(context)) {
    context = typeof window !== "undefined" ? window : globalThis;
  }
  const _this = this;
  context.fn = _this;
  const newFunc = function (...newArgs) {
    // 作为构造函数时不改变this指向
    const rest = [...args, ...newArgs];
    if (this instanceof _this) {
      this.fn = _this;
      this.fn(...rest);
      this.fn = undefined;
    } else {
      const res = context.fn(...rest);
      context.fn = undefined;
      return res;
    }
  };
  newFunc.prototype = Object.create(_this.prototype);
  return newFunc;
};

// test
const obj1 = {
  num: 1,
};
const obj2 = {
  num: 2,
};

function fn() {
  this.num = 1;
  console.log(this, this.num);
}

fn.bind(obj1)();
fn.bind(obj2)();
const f = fn.bind(obj1);
new f();
