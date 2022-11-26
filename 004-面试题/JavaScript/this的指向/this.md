> 你不知道的 JavaScript 中，this 的指向取决于函数的调用位置。调用位置就是函数在代码中被调用的位置。

## this 的绑定规则

### 1. 默认绑定

```js
function fn() {
  console.log("this.a:", this.a)
}
var a = 2
fn() // a = 2,注意：只有在 浏览器环境下才会这样
```

fn 调用的时候，调用位置是全局作用域，因此 this 默认指向 window，而 JavaScript 中 var 定义的变量，会默认挂载到 window 上面，严格模式下，全局对象将无法使用默认绑定，因此 this 会绑定到 undefined

```js
function fn() {
  "use strict"
  console.log("this.a:", this.a)
}
var a = 2
fn() // Cannot read properties of undefined (reading 'a')
```

但是只有在函数运行在非严格模式下，默认绑定才能绑定到全局对象；严格模式下与函数的调用位置无关

```js
function fn() {
  console.log("this.a:", this.a)
}
var a = 2

;(function () {
  "use strict"
  console.log("this:", this)
  fn() // 2
})()
```

### 2. 隐式绑定

```js
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo,
  fn: () => {
    console.log(this.a)
  },
}
foo() // undefined
obj.foo() // 2
obj.fn()
```

当函数引用有上下文对象的时候，隐式绑定会把函数调用中的 this 绑定到这个上下文对象。
对象属性引用链中只有最顶层或者说最后一层会影响调用位置。

```js
function foo() {
  console.log(this.a)
}

var obj2 = {
  a: 42,
  foo: foo,
}
var obj1 = {
  a: 2,
  obj2: obj2,
}
obj1.obj2.foo() // 42
```

#### 隐式丢失

```js
function foo() {
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo,
}
var fn = obj.foo // 此处，引用的是 foo 函数本身。
var a = "global"
fn() // 'global'
```

```js
function foo() {
  console.log(this.a)
}
var obj = { a: 2, foo: foo }
var a = "global"
setTiomeout(obj.foo, 100) // global
```

### 3. 显示绑定

通过 JavaScript 提供的方法来直接修改 this 的指向，称为显示绑定。

#### 硬绑定

```js
function foo() {
  console.log(this.a)
}
var obj = { a: 2 }
var bar = function () {
  foo.call(obj)
}
bar() // 2
setTimeout(bar, 100) // 2

// 硬绑定的 bar 不可能再修改他的 this
bar.call(window) // 2
```

无论之后如何调用函数 bar， 它
总会手动在 obj 上调用 foo。 这种绑定是一种显式的强制绑定， 因此我们称之为**硬绑定**。

所以 ES5 中内置了硬绑定的方法 Function.prototype.bind()

```js
function foo(something) {
  console.log(this.a, something)
  return this.a + something
}
var obj = { a: 2 }
var bar = foo.bind(obj)
var b = bar(3) // this.a -> 2, something -> 3
console.log(b) //5
```

### 4. new 绑定

#### new 操作符做了哪些事情？

1. 创建一个新对象
2. 执行原型连接
3. 新对象绑定到函数调用的 this
4. 如果函数没有返回其他对象，自动返回这个新对象

## 优先级

默认绑定优先级最低

显示绑定优先级比隐式绑定的优先级高

new 操作符绑定比隐式绑定优先级高

new 和硬绑定的优先级，new 的高，因为 JavaScript 会判断硬绑定函数是否被 new 调用，是的话就会使用新创建的 this 替换硬绑定的 this

**判断 this**

1. 是否有 new，是的话 this 指向新创建的对象 `var bar = new foo()`\
2. 是否通过 call、apply 或者硬绑定调用，是的话，this 指向绑定的对象 `var bar = foo.call(obj2)`
3. 函数是否再某个上下文对象中调用（隐式绑定），是的话，指向上下文对象 `var bar = obj1.foo()`
4. 都不是的话，使用默认绑定。严格模式下，绑定到 undefined，或者全局对象 `var bar = foo()`

## 绑定例外

> 在某些场景下 this 的绑定行为会出乎意料

### 被忽略的 this

1. 把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，会被忽略，实际是默认绑定

```js
function foo() {
  console.log(this.a)
}
var a = 2
foo.call(null) // 2
```

**什么情况下会传入 null**
使用 apply 来“展开”数组，并且当作参数传入一个函数。

```js
function foo(a, b) {
  console.log(`a:${a},b:${b}`)
}
foo.apply(null, [2, 3]) // a:2, b:3

var bar = foo.bind(null, 2)
bar(3) // a:2, b:3
```

### 间接引用

```js
function foo() {
  console.log(this.a)
}
var a = 2
var o = { a: 3, foo: foo }
var p = { a: 4 }

o.foo()(
  // 3
  (p.foo = o.foo)
)() // 2
```

