// class User {
//   constructor(Username) {
//     this.Username = Username;
//   }
//   logME() {
//     console.log(`username is ${this.Username}`);
//   }
// }

// class Teacher extends User {
//   constructor(Username, email, pwd) {
//     super(Username);
//     this.email = email;
//     this.pwd = pwd;
//   }
//   addSubject() {
//     console.log(`new subject was added by ${this.Username}`);
//   }
// }
// const master = new Teacher("SuuuRyaaa", "sp@ydv", "120");
// master.addSubject();
// master.logME();

// const madam = new User("eeechPiii");
// madam.logME();

// +++++++++++++++++++++++++++++++++++++++++ STATIC ++++++++++++++++++++++++++++++++++

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username: ${this.username}`);
  }
  static createId() {
    return `420`;
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const moto = new User("motos");
moto.logMe();
// console.log(moto.createId());                   //not accessible due to static

const syamsung = new Teacher("G54", "moto@len");
syamsung.logMe();
// console.log(syamsung.createId());    //not accessible due to static

console.log(User.createId()); //static can be  accesed in this way
console.log(Teacher.createId());
