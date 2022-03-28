module.exports = (sequelize, Sequelize) => {
  const Se_rule = sequelize.define("se_rule", {
    company: {
      type: Sequelize.STRING
    },
    se_1: {
      type: Sequelize.STRING
    },
    se_1_comment: {
      type: Sequelize.STRING
    },
    se_1_impact: {
      type: Sequelize.INTEGER
    },
    se_1_engie: {
      type: Sequelize.STRING
    },
    se_2: {
      type: Sequelize.STRING
    },
    se_2_comment: {
      type: Sequelize.STRING
    },
    se_2_impact: {
      type: Sequelize.INTEGER
    },
    se_2_engie: {
      type: Sequelize.STRING
    },
    se_3: {
      type: Sequelize.STRING
    },
    se_3_comment: {
      type: Sequelize.STRING
    },
    se_3_impact: {
      type: Sequelize.INTEGER
    },
    se_3_engie: {
      type: Sequelize.STRING
    },
    se_4: {
      type: Sequelize.STRING
    },
    se_4_comment: {
      type: Sequelize.STRING
    },
    se_4_impact: {
      type: Sequelize.INTEGER
    },
    se_4_engie: {
      type: Sequelize.STRING
    },
    se_5: {
      type: Sequelize.STRING
    },
    se_5_comment: {
      type: Sequelize.STRING
    },
    se_5_impact: {
      type: Sequelize.INTEGER
    },
    se_5_engie: {
      type: Sequelize.STRING
    },
    se_6: {
      type: Sequelize.STRING
    },
    se_6_comment: {
      type: Sequelize.STRING
    },
    se_6_impact: {
      type: Sequelize.INTEGER
    },
    se_6_engie: {
      type: Sequelize.STRING
    }
  });

  return Se_rule;
};