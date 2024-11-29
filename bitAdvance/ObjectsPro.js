// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const coffee = {
  name: "latte",
  price: 250,
  isAvailable: true,
  orderCoffee: function () {
    console.log(`you have it `);
  },
};
// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));
Object.defineProperty(coffee, "name", {
  writable: false,
  //   enumerable: false,
  configurable: false,
});
// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

// for (let [key, value] of Object.entries(coffee)) {
//   console.log(`${key}: ${value}`);
// }

for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
