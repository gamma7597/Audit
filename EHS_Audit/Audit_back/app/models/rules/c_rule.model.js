module.exports = (sequelize, Sequelize) => {
  const C_rule = sequelize.define("c_rule", {
    company: {
      type: Sequelize.STRING
    },
    c_1: {
      type: Sequelize.STRING
    },
    c_1_comment: {
      type: Sequelize.STRING
    },
    c_1_impact: {
      type: Sequelize.INTEGER
    },
    c_1_engie: {
      type: Sequelize.STRING
    },
    c_2: {
      type: Sequelize.STRING
    },
    c_2_comment: {
      type: Sequelize.STRING
    },
    c_2_impact: {
      type: Sequelize.INTEGER
    },
    c_2_engie: {
      type: Sequelize.STRING
    },
    c_3: {
      type: Sequelize.STRING
    },
    c_3_comment: {
      type: Sequelize.STRING
    },
    c_3_impact: {
      type: Sequelize.INTEGER
    },
    c_3_engie: {
      type: Sequelize.STRING
    },
    c_4: {
      type: Sequelize.STRING
    },
    c_4_comment: {
      type: Sequelize.STRING
    },
    c_4_impact: {
      type: Sequelize.INTEGER
    },
    c_4_engie: {
      type: Sequelize.STRING
    },
    c_5: {
      type: Sequelize.STRING
    },
    c_5_comment: {
      type: Sequelize.STRING
    },
    c_5_impact: {
      type: Sequelize.INTEGER
    },
    c_5_engie: {
      type: Sequelize.STRING
    },
    c_6: {
      type: Sequelize.STRING
    },
    c_6_comment: {
      type: Sequelize.STRING
    },
    c_6_impact: {
      type: Sequelize.INTEGER
    },
    c_6_engie: {
      type: Sequelize.STRING
    },
    c_7: {
      type: Sequelize.STRING
    },
    c_7_comment: {
      type: Sequelize.STRING
    },
    c_7_impact: {
      type: Sequelize.INTEGER
    },
    c_7_engie: {
      type: Sequelize.STRING
    },
    c_8: {
      type: Sequelize.STRING
    },
    c_8_comment: {
      type: Sequelize.STRING
    },
    c_8_impact: {
      type: Sequelize.INTEGER
    },
    c_8_engie: {
      type: Sequelize.STRING
    }
  });

  return C_rule;
};