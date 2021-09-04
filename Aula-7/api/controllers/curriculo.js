module.exports = (app) => {
  const dataDB = app.data.dados;
  const controller = {};

  controller.listDataDB = (req, res) => res.status(200).json(dataDB);

  return controller;
};
