const db = require("../models");
const Contact = db.contacts;

exports.create = (req, res) => {

    const company = req.params.company
    
    const contact = {
        company: company,
        last_name: req.body.last_name, 
        first_name: req.body.first_name,
        phone: req.body.phone,
        mail: req.body.mail,
        job: req.body.job,
        partnerId: req.body.partnerId
    };

    var phone_regex = new RegExp(/(?:(?:\+|00)33|0)[1-9](?:[\s.-]*\d{2}){4}/)
    var mail_regex = new RegExp(/\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+/)

    if(contact.company != null && contact.last_name != null && contact.first_name != null && contact.phone != null && contact.mail != null && contact.job != null) {
        if (contact.company.toUpperCase() && contact.company.length <= 30 && contact.last_name.length <= 30 && contact.first_name.length <= 30 && phone_regex.test(contact.phone) && mail_regex.test(contact.mail) && contact.job.length <= 30 ) {
            
            Contact.create(contact)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the contact."
                    });
                });

        }
    }
};

exports.findAll = (req, res) => {

    const company = req.params.company;

    if(company != null && company.toUpperCase()) {
        Contact.findAll({ where: { company: company }})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving contacts."
                });
            });
    }
};

exports.findOne = (req, res) => {

    const company = req.params.company;
    const last_name = req.params.last_name;

    if(company != null && company.toUpperCase() && last_name != null) {
        Contact.findOne({ where: { company: company, last_name: last_name }})
            .then(data => {
                if (data) {
                    res.send(data);
                } else {
                    res.status(404).send({
                        message: `Cannot find Partner with company=${company}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Partner with company=" + company
                });
            });
    }
};

exports.update = (req, res) => {

    const last_name = req.body.last_name;

    var phone_regex = new RegExp(/(?:(?:\+|00)33|0)[1-9](?:[\s.-]*\d{2}){4}/)
    var mail_regex = new RegExp(/\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+/)

    if( last_name != null && req.body.company && req.body.last_name != null && req.body.first_name != null && req.body.phone != null && req.body.mail != null && req.body.job != null ){
        if (last_name.length <= 30 && req.body.company.toUpperCase() && req.body.company.length <= 30 && req.body.last_name.length <= 30 && req.body.first_name.length <= 30 && phone_regex.test(req.body.phone) && mail_regex.test(req.body.mail) && req.body.job.length <= 30) {


            Contact.update(req.body, {
                where: { last_name: last_name }
            })
                .then(() => {
                    res.send(res.data)
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Error updating Contact with last name =" + last_name
                    });
                });

        }
    }
};

exports.delete = (req, res) => {
    const last_name = req.params.last_name;

    if(last_name != null && last_name.length <= 30 ) {

        Contact.destroy({
            where: { last_name: last_name }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Contact was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete Contact with last_name=${last_name}. Maybe Contact was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Contact with last_name=" + last_name
                });
            });
    }
};