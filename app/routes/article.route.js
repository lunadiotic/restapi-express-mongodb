module.exports = app => {
  const article = require("../controllers/article.controller.js");

  let router = require("express").Router();

  router.post("/", article.create);
  router.get("/", article.findAll);

  app.use('/api/article', router);
};
