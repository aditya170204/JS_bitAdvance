// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('async task is complete')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("promise consumed")
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("task executed")
//         resolve()
//     }, 2000)
// }).then(function () {
//     console.log("task successfull")
// })

// const pm = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("you,win!")
//         resolve()
//     }, 3000)
// })
// pm.then(function () {
//     console.log("playAgain")
//     console.log("send")
//     console.log("node ./bitAdvance/promises.js")
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("yes,it's running")
//         resolve()
//     }, 1000)

// }).then(function () {
//     console.log("executed again")
// })



const pt = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("done or what?")
        resolve({ username: "aditya17", email: "adityaraj17feb@gmail.com" })
    }, 1000)
})
pt.then(function (user) {
    console.log(user)
})

