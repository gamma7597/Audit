module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    company: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    job: {
      type: Sequelize.STRING
    },
    mail: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.INTEGER
    },
    work_place: {
      type: Sequelize.STRING
    },
    start_date: {
      type: Sequelize.DATE
    },
    end_date: {
      type: Sequelize.DATE
    },
    laptop: {
      type: Sequelize.STRING
    },
    desktop: {
      type: Sequelize.STRING
    },
    office_admin_user: {
      type: Sequelize.BOOLEAN
    },
    gid: {
      type: Sequelize.INTEGER
    },
    office_account_d79: {
      type: Sequelize.BOOLEAN
    },
    functional_access: {
      type: Sequelize.BOOLEAN
    },
    technical_access: {
      type: Sequelize.BOOLEAN
    },
    salesforce_access: {
      type: Sequelize.BOOLEAN
    },
    gazelle_erp_access: {
      type: Sequelize.BOOLEAN
    },
    other_access: {
      type: Sequelize.STRING
    },
    comment: {
      type: Sequelize.STRING
    },
    vpn_access: {
      type: Sequelize.STRING
    },
    okta_mfa_access: {
      type: Sequelize.BOOLEAN
    },
  });

  return Employee;
};