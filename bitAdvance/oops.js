

// ++++++++++++++++++++++++++++++++++++++ CONSTRUCTOR +++++++++++++++++++++++++++++++++++++

// function User(username, loginCount, isLoggedIn) {
//     this.username = username,
//         this.loginCount = loginCount,
//         this.isLoggedIn = isLoggedIn
// }

// const user1 = new User("himan", 16, false)
// const user2 = new User("Aadi", 8, true)
// const user3 = new User("Aditya", 11, true)
// const user4 = new User("JY", 4, true)
// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)

///////////////////////////////////////////////////////////////////////////////////////////

// function mulBy5(num) {
//     this.num = num
//     return num * 5
// }

// mulBy5.power = 2

// console.log(mulBy5(7))
// console.log(mulBy5.power)
// console.log(mulBy5.prototype)


// function createUser(user, sl_no) {
//     this.user = user
//     this.sl_no = sl_no
// }

// createUser.prototype.increment = function () {
//     sl_no++
// }
// createUser.prototype.printme = function () {
//     console.log(`this is incremented to ${this.sl_no}`)
// }

// const lappy = new createUser("lappy", 1)
// const laptop = new createUser("laptop", 3)

// lappy.printme()
// laptop.printme()


// ++++++++++++++++++++++++++++++++++++++++++++++ PROTOTYPE ++++++++++++++++++++++++++++++++


// let hero = ["spiderman", "hulk"]
// let heroPower = {
//     spider: "spidy",
//     hulk: "punch",

//     spiderPOwer: function () {
//         console.log(`spider power is ${this.spider}`)
//     }
// }

// Object.prototype.aadi = function () {
//     console.log(`yes aadi is with all of them`);
// }

// Array.prototype.okAadi = function () {
//     console.log(`ok aadi have all powers`)
// }

// heroPower.aadi()
// hero.aadi()

// // heroPower.okAadi()
// hero.okAadi()


const user = {
    username: "alok"
}

const father = {
    working: true
}

const mother = {
    housekeeper: false
}

const son = {
    studyies: "schooling",
    fulltime: true,
    __proto__: [father, mother]

}
son.__proto__ = user

Object.setPrototypeOf(son, father)




let user2 = "natGeo        "
String.prototype.truelenght = function () {
    console.log(`${this}`)
    console.log(`the real length is ${this.trim().length}`)
}

user2.truelenght()
"yesYamaha".truelenght()
"suzuki".truelenght()