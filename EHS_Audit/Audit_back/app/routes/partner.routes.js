module.exports = app => {
  const partners = require("../controllers/partner.controller.js");

  var router = require("express").Router();

  router.post("/", partners.create);

  router.get("/", partners.findAll);

  router.get("/:company", partners.findOne);

  router.put("/:company", partners.update);

  router.delete("/:company", partners.delete);

  app.use('/api/partners', router);
};