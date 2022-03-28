module.exports = app => {
  const adm_rules = require("../../controllers/rules/adm_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", adm_rules.create);

  router.get("/:company", adm_rules.findAll);

  router.put("/:company", adm_rules.update);

  app.use('/api/adm_rules', router);
};