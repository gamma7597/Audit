module.exports = app => {
  const a_rules = require("../../controllers/rules/a_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", a_rules.create);

  router.get("/:company", a_rules.findAll);

  router.put("/:company", a_rules.update);

  app.use('/api/a_rules', router);
};