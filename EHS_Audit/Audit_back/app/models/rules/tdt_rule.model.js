module.exports = (sequelize, Sequelize) => {
  const Tdt_rule = sequelize.define("tdt_rule", {
    company: {
      type: Sequelize.STRING
    },
    tdt_1: {
      type: Sequelize.STRING
    },
    tdt_1_comment: {
      type: Sequelize.STRING
    },
    tdt_2: {
      type: Sequelize.STRING
    },
    tdt_2_comment: {
      type: Sequelize.STRING
    },
    tdt_3: {
      type: Sequelize.STRING
    },
    tdt_3_comment: {
      type: Sequelize.STRING
    },
    tdt_4: {
      type: Sequelize.STRING
    },
    tdt_4_comment: {
      type: Sequelize.STRING
    },
    tdt_5: {
      type: Sequelize.STRING
    },
    tdt_5_comment: {
      type: Sequelize.STRING
    }
  });

  return Tdt_rule;
};