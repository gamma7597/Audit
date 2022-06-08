module.exports = app => {
    const contacts = require("../controllers/contact.controller.js");
  
    var router = require("express").Router();
  
    router.post("/:company", contacts.create);
  
    router.get("/:company", contacts.findAll);
  
    router.get("/:company/:last_name", contacts.findOne);
  
    router.put("/:company/:last_name", contacts.update);
  
    router.delete("/:company/:last_name", contacts.delete);
  
    app.use('/api/contacts', router);
  };