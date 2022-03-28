module.exports = app => {
  const tdt_rules = require("../../controllers/rules/tdt_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", tdt_rules.create);

  router.get("/:company", tdt_rules.findAll);

  router.put("/:company", tdt_rules.update);

  app.use('/api/tdt_rules', router);
};