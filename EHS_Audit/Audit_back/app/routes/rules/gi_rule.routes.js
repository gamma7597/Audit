module.exports = app => {
  const gi_rules = require("../../controllers/rules/gi_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", gi_rules.create);

  router.get("/:company", gi_rules.findAll);

  router.put("/:company", gi_rules.update);

  app.use('/api/gi_rules', router);
};