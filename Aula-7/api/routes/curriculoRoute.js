module.exports = (app) => {
  const controller = app.controllers.curriculo;

  app.route("/api/v1/data-curriculo").get(controller.listDataDB);
};
