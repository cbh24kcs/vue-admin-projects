const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("登录接口");
});

module.exports = router;
