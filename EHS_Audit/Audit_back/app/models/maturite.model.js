module.exports = (sequelize, Sequelize) => {
  const Maturite = sequelize.define("maturite", {
    company: {
      type: Sequelize.STRING
    },
    maturite: {
      type: Sequelize.FLOAT
    },
    impact: {
      type: Sequelize.FLOAT
    }
  });

  return Maturite;
};