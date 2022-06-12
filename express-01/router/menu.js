const express = require("express");
const router = express.Router();

const menuService = require("#R/service/menu.js");

router.get("/queryAll", async (req, res) => {
  let menus = await menuService.queryAll();
  // ....
  res.send(menus);
});

router.post("/deleteById", async (req, res) => {
  let { id } = req.body;
  await menuService.deleteById(id);
  res.send("删除成功");
});

router.post("/addMenu", async (req, res) => {
  let { id, name, parent_id } = req.body;
  if (id) {
    await menuService.update({ id, name });
    res.send("修改成功");
  } else {
    await menuService.add({ name, parent_id });
    res.send("添加成功");
  }
});

module.exports = router;
