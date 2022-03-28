module.exports = app => {
  const spe_rules = require("../../controllers/rules/spe_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", spe_rules.create);

  router.get("/:company", spe_rules.findAll);

  router.put("/:company", spe_rules.update);

  app.use('/api/spe_rules', router);
};