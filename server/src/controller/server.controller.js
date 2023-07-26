const ServerModel = require("../model/server.model");

const getList = async (req, res) => {
  const [lists] = await ServerModel.getList();
  res.json({
    message: "Berhasil Mendapatkan Lists Data",
    data: lists,
    statusCode: 200,
  });
};

const popularList = async (req, res) => {
  const [lists] = await ServerModel.popularList();
  res.json({
    message: "Berhasil Mendapatkan Popular Lists",
    data: lists,
    statusCode: 200,
  });
};

const getClient = async (req, res) => {
  const [clients] = await ServerModel.getClient();
  res.json({
    message: "Berhasil Mendapatkan Clients Data",
    data: clients,
    statusCode: 200,
  });
};

module.exports = {
  getList,
  popularList,
  getClient,
};
