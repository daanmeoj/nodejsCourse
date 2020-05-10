const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("hello world");
  res.render("index.pug", { title: "my express app", message: "hello" });
});

module.exports = router;
