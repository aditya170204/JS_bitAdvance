// ++++++++++++++++++++++++++++++++++++++++++ FILTER +++++++++++++++++++++++++++++++++++++++++

// let ary = ["Honda", "volkswagen", "skoda", "ford", "toyota"]
// const cars = ary.forEach((items) => {
//     console.log(items)
// })
// console.log(cars)


// let myNum = [1, 2, 3, 4, 5, 6, 7]
// let newNum = myNum.filter((num) => (num > 4))
// console.log(newNum)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let ary = []
// myNum.forEach((item) => {
//     if (item > 4) {
//         ary.push(item)
//     }
// })
// console.log(ary)


// const books  = [
//     { bookName: "To Kill a Mockingbird", authorName: "Harper Lee", yearPublished: 1960 },
//     { bookName: "1984", authorName: "George Orwell", yearPublished: 1949 },
//     { bookName: "The Great Gatsby", authorName: "F. Scott Fitzgerald", yearPublished: 1925 },
//     { bookName: "The Catcher in the Rye", authorName: "J.D. Salinger", yearPublished: 1951 },
//     { bookName: "Moby Dick", authorName: "Herman Melville", yearPublished: 1851 },
//     { bookName: "Pride and Prejudice", authorName: "Herman Melville", yearPublished: 1813 }
// ]
// const fifties = books.filter((bk) => (bk.yearPublished === 1951))
// // console.log(fifties)
// const ville = books.filter((dk) => (dk.authorName === "Herman Melville"))
// // console.log(ville)
// const year = books.forEach((yr) => {
//     if (yr.yearPublished <= 1925) {
//         console.log(yr)
//         // return
//     }
// })


// +++++++++++++++++++++++++++++++++++++++++++++++  M A P +++++++++++++++++++++++++++

// const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const ar2 = ar1.map((no) => (no * 10))
//     .map((no) => (no + 5))
//     .map((no) => (no / 5))
//     .filter((no) => (no % 3 == 0))



// console.log(ar2)





// const arry = [1, 2, 3, 4, 5]
// const arjun = 0
// const ajay = arry.reduce(
//     (accumulator, currentValue) => {
//         console.log(`acc:${accumulator} and cur.val:${currentValue}`);
//         return accumulator + currentValue
//     }
//     , arjun);
// console.log(ajay);


// const arry2 = [1, 2, 3, 4]
// const abi = arry2.reduce((acc, currval) => (acc + currval), 0)
// console.log(abi);

// const course = [
//     {
//         courseName: "javaScript",
//         price: 1999
//     },
//     {
//         courseName: "python",
//         price: 1199
//     },
//     {
//         courseName: "app dev",
//         price: 2999
//     },
//     {
//         courseName: "fullStack",
//         price: 4999
//     }
// ]

// const myBill = course.reduce((acc, item) => (acc + item.price), 0)
// console.log(myBill);



// const books = [
//     { bookName: "The Alchemist", authorName: "Paulo Coelho", price: 15.99 },
//     { bookName: "Sapiens", authorName: "Yuval Noah Harari", price: 19.99 },
//     { bookName: "The Subtle Art of Not Giving a F*ck", authorName: "Mark Manson", price: 12.99 },
//     { bookName: "Becoming", authorName: "Michelle Obama", price: 18.50 },
//     { bookName: "The Hobbit", authorName: "J.R.R. Tolkien", price: 14.99 },
//     { bookName: "Atomic Habits", authorName: "James Clear", price: 16.99 }
// ];

// const yourBill = books.reduce((acc, item) => (acc + item.price), 0)
// console.log(`sir you have to pay us ${yourBill.toFixed(2)} , thank you`)
