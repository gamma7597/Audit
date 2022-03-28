module.exports = app => {
  const pt_rules = require("../../controllers/rules/pt_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", pt_rules.create);

  router.get("/:company", pt_rules.findAll);

  router.put("/:company", pt_rules.update);

  app.use('/api/pt_rules', router);
};