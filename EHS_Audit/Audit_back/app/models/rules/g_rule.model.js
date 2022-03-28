module.exports = (sequelize, Sequelize) => {
  const G_rule = sequelize.define("g_rule", {
    company: {
      type: Sequelize.STRING
    },
    g_1: {
      type: Sequelize.STRING
    },
    g_1_comment: {
      type: Sequelize.STRING
    },
    g_1_impact: {
      type: Sequelize.INTEGER
    },
    g_1_engie: {
      type: Sequelize.STRING
    },
    g_2: {
      type: Sequelize.STRING
    },
    g_2_comment: {
      type: Sequelize.STRING
    },
    g_2_impact: {
      type: Sequelize.INTEGER
    },
    g_2_engie: {
      type: Sequelize.STRING
    },
    g_3: {
      type: Sequelize.STRING
    },
    g_3_comment: {
      type: Sequelize.STRING
    },
    g_3_impact: {
      type: Sequelize.INTEGER
    },
    g_3_engie: {
      type: Sequelize.STRING
    },
    g_4: {
      type: Sequelize.STRING
    },
    g_4_comment: {
      type: Sequelize.STRING
    },
    g_4_impact: {
      type: Sequelize.INTEGER
    },
    g_4_engie: {
      type: Sequelize.STRING
    },
    g_5: {
      type: Sequelize.STRING
    },
    g_5_comment: {
      type: Sequelize.STRING
    },
    g_5_impact: {
      type: Sequelize.INTEGER
    },
    g_5_engie: {
      type: Sequelize.STRING
    }
  });

  return G_rule;
};