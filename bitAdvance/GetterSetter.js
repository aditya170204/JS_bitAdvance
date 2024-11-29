// class bottle {
//   constructor(name, size) {
//     (this.name = name), (this.size = size);
//   }
//   get name() {
//     return this._name.toUpperCase();
//   }
//   set name(value) {
//     this._name = value.toUpperCase();
//   }
// }
// const cello = new bottle("cellow", "750ml");
// console.log(cello.name);

// class notebook {
//   constructor(name, color) {
//     (this.name = name), (this.color = color);
//   }
//   get color() {
//     return this._color.toUpperCase();
//   }
//   set color(value) {
//     this._color = value.toUpperCase();
//   }
// }
// const doms = new notebook("doms", "whitePages");
// console.log(doms.color);

class food {
  constructor(taste, state) {
    (this.taste = taste), (this.state = state);
  }
  get taste() {
    return this._taste.toUpperCase();
  }
  set taste(value) {
    this._taste = value.toUpperCase();
  }
}
const burger = new food("tasty", "solid");
console.log(`burger are very ${burger.taste}`);
