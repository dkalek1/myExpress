const fs = require("fs").promises;

class UserStorage {
  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static checkUser(id, password) {
    const List = this.getUsers(false, "id", "password");
    console.log(List);
    // if (List.id.includes(id)) {
    //   if (List.password.includes(password)) {
    //     return { success: true };
    //   }
    //   return alert("비밀번호를 확인하세요");
    // }
    // return alert("아이디를 확인하세요");
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/database/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 있는사람이에요";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    fs.writeFile("./src/database/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
