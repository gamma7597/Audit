module.exports = app => {
  const cd_rules = require("../../controllers/rules/cd_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", cd_rules.create);

  router.get("/:company", cd_rules.findAll);

  router.put("/:company", cd_rules.update);

  app.use('/api/cd_rules', router);
};