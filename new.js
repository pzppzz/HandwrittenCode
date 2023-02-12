function myNew(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw new TypeError("constructor must be a function");
  }
  if (!constructor.prototype) {
    throw new SyntaxError("constructor must not be a arrrow function");
  }
  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);
  const isObject = typeof res === "function" || typeof res === "object";
  return isObject ? res : obj;
}

// test
function Person(name, age) {
  this.name = name;
  this.age = age;
  // return { name: "李四", age: 13 };
  // return function () {};
}
const p = myNew(Person, "张三", 12);
console.log(p);
// myNew(() => {});
