const db = require("../../models");
const Ie_rule = db.ie_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const ie_rule = {
        company: company,
        ie_1: "",
        ie_1_comment: "",
        ie_1_impact: 0,
        ie_1_engie: "",
        ie_2: "",
        ie_2_comment: "",
        ie_2_impact: 0,
        ie_2_engie: "",
        partnerId: req.body.partnerId
    };

    if(ie_rule.company != null && ie_rule.ie_1 != null && ie_rule.ie_2 != null) {
        if(ie_rule.company.toUpperCase() && ie_rule.ie_1_comment.length <= 300 && ie_rule.ie_1_engie.length <= 300
            && ie_rule.ie_2_comment.length <= 300 && ie_rule.ie_2_engie.length <= 300) {
        
            Ie_rule.create(ie_rule)
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

        Ie_rule.findAll({ where: { company: company }})
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

    if(req.body.company != null && req.body.ie_1 != null && req.body.ie_2 != null) {
        if(req.body.company.toUpperCase() && req.body.ie_1_comment.length <= 300 && req.body.ie_1_engie.length <= 300
            && req.body.ie_2_comment.length <= 300 && req.body.ie_2_engie.length <= 300) {

            Ie_rule.update(req.body, {
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