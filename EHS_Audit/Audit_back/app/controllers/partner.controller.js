const db = require("../models");
const Partner = db.partners;

exports.create = (req, res) => {

    const partner = {
        company: req.body.company,
        contract_number: req.body.contract_number,
        location: req.body.location,
        description: req.body.description
    };
    Partner.create(partner)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Partner."
            });
        });
};

exports.findAll = (req, res) => {
    Partner.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            print("Test5");
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving partners."
            });
        });
};

exports.findOne = (req, res) => {

    const company = req.params.company;

    Partner.findOne({ where: { company: company }})
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
};

exports.update = (req, res) => {
    const company = req.params.company;
    Partner.update(req.body, {
        where: { company: company }
    })
        .then(() => {
            res.send(res.data)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Partner with company=" + company
            });
        });
};

exports.delete = (req, res) => {
    const company = req.params.company;

    Partner.destroy({
        where: { company: company }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Partner was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Partner with company=${company}. Maybe Partner was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Partner with company=" + company
            });
        });
};
