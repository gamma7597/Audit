const util = require("util");
const multer = require("multer");

let storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    const company = req.params.company;
    cb(null, __basedir + "/resources/static/assets/uploads/" + company);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { 
    fields: 10,
    fieldNameSize: 50,
    fieldSize: 20000,
    fileSize: 15000000
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" 
        || file.mimetype == "image/jpg" 
        || file.mimetype == "image/jpeg"
        || file.mimetype == "application/msword"
        || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        || file.mimetype == "application/pdf"
        || file.mimetype == "application/vnd.ms-powerpoint"
        || file.mimetype == "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        || file.mimetype == "application/vnd.ms-excel"
        || file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;