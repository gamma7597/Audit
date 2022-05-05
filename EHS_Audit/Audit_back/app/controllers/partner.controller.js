const db = require("../models");
const Partner = db.partners;

exports.create = (req, res) => {

    const partner = {
        company: req.body.company,
        contract_number: req.body.contract_number,
        location: req.body.location,
        description: req.body.description,
        start_service: req.body.start_service,
        end_service: req.body.end_service
    };

    if( partner.company != null && partner.contract_number != null && partner.location != null && partner.description != null && partner.start_service != null && partner.end_service != null ){
        if (partner.company.toUpperCase() && partner.company.length <= 30 && partner.location.length <= 30 && partner.description.length <= 100 && partner.end_service >= partner.start_service) {
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
        }
    }

    
};

exports.findAll = (req, res) => {
    Partner.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving partners."
            });
        });
};

exports.findOne = (req, res) => {

    const company = req.params.company;

    if(company != null && company.toUpperCase()) {
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
    }
};

exports.update = (req, res) => {
    const company = req.params.company;

    if( company != null && req.body.company && req.body.contract_number != null && req.body.location != null && req.body.description != null && req.body.start_service != null && req.body.end_service != null ){
        if (company.toUpperCase() && req.body.company.toUpperCase() && company.length <= 30 && req.body.company.length <= 30 && req.body.location.length <= 30 && req.body.description.length <= 100 && req.body.end_service >= req.body.start_service) {

            Partner.update(req.body, {
                where: { company: company }
            })
                .then(() => {
                    console.log(res.data)
                    res.send(res.data)
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Error updating Partner with company=" + company
                    });
                });
        }
    }
};

exports.delete = (req, res) => {
    const company = req.params.company;

    if(company != null && company.toUpperCase()) {

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
    }
};
