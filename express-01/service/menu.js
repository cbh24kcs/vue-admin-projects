const menuSql = require("#R/sql/menu.js");

exports.queryAll = async function () {
  let menus = await menuSql.queryAll();
  return menus;
};

exports.deleteById = async function (id) {
  await menuSql.deleteById(id);
};

exports.add = async function (menu) {
  return await menuSql.add(menu);
};

exports.update = async function (menu) {
  return await menuSql.update(menu);
};
