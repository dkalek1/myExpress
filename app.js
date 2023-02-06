const express = require("express");
const app = express();
const routes = require("./src/routes/routes.js");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/src/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(app.get("port"), () => {
  console.log("3000번 포트에서 대기중");
});
