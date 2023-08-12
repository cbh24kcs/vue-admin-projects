const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "express-01",
  charset: "utf8",
});

function dbQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
        throw error;
      }
      connection.query(sql, params, (err, results, fields) => {
        connection.release();
        if (err) {
          reject(err);
          throw err;
        }
        resolve(results);
      });
    });
  });
}

exports.pool = pool;
exports.dbQuery = dbQuery;
