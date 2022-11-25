const getHome = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("home数据")
    }, 1000)
  })
const getList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("list数据")
    }, 1000)
  })
const getSide = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("side数据")
    }, 1000)
  })

const all = Promise.allSettled([getHome(), getList(), getSide()])

all
  .then(res => {
    console.log("sucess", res)
  })
  .catch(err => {
    console.log("err:", err)
  })
