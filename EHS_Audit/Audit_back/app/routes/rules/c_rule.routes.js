module.exports = app => {
  const c_rules = require("../../controllers/rules/c_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", c_rules.create);

  router.get("/:company", c_rules.findAll);

  router.put("/:company", c_rules.update);

  app.use('/api/c_rules', router);
};