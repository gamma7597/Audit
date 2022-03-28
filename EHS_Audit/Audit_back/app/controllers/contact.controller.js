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
};

exports.findAll = (req, res) => {

    const company = req.params.company;
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
};

/*exports.findOne = (req, res) => {
    const last_name = req.params.last_name;
    Contact.findOne({ where: { last_name: last_name } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Contact with last_name=${last_name}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Contact with last_name=" + last_name
            });
        });
};

exports.update = (req, res) => {
    const last_name = req.params.last_name;

    Contact.update(req.body, {
        where: { last_name: last_name }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contact was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Contact with last_name=${last_name}. Maybe Contact was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Contact with last_name=" + last_name
            });
        });
};

exports.delete = (req, res) => {
    const last_name = req.params.last_name;

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
};*/