赋值表达式 p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是 foo，而不是 p.foo 或则 o.foo

软绑定（softBind）
指定的函数进行封装， 首先检查调用时的 this， 如果 this 绑定到全局对象或者 undefined， 那就把
指定的默认对象 obj 绑定到 this， 否则不会修改 this。

## this 词法（箭头函数）

```js
function foo() {
  return a => {
    // this继承 foo()
    console.log(this.a)
  }
}
var obj1 = { a: 2 }
var obj2 = { a: 3 }
var bar = foo.call(obj1)
bar.call(obj2) // 2 因为 foo返回一个箭头函数，箭头函数的 this 指向外层作用域的 this，并且箭头函数无法修改 this 指向
```
箭头函数常用于回调函数中，例如事件处理器或者定时器
```js
function foo() {
  setTimeout(() => {
    // 此处的 this 继承自 foo()
    // 如果是普通函数的话，这里的 this 是 window
    // 如果想要获取到 this 的话，可以在定时器前面定义 self = this
    console.log(this.a)
  }, 100)
}
var obj = {a: 2}
foo.call(obj) // 2
```

## 面试题，小刀牛试
```js
var name = 'window'
var person = {
  name: 'person',
  sayName: function() {
    console.log(this.name)
  },
}
function sayName() {
  var sss = person.sayName
  sss() // window
  person.sayName()  // person
  (person.sayName)() // person
  ;(b = person.sayName)() // window，上文中说的间接函数引用，这里相当于就是一个单独的函数调用
}

sayName()
```

```js
var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function() {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function() {
    return function() {
      console.log(this.name)
    }
  },
  foo4: function() {
    return () => {
      console.log(this.name)
    }
  },
}

var person2 = { name: 'person2' }

person1.foo1() // person1，隐式绑定
person1.foo1.call(person2) // person2  显式绑定优先级大于隐式绑定，所以是 person2

person1.foo2() // window 箭头函数不绑定 this，因此继承 person1 的上层作用域就是全局作用域
person1.foo2.call(person2) // window 虽然绑定了 foo2 的 this 给了 person2，但是还是继承了 person2 上层的作用域，也就是全局

person1.foo3()() // window 默认绑定，因为 person1.foo() 返回一个函数，接着就单独调用此函数，所以是 window
person1.foo3.call(person2)() // 还是 window，这个和上面的一样
person1.foo3().call(person2) // person2，这里把返回的函数显式绑定了 this 给 person2

person1.foo4()() // person1，箭头函数不绑定 this，因此继承 foo4 的 this
person1.foo4.call(person2)() // person2，这里把 foo4 的 this 显式绑定给了 person2，因此是 person2
person1.foo4().call(person2) // person1，同是箭头函数不绑定 this
```

```js
var name = 'window'

function Person(name) {
  this.name = name
  this.foo1 = function() {
    console.log(this.name)
  }
  this.foo2 = () => console.log(this.name)
  this.foo3 = function() {
    return function() {
      console.log(this.name)
    }
  }
  this.foo4 = function() {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() // person1（隐式绑定）
person1.foo1.call(person2) // person2（显式绑定高于隐式绑定）

person1.foo2() // person1 这里需要说一嘴，虽然 foo2 是一个箭头函数，但是在声明函数的时候使用的是 this.xx 所以上层作用域就找到了 this，也就是实例对象 person1
person1.foo2.call(person2) // person1 箭头函数不绑定 this，继承于 this.foo2 的作用域，即this

person1.foo3()() // window，这里还是 person1.foo3() 返回一个函数，然后紧接着单独调用这个函数，适用于默认绑定
person1.foo3.call(person2)() // window，和上一个一样
person1.foo3().call(person2) // person2，这里是将返回的函数的 this 显式绑定给了 person2

person1.foo4()() // person1，箭头函数不绑定 this，继承上层，也就是 this
person1.foo4.call(person2)() // person2，这里是将 foo4 的作用域绑定给了 person2
person1.foo4().call(person2) // person1，箭头函数不绑定 this，虽然显式绑定了，但是还是继承的是 person1.foo4 的this
```

```js
var name = 'window'

function Person(name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function() {
      return function() {
        console.log(this.name)
      }
    },
    foo2: function() {
      return () => {
        console.log(this.name)
      }
    },
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // window，foo1 函数返回一个函数，紧接着独立调用此函数
person1.obj.foo1.call(person2)() // window，还是独立调用此函数
person1.obj.foo1().call(person2) // person2，这里将返回的函数内部的 this 显式绑定给了 person2

person1.obj.foo2()() // obj，箭头函数不绑定 this，将继承 foo2 的 this 也就是 obj
person1.obj.foo2.call(person2)() // person2，这里将 foo2 的 this 显式绑定给了 person2
person1.obj.foo2().call(person2) // obj，同箭头函数不绑定 this，将继承 foo2 也就是 obj
```