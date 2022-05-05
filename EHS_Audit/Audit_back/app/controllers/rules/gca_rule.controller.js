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

    if(gca_rule.company != null && gca_rule.gca_1 != null && gca_rule.gca_2 != null && gca_rule.gca_3 != null) {
        if(gca_rule.company.toUpperCase() && gca_rule.gca_1_comment.length <= 300 && gca_rule.gca_1_engie.length <= 300
            && gca_rule.gca_2_comment.length <= 300 && gca_rule.gca_2_engie.length <= 300
            && gca_rule.gca_3_comment.length <= 300 && gca_rule.gca_3_engie.length <= 300) {
        
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
        }
    }
};

exports.findAll = (req, res) => {

    const company = req.params.company;

    if (company != null && company.toUpperCase()) {

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
    }
};

exports.update = (req, res) => {
    const company = req.params.company;

    if(req.body.company != null && req.body.gca_1 != null && req.body.gca_2 != null && req.body.gca_3 != null) {
        if(req.body.company.toUpperCase() && req.body.gca_1_comment.length <= 300 && req.body.gca_1_engie.length <= 300
            && req.body.gca_2_comment.length <= 300 && req.body.gca_2_engie.length <= 300
            && req.body.gca_3_comment.length <= 300 && req.body.gca_3_engie.length <= 300) {

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
        }
    }
};