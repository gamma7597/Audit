const db = require("../../models");
const Rgpd_rule = db.rgpd_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const rgpd_rule = {
        company: company,
        rgpd_1: "",
        rgpd_1_comment: "",
        rgpd_1_impact: 0,
        rgpd_1_engie: "",
        rgpd_2: "",
        rgpd_2_comment: "",
        rgpd_2_impact: 0,
        rgpd_2_engie: "",
        partnerId: req.body.partnerId
    };

    if(rgpd_rule.company != null && rgpd_rule.rgpd_1 != null && rgpd_rule.rgpd_2 != null) {
        if(rgpd_rule.company.toUpperCase() && rgpd_rule.rgpd_1_comment.length <= 300 && rgpd_rule.rgpd_1_engie.length <= 300
            && rgpd_rule.rgpd_2_comment.length <= 300 && rgpd_rule.rgpd_2_engie.length <= 300) {
        
            Rgpd_rule.create(rgpd_rule)
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

        Rgpd_rule.findAll({ where: { company: company }})
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

    if(req.body.company != null && req.body.rgpd_1 != null && req.body.rgpd_2 != null) {
        if(req.body.company.toUpperCase() && req.body.rgpd_1_comment.length <= 300 && req.body.rgpd_1_engie.length <= 300
            && req.body.rgpd_2_comment.length <= 300 && req.body.rgpd_2_engie.length <= 300) {
                
            Rgpd_rule.update(req.body, {
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