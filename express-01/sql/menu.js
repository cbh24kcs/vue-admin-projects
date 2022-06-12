const { dbQuery } = require("#R/utils/db-util.js");

exports.queryAll = async function () {
  return await dbQuery("select * from menu;");
};

exports.deleteById = async function (id) {
  return await dbQuery("delete from menu where id=?", [id]);
};

exports.add = async function (menu) {
  return await dbQuery(
    `
        insert into menu 
        (name, parent_id)
        values
        (?, ?)
    `,
    [menu.name, menu.parent_id]
  );
};

exports.update = async function (menu) {
  return await dbQuery(
    `
        update menu 
        set name = ?
        where id = ?
    `,
    [menu.name, menu.id]
  );
};
