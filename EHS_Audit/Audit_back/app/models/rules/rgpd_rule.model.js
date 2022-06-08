module.exports = (sequelize, Sequelize) => {
  const Rgpd_rule = sequelize.define("rgpd_rule", {
    company: {
      type: Sequelize.STRING
    },
    rgpd_1: {
      type: Sequelize.STRING
    },
    rgpd_1_comment: {
      type: Sequelize.STRING
    },
    rgpd_1_impact: {
      type: Sequelize.FLOAT
    },
    rgpd_1_engie: {
      type: Sequelize.STRING
    },
    rgpd_2: {
      type: Sequelize.STRING
    },
    rgpd_2_comment: {
      type: Sequelize.STRING
    },
    rgpd_2_impact: {
      type: Sequelize.FLOAT
    },
    rgpd_2_engie: {
      type: Sequelize.STRING
    }
  });

  return Rgpd_rule;
};