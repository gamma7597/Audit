const db = require("../../models");
const Rf_rule = db.rf_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const rf_rule = {
        company: company,
        rf_1: "",
        rf_1_comment: "",
        rf_1_impact: 0,
        rf_1_engie: "",
        rf_2: "",
        rf_2_comment: "",
        rf_2_impact: 0,
        rf_2_engie: "",
        rf_3: "",
        rf_3_comment: "",
        rf_3_impact: 0,
        rf_3_engie: "",
        partnerId: req.body.partnerId
    };
        
    Rf_rule.create(rf_rule)
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

    Rf_rule.findAll({ where: { company: company }})
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
    Rf_rule.update(req.body, {
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