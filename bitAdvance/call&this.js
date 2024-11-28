function SetUserName(username) {
  this.username = username;
  console.log("gotit");
}
function createUsername(username, email, password) {
  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}
const user = new createUsername("aadi", "aadi@17", "963");

console.log(user);

function GetUserName(GetUser) {
  this.GetUser = GetUser;
}

function UserDetail(GetUser, mail, pwd) {
  GetUserName.call(this, GetUser);

  this.mail = mail;
  this.pwd = pwd;
}
const okUser = new UserDetail("dj", "dj@ok", "hot");
const okUser2 = new UserDetail("dj", "dj@ok", "hot");
console.log(okUser);
console.log(okUser2);
