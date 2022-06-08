module.exports = (sequelize, Sequelize) => {
  const Spe_rule = sequelize.define("spe_rule", {
    company: {
      type: Sequelize.STRING
    },
    spe_1: {
      type: Sequelize.STRING
    },
    spe_1_comment: {
      type: Sequelize.STRING
    },
    spe_1_impact: {
      type: Sequelize.FLOAT
    },
    spe_1_engie: {
      type: Sequelize.STRING
    },
    spe_2: {
      type: Sequelize.STRING
    },
    spe_2_comment: {
      type: Sequelize.STRING
    },
    spe_2_impact: {
      type: Sequelize.FLOAT
    },
    spe_2_engie: {
      type: Sequelize.STRING
    },
    spe_3: {
      type: Sequelize.STRING
    },
    spe_3_comment: {
      type: Sequelize.STRING
    },
    spe_3_impact: {
      type: Sequelize.FLOAT
    },
    spe_3_engie: {
      type: Sequelize.STRING
    },
    spe_4: {
      type: Sequelize.STRING
    },
    spe_4_comment: {
      type: Sequelize.STRING
    },
    spe_4_impact: {
      type: Sequelize.FLOAT
    },
    spe_4_engie: {
      type: Sequelize.STRING
    },
    spe_5: {
      type: Sequelize.STRING
    },
    spe_5_comment: {
      type: Sequelize.STRING
    },
    spe_5_impact: {
      type: Sequelize.FLOAT
    },
    spe_5_engie: {
      type: Sequelize.STRING
    }
  });

  return Spe_rule;
};