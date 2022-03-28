module.exports = app => {
  const ie_rules = require("../../controllers/rules/ie_rule.controller.js");

  var router = require("express").Router();

  router.post("/:company", ie_rules.create);

  router.get("/:company", ie_rules.findAll);

  router.put("/:company", ie_rules.update);

  app.use('/api/ie_rules', router);
};