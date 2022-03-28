module.exports = (sequelize, Sequelize) => {
  const Pt_rule = sequelize.define("pt_rule", {
    company: {
      type: Sequelize.STRING
    },
    pt_1: {
      type: Sequelize.STRING
    },
    pt_1_comment: {
      type: Sequelize.STRING
    },
    pt_1_impact: {
      type: Sequelize.INTEGER
    },
    pt_1_engie: {
      type: Sequelize.STRING
    },
    pt_2: {
      type: Sequelize.STRING
    },
    pt_2_comment: {
      type: Sequelize.STRING
    },
    pt_2_impact: {
      type: Sequelize.INTEGER
    },
    pt_2_engie: {
      type: Sequelize.STRING
    },
    pt_3: {
      type: Sequelize.STRING
    },
    pt_3_comment: {
      type: Sequelize.STRING
    },
    pt_3_impact: {
      type: Sequelize.INTEGER
    },
    pt_3_engie: {
      type: Sequelize.STRING
    },
    pt_4: {
      type: Sequelize.STRING
    },
    pt_4_comment: {
      type: Sequelize.STRING
    },
    pt_4_impact: {
      type: Sequelize.INTEGER
    },
    pt_4_engie: {
      type: Sequelize.STRING
    },
    pt_5: {
      type: Sequelize.STRING
    },
    pt_5_comment: {
      type: Sequelize.STRING
    },
    pt_5_impact: {
      type: Sequelize.INTEGER
    },
    pt_5_engie: {
      type: Sequelize.STRING
    }
  });

  return Pt_rule;
};