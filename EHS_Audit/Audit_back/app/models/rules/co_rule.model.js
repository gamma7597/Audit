module.exports = (sequelize, Sequelize) => {
  const Co_rule = sequelize.define("co_rule", {
    company: {
      type: Sequelize.STRING
    },
    co_1: {
      type: Sequelize.STRING
    },
    co_1_comment: {
      type: Sequelize.STRING
    },
    co_2: {
      type: Sequelize.STRING
    },
    co_2_comment: {
      type: Sequelize.STRING
    },
    co_3: {
      type: Sequelize.STRING
    },
    co_3_comment: {
      type: Sequelize.STRING
    },
    co_4: {
      type: Sequelize.STRING
    },
    co_4_comment: {
      type: Sequelize.STRING
    },
    co_5: {
      type: Sequelize.STRING
    },
    co_5_comment: {
      type: Sequelize.STRING
    },
    co_6: {
      type: Sequelize.STRING
    },
    co_6_comment: {
      type: Sequelize.STRING
    }
  });

  return Co_rule;
};