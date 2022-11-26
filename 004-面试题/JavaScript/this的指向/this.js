// function baz() {
//   // baz 函数在全局作用域调用的，因此调用位置是全局作用域
//   console.log('baz:' )
//   bar()  
// }

// function bar() {
//   // bar 是在 baz 函数内调用的，因此，调用位置是 baz
//   console.log('bar:' )
//   foo()
// }

// function foo() {
//   // foo 是在 bar 中调用的，因此，调用位置是 bar
//   console.log('foo')
// }

// baz()

// function fn() {
//   console.log('this.a:', this.a)
// }
// var a = 2;

// (function() {
//   "use strict"
//   console.log('this:', this)
//   fn()
// })()

// 隐式绑定

// function foo() {
//   console.log(this.a)
// }

// var obj = {
//   a: 2,
//   foo:foo
// }

// foo() // undefined
// obj.foo() // 2

// function foo() {
//   console.log(this.a)
// }

// var obj2 = {
//   a: 42,
//   foo:foo
// }
// var obj1 = {
//   a: 2,
//   obj2: obj2
// }
// obj1.obj2.foo() // 42

// function foo() {
//   console.log(this.a)
// }

// var obj = {
//   a: 2,
//   foo: foo
// }

// var fn = obj.foo
// var a = 'global'
// fn() // 'global'

obj = {
  func() {
    const arrowFunc = () => {
      console.log(this._name)
    }

    return arrowFunc
  },

  _name: "obj",
}

obj.func()()  // obj

func = obj.func  
func()()  // undefined

obj.func.bind({ _name: "newObj" })()() // newObj

obj.func.bind()()() // undefined

obj.func.bind({ _name: "bindObj" }).apply({ _name: "applyObj" })() // bindObj