module.exports = app => {
  const co_rules = require("../../controllers/rules/co_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", co_rules.create);

  router.get("/:company", co_rules.findAll);
  
  router.put("/:company", co_rules.update);

  app.use('/api/co_rules', router);
};