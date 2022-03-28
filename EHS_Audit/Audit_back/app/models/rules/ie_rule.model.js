module.exports = (sequelize, Sequelize) => {
  const Ie_rule = sequelize.define("ie_rule", {
    company: {
      type: Sequelize.STRING
    },
    ie_1: {
      type: Sequelize.STRING
    },
    ie_1_comment: {
      type: Sequelize.STRING
    },
    ie_1_impact: {
      type: Sequelize.INTEGER
    },
    ie_1_engie: {
      type: Sequelize.STRING
    },
    ie_2: {
      type: Sequelize.STRING
    },
    ie_2_comment: {
      type: Sequelize.STRING
    },
    ie_2_impact: {
      type: Sequelize.INTEGER
    },
    ie_2_engie: {
      type: Sequelize.STRING
    }
  });

  return Ie_rule;
};