module.exports = app => {
  const maturites = require("../controllers/maturite.controller.js");

  var router = require("express").Router();

  router.post("/", maturites.create);

  router.get("/", maturites.findAll);

  router.put("/:company", maturites.update);

  app.use('/api/maturites', router);
};