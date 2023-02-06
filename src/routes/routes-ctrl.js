const User = require("../model/User");
const UserStorage = require("../model/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home.ejs");
  },
  login: (req, res) => {
    res.render("login.ejs");
  },
  register: (req, res) => {
    res.render("register.ejs");
  },
};

const process = {
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
  login: (req, res) => {
    const user = req.body;
    const response = UserStorage.checkUser(user.id, user.password);
    console.log(response);
  },
};

module.exports = { output, process };
