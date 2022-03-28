const db = require("../../models");
const Ca_rule = db.ca_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const ca_rule = {
        company: company,
        ca_1: "",
        ca_1_comment: "",
        ca_1_impact: 0,
        ca_1_engie: "",
        ca_2: "",
        ca_2_comment: "",
        ca_2_impact: 0,
        ca_2_engie: "",
        ca_3: "",
        ca_3_comment: "",
        ca_3_impact: 0,
        ca_3_engie: "",
        ca_4: "",
        ca_4_comment: "",
        ca_4_impact: 0,
        ca_4_engie: "",
        ca_5: "",
        ca_5_comment: "",
        ca_5_impact: 0,
        ca_5_engie: "",
        ca_6: "",
        ca_6_comment: "",
        ca_6_impact: 0,
        ca_6_engie: "",
        ca_7: "",
        ca_7_comment: "",
        ca_7_impact: 0,
        ca_7_engie: "",
        ca_8: "",
        ca_8_comment: "",
        ca_8_impact: 0,
        ca_8_engie: "",
        ca_9: "",
        ca_9_comment: "",
        ca_9_impact: 0,
        ca_9_engie: "",
        ca_10: "",
        ca_10_comment: "",
        ca_10_impact: 0,
        ca_10_engie: "",
        partnerId: req.body.partnerId
    };
        
    Ca_rule.create(ca_rule)
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

    Ca_rule.findAll({ where: { company: company }})
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
    Ca_rule.update(req.body, {
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