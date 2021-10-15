module.exports = app => {
  const article = require("../controllers/article.controller.js");

  let router = require("express").Router();

  router.post("/", article.create);
  router.get("/", article.findAll);
  router.get("/:id", article.findOne);

  app.use('/api/article', router);
};
