module.exports = app => {
  const g_rules = require("../../controllers/rules/g_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", g_rules.create);

  router.get("/:company", g_rules.findAll);

  router.put("/:company", g_rules.update);

  app.use('/api/g_rules', router);
};