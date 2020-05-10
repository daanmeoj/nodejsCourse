const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const courses = require("./routes/courses");
const home = require("./routes/home");
const express = require("express");
const app = express();
const Joi = require("joi");
const logger = require("./middleware/logger");
const helmet = require("helmet");
const morgan = require("morgan");
console.log(`node env is:${process.env.NODE_ENV}`);
console.log(`app:${app.get("env")}`);
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");

app.use(logger);

app.use(helmet());
app.use("/api/courses", courses);
app.use("/", home);
// //Configuration
console.log("application name:" + config.get("name"));
console.log("mail server:" + config.get("mail.host"));
console.log("password of mail server:" + config.get("mail.password"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

dbDebugger("connected to db");

app.use((req, res, next) => {
  console.log("authenticating");
  next();
});

//PORT
const port = process.env.PORT || 3000;
// app.listen(3000, () => console.log("listeing on port 3000"));
app.listen(port, () => console.log(`listeing on port ${port}`));
