const db = require("../models");
const Article = db.article;

// Create and Save a new Article
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Article
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Article in the database
  article
    .save(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article."
      });
    });
};

// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Article.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};

// Find a single Article with an id
exports.findOne = (req, res) => {

};

// Update a Article by the id in the request
exports.update = (req, res) => {

};

// Delete a Article with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Articles from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Articles
exports.findAllPublished = (req, res) => {

};
