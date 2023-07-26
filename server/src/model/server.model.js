const connection = require("../config/database");

const getList = () => {
  const sql = "SELECT * FROM  lists";
  return connection.execute(sql);
};

const popularList = () => {
  const sql = "SELECT * FROM  lists WHERE rate=5 ORDER BY id LIMIT 3";
  return connection.execute(sql);
};

const getClient = () => {
  const sql = "SELECT * FROM clients ORDER BY id DESC LIMIT 6";
  return connection.execute(sql);
};

module.exports = {
  getList,
  popularList,
  getClient,
};
