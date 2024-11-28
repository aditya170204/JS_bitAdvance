class User {
  constructor(username, email, pwd) {
    this.username = username;
    this.email = email;
    this.pwd = pwd;
  }
  encryptpwd() {
    return `${this.pwd}abc`;
  }
  capitalizeUser() {
    return `${this.username.toUpperCase()}`;
  }
}

const bottle = new User("milton", "chand@moon", "sun2");
console.log(bottle.encryptpwd());
console.log(bottle.capitalizeUser());
console.log(bottle);
