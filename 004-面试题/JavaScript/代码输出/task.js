// 1
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(2);
// });
// promise.then(() => {
//   console.log(3);
// });
// console.log(4);

// 1 2 4
// 先执行同步代码， 1 2 4，promise.then是微任务，但是这里没有使用 resolve（因为状态没有变化） 因此不执行

// 2
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('1', promise1);
console.log('2', promise2);

// promise1  Promise{<resolved>: resolve1}  2,promise{pending}  resolve1
// 同步代码  promise1  Promise{<resolved>: resolve1}  2,promise{pending} promise1的状态发生了变化，promise2的状态没有变化

//#region 
// ---
// process.nextTick(function() {
//   console.log(111)
//   process.nextTick(function() {
//     console.log(222)
//   })
// })

// setImmediate(function () {
//   console.log(333)
// })

// -> 111 222 333
//#endregion