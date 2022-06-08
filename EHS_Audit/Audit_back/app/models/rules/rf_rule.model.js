module.exports = (sequelize, Sequelize) => {
  const Rf_rule = sequelize.define("rf_rule", {
    company: {
      type: Sequelize.STRING
    },
    rf_1: {
      type: Sequelize.STRING
    },
    rf_1_comment: {
      type: Sequelize.STRING
    },
    rf_1_impact: {
      type: Sequelize.FLOAT
    },
    rf_1_engie: {
      type: Sequelize.STRING
    },
    rf_2: {
      type: Sequelize.STRING
    },
    rf_2_comment: {
      type: Sequelize.STRING
    },
    rf_2_impact: {
      type: Sequelize.FLOAT
    },
    rf_2_engie: {
      type: Sequelize.STRING
    },
    rf_3: {
      type: Sequelize.STRING
    },
    rf_3_comment: {
      type: Sequelize.STRING
    },
    rf_3_impact: {
      type: Sequelize.FLOAT
    },
    rf_3_engie: {
      type: Sequelize.STRING
    }
  });

  return Rf_rule;
};