## 1. js有哪些数据类型，他们的区别？

共有 8 种，分别是 undefined，null，object，number，symbol，bigInt，string，boolean，function

ES6新增的数据类型：
+ Symbol 代表创建后独一无二且不可变的数据类型
+ BigInt 可以表示任意精度格式的整数，可以安全的存储和操作大数，即使这个数超过 number 能表示的安全整数范围（最大的安全整数 (`2^53 - 1`)

可以分为简单数据类型和引用数据类型：
+ 栈：简单数据类型（undefined，null，Boolean，number，string）
+ 堆：引用数据类型（object，array，function）

两种数据类型的区别为存储位置的不同：
+ 简单数据类型，存储在栈中，占据空间小、大小固定，属于被频繁使用的数据，所以放入栈内存中
+ 引用数据类型：存储在堆中，占据空间大，大小不固定，如果储存在栈内存中会影响程序运行的的性能，因此引用数据类型在栈中存储了指针，该指针指向堆中的地址

堆和栈在数据结构中的区分：
+ 栈中的数据的存取方式是先进后出
+ 堆是一个优先队列，按照优先级来排序的，优先级可以按照大小来规定

在操作系统中的区别：
+ 栈内存由编译器自动分配释放，存放函数的参数值，局部变量的值等，操作方式类似于数据结构中的栈
+ 堆内存一般由开发者分配释放，如果开发者不释放，程序结束时，可能由垃圾回收机制回收

## 2. 数据类型的检测方式
### 1. typeof

```js
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
console.log(typeof Symbol("symbol")) // symbol
console.log(typeof BigInt(33))       // bigint
```
**其中数组、对象、null都会被判断成 object**

### 2. instanceof

instanceof 可以正确判断对象的类型，其内部的运行机制是判断其在原型链中能否找到该类型的原型

```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
 
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```

`instanceof`**只能正确判断引用数据类型**，而不能判断基本数据类型。`instanceof` 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

### 3. constructor

```js
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```

`constructor`有两个作用，一是判断数据的类型，二是对象实例通过 `constrcutor` 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，`constructor`就不能用来判断数据类型了：
```js
function Fn(){};
 
Fn.prototype = new Array();
 
var f = new Fn();
 
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true
```

### 4. Object.prototype.toString.call()

使用 Object 对象的原型方法 toString 来判断数据类型

```js
var a = Object.prototype.toString;
 
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？

这是因为toString是Object的原型方法，而Array、function等**类型作为Object的实例，都重写了toString方法**。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object原型上的toString方法。

## 3. 判断数组的方式有哪些

1. 通过 `Object.prototype.toString.call()` 判断
`Object.prototype.toString.call(obj).slice(8,-1) === 'Array';`
2. 通过原型链判断`obj.__proto__ === Array.prototype`
3. 通过ES6的`Array.isArray(obj)`
4. 通过instanceof `obj instanceof Array`
5. 通过 `Array.prototype.isPrototypeOf(obj)`

## 4. null 和 undefined 的区别


