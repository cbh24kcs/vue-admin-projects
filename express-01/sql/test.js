const { dbQuery } = require("#R/utils/db-util.js");

exports.queryAll = async function () {
  return await dbQuery("select * from test;");
};
