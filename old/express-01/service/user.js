const userSql = require("#R/sql/user.js");

exports.queryAll = async function () {
  let users = await userSql.queryAll();
  users = users.map((user) => {
    delete user.password;
    return user;
  });
  return users;
};
