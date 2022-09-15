# Models

Les modèles correspondent à des tables de la BDD.
Sequelize permet de créer des modèles pour chaque table de la BDD.
Ces modèles seront ensuite utilisé lors du démarrage du serveur pour soit créer les tables en fonction des modèles soit se synchroniser dessus.
Le paramétrage des modèles s'effectue dans le fichier index.js.

# index.js

Ce fichier permet de paramétrer Sequelize et d'identifier les models qui seront utilisés.

    const dbConfig = require("../config/db.config.js");

On commence par récupérer les information de configuration d'accès à la BDD.

    const Sequelize = require("sequelize");
    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      operatorsAliases: false,

      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
    });

Ensuite, on paramètre Sequelize avec les informations récupérés précédemment.

    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.partners = require("./partner.model.js")(sequelize, Sequelize);
    db.contacts = require("./contact.model.js")(sequelize, Sequelize);

Puis, la BDD est créée et associé à Sequelize.
On ajoute ensuite les différents modèles à cette BDD en récupérant les models.

    db.partners.hasMany(db.contacts, { as: "contacts", onDelete: 'cascade' })
    db.contacts.belongsTo(db.partners, { foreignKey: "partnerId", as: "partner", onDelete: 'cascade' })

On paramétre ici les relations entre les models (1:1, 1:N, N:N).

    module.exports = db;

Enfin, on exporte cette BDD pour qu'elle puisse être utilisé par le fichier de configuration du serveur.

### Exemple de model

Voici une exemple de model utilisé dans l'application.
C'est le model Partner qui permet de créer une table dans la base de donnée pour stocker les informations d'un partenaire.

    module.exports = (sequelize, Sequelize) => {
      const Partner = sequelize.define("partner", {
        company: {
          type: Sequelize.STRING
        },
        contract_number: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        start_service: {
          type: Sequelize.DATEONLY
        },
        end_service: {
          type: Sequelize.DATEONLY
        }
      });

      return Partner;
    };

On remarque que le modèle est exportable pour son utilisation dans le fichier de paramétrage index.js.
On définit avec Sequelize une fonction Partner qui va créer la table partner.
Ce modèle de table va ainsi être alimenté par différents éléments ayant tous un type.

Voir la documentation de Sequelize pour comprendre les différentes possiblités de paramétrage possible.