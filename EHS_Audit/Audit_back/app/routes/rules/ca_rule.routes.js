module.exports = app => {
  const ca_rules = require("../../controllers/rules/ca_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", ca_rules.create);

  router.get("/:company", ca_rules.findAll);

  router.put("/:company", ca_rules.update);

  app.use('/api/ca_rules', router);
};