require("module-alias/register");

const express = require("express");
// const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8181;

// 后端配置允许浏览器跨域访问
// app.use(cors());

// 设置body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 注册路由
app.use("/login", require("#R/router/login.js"));
app.use("/test", require("#R/router/test.js"));
app.use("/user", require("#R/router/user.js"));
app.use("/menu", require("#R/router/menu.js"));

app.listen(port, function () {
  console.log(`服务已启动, 端口: ${port}`);
});
