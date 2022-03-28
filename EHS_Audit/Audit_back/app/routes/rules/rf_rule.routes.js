module.exports = app => {
  const rf_rules = require("../../controllers/rules/rf_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", rf_rules.create);

  router.get("/:company", rf_rules.findAll);

  router.put("/:company", rf_rules.update);

  app.use('/api/rf_rules', router);
};