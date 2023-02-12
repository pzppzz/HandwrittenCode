// 简易深拷贝
function deepClone(obj, map = new Map()) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (typeof obj[key] === "object") {
      if (map.has(val)) {
        newObj[key] = map.get(val);
      } else {
        map.set(val, val);
        newObj[key] = deepClone(val, map);
      }
    } else {
      newObj[key] = val;
    }
  });
  return newObj;
}
const a = { a: 1 };
const b = { b: 2 };
a.b = b;
b.a = a;
console.log(deepClone(a));
