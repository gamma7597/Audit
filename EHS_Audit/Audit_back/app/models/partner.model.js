module.exports = (sequelize, Sequelize) => {
  const Partner = sequelize.define("partner", {
    company: {
      type: Sequelize.STRING
    },
    contract_number: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    start_service: {
      type: Sequelize.DATE
    },
    end_service: {
      type: Sequelize.DATE
    }
  });

  return Partner;
};