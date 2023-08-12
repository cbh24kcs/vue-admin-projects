const express = require("express");
const router = express.Router();
const userService = require("#R/service/user.js");

router.get("/all", async (req, res) => {
  let users = await userService.queryAll();
  res.send(users);
});

module.exports = router;
