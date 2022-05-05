const db = require("../../models");
const Cd_rule = db.cd_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const cd_rule = {
        company: company,
        cd_1: "",
        cd_1_comment: "",
        cd_1_impact: 0,
        cd_1_engie: "",
        cd_2: "",
        cd_2_comment: "",
        cd_2_impact: 0,
        cd_2_engie: "",
        partnerId: req.body.partnerId
    };
        
    if(cd_rule.company != null && cd_rule.cd_1 != null && cd_rule.cd_2 != null ) {
        if(cd_rule.company.toUpperCase() && cd_rule.cd_1_comment.length <= 300 && cd_rule.cd_1_engie.length <= 300
            && cd_rule.cd_2_comment.length <= 300 && cd_rule.cd_2_engie.length <= 300) {

            Cd_rule.create(cd_rule)
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

        Cd_rule.findAll({ where: { company: company }})
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

    if(req.body.company != null && req.body.cd_1 != null && req.body.cd_2 != null) {
        if(req.body.company.toUpperCase() && req.body.cd_1_comment.length <= 300 && req.body.cd_1_engie.length <= 300
            && req.body.cd_2_comment.length <= 300 && req.body.cd_2_engie.length <= 300) {
                
            Cd_rule.update(req.body, {
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