const dbConfig = require("../config/db.config.js");

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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.partners = require("./partner.model.js")(sequelize, Sequelize);
db.contacts = require("./contact.model.js")(sequelize, Sequelize);
db.employees = require("./employee.model.js")(sequelize, Sequelize);
db.g_rules = require("./rules/g_rule.model.js")(sequelize, Sequelize);
db.rh_rules = require("./rules/rh_rule.model.js")(sequelize, Sequelize);
db.pt_rules = require("./rules/pt_rule.model.js")(sequelize, Sequelize);
db.a_rules = require("./rules/a_rule.model.js")(sequelize, Sequelize);
db.ca_rules = require("./rules/ca_rule.model.js")(sequelize, Sequelize);
db.spe_rules = require("./rules/spe_rule.model.js")(sequelize, Sequelize);
db.c_rules = require("./rules/c_rule.model.js")(sequelize, Sequelize);
db.adm_rules = require("./rules/adm_rule.model.js")(sequelize, Sequelize);
db.se_rules = require("./rules/se_rule.model.js")(sequelize, Sequelize);
db.rf_rules = require("./rules/rf_rule.model.js")(sequelize, Sequelize);
db.gi_rules = require("./rules/gi_rule.model.js")(sequelize, Sequelize);
db.gca_rules = require("./rules/gca_rule.model.js")(sequelize, Sequelize);
db.ie_rules = require("./rules/ie_rule.model.js")(sequelize, Sequelize);
db.rgpd_rules = require("./rules/rgpd_rule.model.js")(sequelize, Sequelize);
db.cd_rules = require("./rules/cd_rule.model.js")(sequelize, Sequelize);
db.co_rules = require("./rules/co_rule.model.js")(sequelize, Sequelize);
db.tdt_rules = require("./rules/tdt_rule.model.js")(sequelize, Sequelize);

db.partners.hasMany(db.contacts, { as: "contacts", onDelete: 'cascade' })
db.contacts.belongsTo(db.partners, { foreignKey: "partnerId", as: "partner", onDelete: 'cascade' })

db.partners.hasMany(db.employees, { as: "employees", onDelete: 'cascade' })
db.employees.belongsTo(db.partners, { foreignKey: "partnerId", as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.g_rules, { onDelete: 'cascade' })
db.g_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.rh_rules, { onDelete: 'cascade' })
db.rh_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.pt_rules, { onDelete: 'cascade' })
db.pt_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.a_rules, { onDelete: 'cascade' })
db.a_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.ca_rules, { onDelete: 'cascade' })
db.ca_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.spe_rules, { onDelete: 'cascade' })
db.spe_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.c_rules, { onDelete: 'cascade' })
db.c_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.adm_rules, { onDelete: 'cascade' })
db.adm_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.se_rules, { onDelete: 'cascade' })
db.se_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.rf_rules, { onDelete: 'cascade' })
db.rf_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.gi_rules, { onDelete: 'cascade' })
db.gi_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.gca_rules, { onDelete: 'cascade' })
db.gca_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.ie_rules, { onDelete: 'cascade' })
db.ie_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.rgpd_rules, { onDelete: 'cascade' })
db.rgpd_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.cd_rules, { onDelete: 'cascade' })
db.cd_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.co_rules, { onDelete: 'cascade' })
db.co_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

db.partners.hasOne(db.tdt_rules, { onDelete: 'cascade' })
db.tdt_rules.belongsTo(db.partners, { as: "partner", onDelete: 'cascade' })

module.exports = db;
