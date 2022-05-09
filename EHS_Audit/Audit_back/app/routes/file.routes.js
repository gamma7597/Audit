module.exports = app => {
  const files = require("../controllers/file.controller.js");

  var router = require("express").Router();

  router.post("/:company/upload", files.upload);

  router.get("/:company/files", files.getListFiles);

  router.get("/:company/files/:name", files.download);

  router.delete("/:company/files/:fileName", files.deleteFile);

  app.use('/api/files', router);
};