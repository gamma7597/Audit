module.exports = (sequelize, Sequelize) => {
  const Cd_rule = sequelize.define("cd_rule", {
    company: {
      type: Sequelize.STRING
    },
    cd_1: {
      type: Sequelize.STRING
    },
    cd_1_comment: {
      type: Sequelize.STRING
    },
    cd_1_impact: {
      type: Sequelize.FLOAT
    },
    cd_1_engie: {
      type: Sequelize.STRING
    },
    cd_2: {
      type: Sequelize.STRING
    },
    cd_2_comment: {
      type: Sequelize.STRING
    },
    cd_2_impact: {
      type: Sequelize.FLOAT
    },
    cd_2_engie: {
      type: Sequelize.STRING
    }
  });

  return Cd_rule;
};