module.exports = app => {
  const se_rules = require("../../controllers/rules/se_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", se_rules.create);

  router.get("/:company", se_rules.findAll);

  router.put("/:company", se_rules.update);

  app.use('/api/se_rules', router);
};