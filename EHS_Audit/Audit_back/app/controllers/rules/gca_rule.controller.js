const db = require("../../models");
const Gca_rule = db.gca_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const gca_rule = {
        company: company,
        gca_1: "",
        gca_1_comment: "",
        gca_1_impact: 0,
        gca_1_engie: "",
        gca_2: "",
        gca_2_comment: "",
        gca_2_impact: 0,
        gca_2_engie: "",
        gca_3: "",
        gca_3_comment: "",
        gca_3_impact: 0,
        gca_3_engie: "",
        partnerId: req.body.partnerId
    };
        
    Gca_rule.create(gca_rule)
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

    Gca_rule.findAll({ where: { company: company }})
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
    Gca_rule.update(req.body, {
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