module.exports = (sequelize, Sequelize) => {
  const A_rule = sequelize.define("a_rule", {
    company: {
      type: Sequelize.STRING
    },
    a_1: {
      type: Sequelize.STRING
    },
    a_1_comment: {
      type: Sequelize.STRING
    },
    a_1_impact: {
      type: Sequelize.FLOAT
    },
    a_1_engie: {
      type: Sequelize.STRING
    },
    a_2: {
      type: Sequelize.STRING
    },
    a_2_comment: {
      type: Sequelize.STRING
    },
    a_2_impact: {
      type: Sequelize.FLOAT
    },
    a_2_engie: {
      type: Sequelize.STRING
    },
    a_3: {
      type: Sequelize.STRING
    },
    a_3_comment: {
      type: Sequelize.STRING
    },
    a_3_impact: {
      type: Sequelize.FLOAT
    },
    a_3_engie: {
      type: Sequelize.STRING
    },
    a_4: {
      type: Sequelize.STRING
    },
    a_4_comment: {
      type: Sequelize.STRING
    },
    a_4_impact: {
      type: Sequelize.FLOAT
    },
    a_4_engie: {
      type: Sequelize.STRING
    }
  });

  return A_rule;
};