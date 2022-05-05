const db = require("../../models");
const Gi_rule = db.gi_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const gi_rule = {
        company: company,
        gi_1: "",
        gi_1_comment: "",
        gi_1_impact: 0,
        gi_1_engie: "",
        gi_2: "",
        gi_2_comment: "",
        gi_2_impact: 0,
        gi_2_engie: "",
        gi_3: "",
        gi_3_comment: "",
        gi_3_impact: 0,
        gi_3_engie: "",
        partnerId: req.body.partnerId
    };

    if(gi_rule.company != null && gi_rule.gi_1 != null && gi_rule.gi_2 != null && gi_rule.gi_3 != null) {
        if(gi_rule.company.toUpperCase() && gi_rule.gi_1_comment.length <= 300 && gi_rule.gi_1_engie.length <= 300
            && gi_rule.gi_2_comment.length <= 300 && gi_rule.gi_2_engie.length <= 300
            && gi_rule.gi_3_comment.length <= 300 && gi_rule.gi_3_engie.length <= 300) {
        
            Gi_rule.create(gi_rule)
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

    if (company != null && company.toUpperCase()) {

        Gi_rule.findAll({ where: { company: company }})
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

    if(req.body.company != null && req.body.gi_1 != null && req.body.gi_2 != null && req.body.gi_3 != null) {
        if(req.body.company.toUpperCase() && req.body.gi_1_comment.length <= 300 && req.body.gi_1_engie.length <= 300
            && req.body.gi_2_comment.length <= 300 && req.body.gi_2_engie.length <= 300
            && req.body.gi_3_comment.length <= 300 && req.body.gi_3_engie.length <= 300) {
                
            Gi_rule.update(req.body, {
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
        }
    }
};