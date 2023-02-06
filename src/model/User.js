const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async register() {
    try {
      const reponse = await UserStorage.save(this.body);
      return reponse;
    } catch (error) {
      return { success: false, msg: error };
    }
  }
}

module.exports = User;
