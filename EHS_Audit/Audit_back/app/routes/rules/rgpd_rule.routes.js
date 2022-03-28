module.exports = app => {
  const rgpd_rules = require("../../controllers/rules/rgpd_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", rgpd_rules.create);

  router.get("/:company", rgpd_rules.findAll);

  router.put("/:company", rgpd_rules.update);

  app.use('/api/rgpd_rules', router);
};