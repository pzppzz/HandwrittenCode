function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.setName = function (name) {
  this.name = name;
};

/**
 * 原型链继承
 * 父类引用类型的值会共享
 * 无法给父类构造函数传参
 */
// function Man() {
//   this.gender = 1;
// }
// Man.prototype = new Person();
// const man = new Man();
// man.setName("张三");
// console.log(man, man.getName());

/**
 * 盗用构造函数
 * 不能继承父类原型的属性和方法，必须在构造函数里定义，方法无法共享
 * 影响instanceof方法判断
 */
// function Man(name, age) {
//   Person.call(this, name, age);
//   this.gender = 1;
// }

// const man = new Man("张三", 20);
// console.log(man);

/**
 * 组合继承
 * 通过原型链继承原型上的属性和方法 通过盗用构造函数继承实例属性
 * 父类构造函数会被调用两次 父类的属性存在于实例以及实例原型上 存在效率问题
 */
// function Man(name, age) {
//   Person.call(this, name, age);
//   this.gender = 1;
// }
// Man.prototype = new Person();
// const man = new Man("张三", 20);
// console.log(man, man.getName());

/**
 * 原型式继承 见Object.create方法
 */

/**
 * 寄生式组合继承
 * 通过盗用构造函数继承实例属性 通过原型式继承原型属性
 */

function Man(name, age) {
  Person.call(this, name, age);
  this.gender = 1;
}

function inheritPrototype(child, parent) {
  const obj = Object.create(parent.prototype);
  obj.constructor = child;
  child.prototype = obj;
}

// babel编译es6 extends继承就是使用的寄生组合式继承
// 下面是部分代码 和上面差不多，只不过更严谨点
// 感兴趣可以去试试 https://www.babeljs.cn/repl 浏览器版本需要设置低一点
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// inheritPrototype(Man, Person);
_inherits(Man, Person);
const man = new Man("张三", 20);
console.log(man, man.getName());
