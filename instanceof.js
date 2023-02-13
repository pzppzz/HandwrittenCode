const isObject = (val) =>
  val !== null && (typeof val === "function" || typeof val === "object");
/**
 * 判断原理 判断一个对象的原型链上是否存在另一个对象的原型
 */
function instanceOf(left, right) {
  if (!isObject(right)) {
    throw new TypeError("right must be a function or object");
  }
  if (!isObject(left)) {
    return false;
  }
  let proto = Object.getPrototypeOf(left);
  const prototype = right.prototype;
  while (proto !== null) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

// test
console.log(Array instanceof Object);
console.log(instanceOf(Array, Object));
console.log(instanceOf(1, Number));
console.log(instanceOf(true, false));
