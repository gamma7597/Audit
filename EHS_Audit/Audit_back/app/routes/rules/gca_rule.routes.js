module.exports = app => {
  const gca_rules = require("../../controllers/rules/gca_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", gca_rules.create);

  router.get("/:company", gca_rules.findAll);

  router.put("/:company", gca_rules.update);

  app.use('/api/gca_rules', router);
};