function create(prototype, properties) {
  function fn() {}
  fn.prototype = prototype;
  const obj = new fn();
  Object.defineProperties(obj, properties);
  return obj;
}

// test
const obj1 = { foo: 1 };
const o = create(obj1, {
  foo: { enumerable: false },
  bar: {
    enumerable: true,
    get: function () {
      return 2;
    },
  },
});
console.log(o, o.bar, Reflect.ownKeys(o), Object.keys(o));
