module.exports = app => {
  const rh_rules = require("../../controllers/rules/rh_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", rh_rules.create);

  router.get("/:company", rh_rules.findAll);

  router.put("/:company", rh_rules.update);

  app.use('/api/rh_rules', router);
};