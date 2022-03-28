module.exports = (sequelize, Sequelize) => {
  const Gca_rule = sequelize.define("gca_rule", {
    company: {
      type: Sequelize.STRING
    },
    gca_1: {
      type: Sequelize.STRING
    },
    gca_1_comment: {
      type: Sequelize.STRING
    },
    gca_1_impact: {
      type: Sequelize.INTEGER
    },
    gca_1_engie: {
      type: Sequelize.STRING
    },
    gca_2: {
      type: Sequelize.STRING
    },
    gca_2_comment: {
      type: Sequelize.STRING
    },
    gca_2_impact: {
      type: Sequelize.INTEGER
    },
    gca_2_engie: {
      type: Sequelize.STRING
    },
    gca_3: {
      type: Sequelize.STRING
    },
    gca_3_comment: {
      type: Sequelize.STRING
    },
    gca_3_impact: {
      type: Sequelize.INTEGER
    },
    gca_3_engie: {
      type: Sequelize.STRING
    }
  });

  return Gca_rule;
};