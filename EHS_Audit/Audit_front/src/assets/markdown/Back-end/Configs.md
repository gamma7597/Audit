# Fichiers de configuration

## server.js

Ce fichier permet de créer et de paramétrer notre serveur NodeJS.

    const express = require("express");
    const cors = require("cors");
    const logger = require('./app/middleware/log');  
    const path = __dirname + '/app/views/';
    const OktaJwtVerifier = require('@okta/jwt-verifier');
    const PORT = process.env.PORT || 8080;
    //const PORT = process.env.PORT || 80;
    const db = require("./app/models");

Dans un premier temps, on commence par récupérer les dépendances et les middlewares.
On paramètre aussi le port sur lequel va écouter le serveur. Enfin, on définit path où se trouve nos fichiers.

    var app = express();

On initialise ExpressJS avec cette ligne de code.

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

On synchronise ici les models avec Sequelize et on récupère l'ensemble des routes pour leurs utilisation avec ExpressJS.

    var corsOptions = {
      //origin: "https://conformite.engie-homeservices.fr"
      origin: "http://localhost:8081"
    }
    app.use(cors(corsOptions));

On initialise ici les cors qu'on va utiliser avec ExpressJS. C'est principalement l'origine des requêtes HTTP.

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

Ensuite, on paramètre les content-type qui seront autorisés.

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

On déclare ensuite les headers ainsi que les directives des CSP.

    app.use(express.static(path));

On indique à ExpressJS que l'on va utiliser le path définit au début du fichier.

    const oktaJwtVerifier = new OktaJwtVerifier({
      //localhost
      //clientId: '0oa2pf2uaeW95u4VH5d7',
      //issuer: 'https://dev-46549604.okta.com/oauth2/aus4gbwz3qR3wa0v75d7',  
      //prod
      //clientId: '0oa7n4gwwkvQiWODq0i7',
      //issuer: 'https://engie.okta-emea.com/oauth2/aus7o7nrogwXSVcYn0i7'
      //poc
      clientId: '0oa4c08oa16DlRFzW0x7',
      issuer: 'https://engie-btoc-oie-preview.oktapreview.com/oauth2/aus4c092lcGfLRARP0x7',
    });
    //const audience = 'https://conformite.engie-homeservices.fr';
    //const audience = 'custom_audit'
    const audience = 'api://conformite'

Cette fonction permet de paramétrer le provider Okta. Il y en a un pour le localhost, le POC et la production.

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

Cette fonction permet de vérifier le JSON Web Token reçu pour chaque requête HTTP dans le header.

    app.get("/", (req, res) => {
      res.sendFile(path + "index.html");
    });

    app.get("/callback", (req, res) => {
      res.sendFile(path + "index.html");
    });

    app.get("/aide/", (req, res) => {
      res.sendFile(path + "index.html");
    });

    //app.all('*', authenticationRequired);

Ici, on initialise avec Express les différentes routes possibles. Les 3 premières sont accessibles sans vérification du JSON Web Token contrairement aux autres. Concrètement, il n'y a pas besoin d'être authentifié pour accéder à ces routes.

Enfin pour lancer l'écoute du serveur sur le bon port :

    app.listen(PORT, () => {
      logger.http(`Server is running on port ${PORT}.`);
    });

## db.config.js

Ce fichier permet de paramétrer la connexion à la BDD MySQL.

Il servira à paramétrer Sequelize et ses models, c'est pour ça que ce module est exportable.

    module.exports = {
      HOST: "localhost",
      USER: "conformite",
      PASSWORD: "80Eej5Ukl7I6MP2ldtf9",
      //PASSWORD: "",
      DB: "conformite",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    };

On y définit principalement l'host, l'utilisateur ainsi que son mot de passe.
Le dialecte utilisé et le nom de la BDD sont aussi nécessaire.