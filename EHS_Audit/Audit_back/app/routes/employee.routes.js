module.exports = app => {
  const employees = require("../controllers/employee.controller.js");

  var router = require("express").Router();

  router.post("/:company", employees.create);

  router.get("/:company", employees.findAll);

  //router.get("/:partnerId/:employeeId", employees.findOne);

  //router.put("/:partnerId/:employeeId", employees.update);

  //router.delete("/:partnerId/:employeeId", employees.delete);

  app.use('/api/employees', router);
};