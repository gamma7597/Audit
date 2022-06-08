module.exports = (sequelize, Sequelize) => {
  const Ca_rule = sequelize.define("ca_rule", {
    company: {
      type: Sequelize.STRING
    },
    ca_1: {
      type: Sequelize.STRING
    },
    ca_1_comment: {
      type: Sequelize.STRING
    },
    ca_1_impact: {
      type: Sequelize.FLOAT
    },
    ca_1_engie: {
      type: Sequelize.STRING
    },
    ca_2: {
      type: Sequelize.STRING
    },
    ca_2_comment: {
      type: Sequelize.STRING
    },
    ca_2_impact: {
      type: Sequelize.FLOAT
    },
    ca_2_engie: {
      type: Sequelize.STRING
    },
    ca_3: {
      type: Sequelize.STRING
    },
    ca_3_comment: {
      type: Sequelize.STRING
    },
    ca_3_impact: {
      type: Sequelize.FLOAT
    },
    ca_3_engie: {
      type: Sequelize.STRING
    },
    ca_4: {
      type: Sequelize.STRING
    },
    ca_4_comment: {
      type: Sequelize.STRING
    },
    ca_4_impact: {
      type: Sequelize.FLOAT
    },
    ca_4_engie: {
      type: Sequelize.STRING
    },
    ca_5: {
      type: Sequelize.STRING
    },
    ca_5_comment: {
      type: Sequelize.STRING
    },
    ca_5_impact: {
      type: Sequelize.FLOAT
    },
    ca_5_engie: {
      type: Sequelize.STRING
    },
    ca_6: {
      type: Sequelize.STRING
    },
    ca_6_comment: {
      type: Sequelize.STRING
    },
    ca_6_impact: {
      type: Sequelize.FLOAT
    },
    ca_6_engie: {
      type: Sequelize.STRING
    },
    ca_7: {
      type: Sequelize.STRING
    },
    ca_7_comment: {
      type: Sequelize.STRING
    },
    ca_7_impact: {
      type: Sequelize.FLOAT
    },
    ca_7_engie: {
      type: Sequelize.STRING
    },
    ca_8: {
      type: Sequelize.STRING
    },
    ca_8_comment: {
      type: Sequelize.STRING
    },
    ca_8_impact: {
      type: Sequelize.FLOAT
    },
    ca_8_engie: {
      type: Sequelize.STRING
    },
    ca_9: {
      type: Sequelize.STRING
    },
    ca_9_comment: {
      type: Sequelize.STRING
    },
    ca_9_impact: {
      type: Sequelize.FLOAT
    },
    ca_9_engie: {
      type: Sequelize.STRING
    },
    ca_10: {
      type: Sequelize.STRING
    },
    ca_10_comment: {
      type: Sequelize.STRING
    },
    ca_10_impact: {
      type: Sequelize.FLOAT
    },
    ca_10_engie: {
      type: Sequelize.STRING
    }
  });

  return Ca_rule;
};