module.exports = (sequelize, Sequelize) => {
  const Partner = sequelize.define("partner", {
    company: {
      type: Sequelize.STRING,
    },
    contract_number: {
      type: Sequelize.INTEGER
    },
    location: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });

  return Partner;
};