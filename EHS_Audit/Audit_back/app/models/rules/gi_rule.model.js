module.exports = (sequelize, Sequelize) => {
  const Gi_rule = sequelize.define("gi_rule", {
    company: {
      type: Sequelize.STRING
    },
    gi_1: {
      type: Sequelize.STRING
    },
    gi_1_comment: {
      type: Sequelize.STRING
    },
    gi_1_impact: {
      type: Sequelize.INTEGER
    },
    gi_1_engie: {
      type: Sequelize.STRING
    },
    gi_2: {
      type: Sequelize.STRING
    },
    gi_2_comment: {
      type: Sequelize.STRING
    },
    gi_2_impact: {
      type: Sequelize.INTEGER
    },
    gi_2_engie: {
      type: Sequelize.STRING
    },
    gi_3_impact: {
      type: Sequelize.INTEGER
    },
    gi_3_engie: {
      type: Sequelize.STRING
    },
    gi_3: {
      type: Sequelize.STRING
    },
    gi_3_comment: {
      type: Sequelize.STRING
    },
    gi_3_impact: {
      type: Sequelize.INTEGER
    },
    gi_3_engie: {
      type: Sequelize.STRING
    }
  });

  return Gi_rule;
};