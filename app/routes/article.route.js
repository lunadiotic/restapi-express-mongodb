module.exports = app => {
  const article = require("../controllers/article.controller.js");

  let router = require("express").Router();

  // Create a new Tutorial
  router.post("/", article.create);

  app.use('/api/article', router);
};
