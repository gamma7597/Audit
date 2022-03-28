const db = require("../../models");
const Rh_rule = db.rh_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const rh_rule = {
        company: company,
        rh_1: "",
        rh_1_comment: "",
        rh_1_impact: 0,
        rh_1_engie: "",
        rh_2: "",
        rh_2_comment: "",
        rh_2_impact: 0,
        rh_2_engie: "",
        partnerId: req.body.partnerId
    };
        
    Rh_rule.create(rh_rule)
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

    Rh_rule.findAll({ where: { company: company }})
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
    Rh_rule.update(req.body, {
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