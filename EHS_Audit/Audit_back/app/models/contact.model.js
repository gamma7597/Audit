module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        company: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        mail: {
            type: Sequelize.STRING
        },
        job: {
            type: Sequelize.STRING
        }
    });

    return Contact;
};