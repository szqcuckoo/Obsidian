> 你不知道的 JavaScript 中，this 的指向取决于函数的调用位置。调用位置就是函数在代码中被调用的位置。

## this 的绑定规则

### 1. 默认绑定
```js
function fn() {
  console.log('this.a:', this.a)
}
var a = 2
fn() // a = 2,注意：只有在 浏览器环境下才会这样
```
fn 调用的时候，调用位置是全局作用域，因此 this 默认指向 window，而 JavaScript 中 var 定义的变量，会默认挂载到 window 上面，严格模式下，全局对象将无法使用默认绑定，因此 this 会绑定到 undefined
```js
function fn() {
  "use strict"
  console.log('this.a:', this.a)
}
var a = 2
fn() // Cannot read properties of undefined (reading 'a')
```
但是只有在函数运行在非严格模式下，默认绑定才能绑定到全局对象；严格模式下与函数的调用位置无关
```js
function fn() {
  console.log('this.a:', this.a)
}
var a = 2;

(function() {
  "use strict"
  console.log('this:', this)
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
  foo:foo,
  fn: () => {
    console.log(this.a)
  }
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
  foo:foo
}
var obj1 = {
  a: 2,
  obj2: obj2
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
  foo: foo
}
var fn = obj.foo // 此处，引用的是 foo 函数本身。
var a = 'global'
fn() // 'global'
```

```js
function foo() {
  console.log(this.a)
}
var obj = {a: 2, foo: foo}
var a = "global"
setTiomeout(obj.foo, 100) // global
```

### 3. 显示绑定

