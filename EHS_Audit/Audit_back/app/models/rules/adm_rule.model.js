module.exports = (sequelize, Sequelize) => {
  const Adm_rule = sequelize.define("adm_rule", {
    company: {
      type: Sequelize.STRING
    },
    adm_1: {
      type: Sequelize.STRING
    },
    adm_1_comment: {
      type: Sequelize.STRING
    },
    adm_1_impact: {
      type: Sequelize.FLOAT
    },
    adm_1_engie: {
      type: Sequelize.STRING
    },
    adm_2: {
      type: Sequelize.STRING
    },
    adm_2_comment: {
      type: Sequelize.STRING
    },
    adm_2_impact: {
      type: Sequelize.FLOAT
    },
    adm_2_engie: {
      type: Sequelize.STRING
    },
    adm_3: {
      type: Sequelize.STRING
    },
    adm_3_comment: {
      type: Sequelize.STRING
    },
    adm_3_impact: {
      type: Sequelize.FLOAT
    },
    adm_3_engie: {
      type: Sequelize.STRING
    },
    adm_4: {
      type: Sequelize.STRING
    },
    adm_4_comment: {
      type: Sequelize.STRING
    },
    adm_4_impact: {
      type: Sequelize.FLOAT
    },
    adm_4_engie: {
      type: Sequelize.STRING
    },
    adm_5: {
      type: Sequelize.STRING
    },
    adm_5_comment: {
      type: Sequelize.STRING
    },
    adm_5_impact: {
      type: Sequelize.FLOAT
    },
    adm_5_engie: {
      type: Sequelize.STRING
    },
    adm_6: {
      type: Sequelize.STRING
    },
    adm_6_comment: {
      type: Sequelize.STRING
    },
    adm_6_impact: {
      type: Sequelize.FLOAT
    },
    adm_6_engie: {
      type: Sequelize.STRING
    },
    adm_7: {
      type: Sequelize.STRING
    },
    adm_7_comment: {
      type: Sequelize.STRING
    },
    adm_7_impact: {
      type: Sequelize.FLOAT
    },
    adm_7_engie: {
      type: Sequelize.STRING
    }
  });

  return Adm_rule;
};