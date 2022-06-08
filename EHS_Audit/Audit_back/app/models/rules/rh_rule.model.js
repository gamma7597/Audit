module.exports = (sequelize, Sequelize) => {
  const Rh_rule = sequelize.define("rh_rule", {
    company: {
      type: Sequelize.STRING
    },
    rh_1: {
      type: Sequelize.STRING
    },
    rh_1_comment: {
      type: Sequelize.STRING
    },
    rh_1_impact: {
      type: Sequelize.FLOAT
    },
    rh_1_engie: {
      type: Sequelize.STRING
    },
    rh_2: {
      type: Sequelize.STRING
    },
    rh_2_comment: {
      type: Sequelize.STRING
    },
    rh_2_impact: {
      type: Sequelize.FLOAT
    },
    rh_2_engie: {
      type: Sequelize.STRING
    }
  });

  return Rh_rule;
};