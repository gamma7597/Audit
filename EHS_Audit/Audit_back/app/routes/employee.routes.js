module.exports = app => {
  const employees = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  router.post("/:company", employees.create);

  router.get("/:company", employees.findAll);

  //router.get("/:partnerId/:employeeId", employees.findOne);

  router.put("/:partnerId/:last_name", employees.update);

  router.delete("/:partnerId/:last_name", employees.delete);

  app.use('/api/employees', router);
};