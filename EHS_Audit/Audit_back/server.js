const express = require("express");
const cors = require("cors");

const path = __dirname + '/app/views/';

const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: '0oa2pf2uaeW95u4VH5d7',
  issuer: 'https://dev-46549604.okta.com/oauth2/aus4gbwz3qR3wa0v75d7',  
  clientId: '0oa7n4gwwkvQiWODq0i7',
  issuer: 'https://engie.okta-emea.com/oauth2/aus7o7nrogwXSVcYn0i7'
});
const audience = 'https://conformite.engie-homeservices.fr';
//const audience = 'custom_audit'

var app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "https://conformite.engie-homeservices.fr"
  //origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  /*res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; connect-src 'self' https://engie.okta-emea.com/oauth2/aus7o7nrogwXSVcYn0i7/v1/token https://engie.okta-emea.com/oauth2/aus7o7nrogwXSVcYn0i7/v1/userinfo https://engie.okta-emea.com/oauth2/aus7o7nrogwXSVcYn0i7/v1/revoke https://engie.okta-emea.com/api/v1/sessions/me; font-src 'self' https://fonts.gstatic.com; img-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; frame-src 'self'"
  );*/
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Permissions-Policy', "accelerometer=(), geolocation=(self), fullscreen=(self), autoplay=(), camera=(), display-capture=(self)");
  res.setHeader('referrer-policy', 'no-referrer');
  res.setHeader('X-XSS-Protection', '0');
  return next();
});

app.use(express.static(path));

const authenticationRequired = async (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);
  if (!match) {
    return res.status(401).send();
  }

  try {
    const accessToken = match[1];
    if (!accessToken) {
      return res.status(401, 'Not authorized').send();
    }
    req.jwt = await oktaJwtVerifier.verifyAccessToken(accessToken, audience);
    next();
  } catch (err) {
    return res.status(401).send(err.message);
  }
};

const winston = require('winston');
const morgan = require('morgan');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: 'http',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    json()
  ),
  transports: [
    new winston.transports.File({
      filename: './logs/all.log',
    }),
  ],
});

const morganMiddleware = morgan(
  ':method - :url - :status',
  {
    stream: {
      // Configure Morgan to use our custom logger with the http severity
      write: (message) => logger.http(message.trim()),
    },
  }
);

app.use(morganMiddleware);

logger.info('Info message');
logger.error('Error message');
logger.warn('Warning message');


app.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});

app.get("/callback", (req, res) => {
  res.sendFile(path + "index.html");
});

app.get("/aide/", (req, res) => {
  res.sendFile(path + "index.html");
});

app.all('*', authenticationRequired); // Require authentication for all routes

const db = require("./app/models");
db.sequelize.sync();

require("./app/routes/partner.routes")(app);
require("./app/routes/contact.routes")(app);
require("./app/routes/employee.routes")(app);
require("./app/routes/rules/g_rule.routes")(app);
require("./app/routes/rules/rh_rule.routes")(app);
require("./app/routes/rules/pt_rule.routes")(app);
require("./app/routes/rules/a_rule.routes")(app);
require("./app/routes/rules/ca_rule.routes")(app);
require("./app/routes/rules/spe_rule.routes")(app);
require("./app/routes/rules/c_rule.routes")(app);
require("./app/routes/rules/adm_rule.routes")(app);
require("./app/routes/rules/se_rule.routes")(app);
require("./app/routes/rules/rf_rule.routes")(app);
require("./app/routes/rules/gi_rule.routes")(app);
require("./app/routes/rules/gca_rule.routes")(app);
require("./app/routes/rules/ie_rule.routes")(app);
require("./app/routes/rules/rgpd_rule.routes")(app);
require("./app/routes/rules/cd_rule.routes")(app);
require("./app/routes/rules/co_rule.routes")(app);
require("./app/routes/rules/tdt_rule.routes")(app);
require("./app/routes/file.routes")(app);
require("./app/routes/maturite.routes")(app);

// set port, listen for requests
//const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

