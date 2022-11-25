// fetch(url, sosuccess, onfailed)

// Promise.all([
//   new Promise((resolve, reject) => {
//     fetch(
//       url1,
//       res => {
//         console.log("res:", res)
//       },
//       err => {
//         console.log("err:", err)
//       }
//     )
//   }),
//   new Promise((resolve, reject) => {
//     fetch(
//       url2,
//       res => {
//         console.log("res:", res)
//       },
//       err => {
//         console.log("err:", err)
//       }
//     )
//   }),
// ]).then(function(res){
//   console.log('load success:')
// }, function(err) {

// })

const p1 = new Promise((resolve, reject) => {
  resolve(1)
})
const p2 = new Promise((resolve, reject) => {
  resolve(2)
})
const p3 = new Promise((resolve, reject) => {
  reject("err1")
  // resolve(3)
})
const p4 = new Promise((resolve, reject) => {
  reject("err2")
})

const pAll = Promise.all([p1, p2, p3, p4])

pAll
  .then(res => {
    console.log("load success", res)
  })
  .catch(err => {
    console.log("err:", err)
  })
  .finally(res => {
    console.log("res:", res)
  })
