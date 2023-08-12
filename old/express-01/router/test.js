const express = require("express");
const router = express.Router();
const testSql = require("#R/sql/test.js");
const userService = require("#R/service/user.js");
router.get("/test-db-01", async (req, res) => {
  let results = await testSql.queryAll();
  res.send(results);
});

router.get("/get-all-user", async (req, res) => {
  let users = await userService.queryAll();
  res.send(users);
});

module.exports = router;
