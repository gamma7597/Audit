module.exports = app => {
    const contacts = require("../controllers/contact.controller.js");
  
    var router = require("express").Router();
  
    router.post("/:company", contacts.create);
  
    router.get("/:company", contacts.findAll);
  
    //router.get("/:partnerId/:contactId", contacts.findOne);
  
    //router.put("/:partnerId/:contactId", contacts.update);
  
    //router.delete("/:partnerId/:contactId", contacts.delete);
  
    app.use('/api/contacts', router);
  };