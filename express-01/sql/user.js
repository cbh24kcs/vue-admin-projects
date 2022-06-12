const { dbQuery } = require("#R/utils/db-util.js");

// 查询所有用户
exports.queryAll = async function () {
  return await dbQuery("select * from user;");
};
