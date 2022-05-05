const db = require("../../models");
const A_rule = db.a_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const a_rule = {
        company: company,
        a_1: "",
        a_1_comment: "",
        a_1_impact: 0,
        a_1_engie: "",
        a_2: "",
        a_2_comment: "",
        a_2_impact: 0,
        a_2_engie: "",
        a_3: "",
        a_3_comment: "",
        a_3_impact: 0,
        a_3_engie: "",
        a_4: "",
        a_4_comment: "",
        a_4_impact: 0,
        a_4_engie: "",
        a_5: "",
        a_5_comment: "",
        a_5_impact: 0,
        a_5_engie: "",
        a_6: "",
        a_6_comment: "",
        a_6_impact: 0,
        a_6_engie: "",
        partnerId: req.body.partnerId
    };

    if(a_rule.company != null && a_rule.a_1 != null && a_rule.a_2 != null && a_rule.a_3 != null && a_rule.a_4 != null && a_rule.a_5 != null && a_rule.a_6 != null ) {
        if(a_rule.company.toUpperCase() && a_rule.a_1_comment.length <= 300 && a_rule.a_1_engie.length <= 300
            && a_rule.a_2_comment.length <= 300 && a_rule.a_2_engie.length <= 300
            && a_rule.a_3_comment.length <= 300 && a_rule.a_3_engie.length <= 300
            && a_rule.a_4_comment.length <= 300 && a_rule.a_4_engie.length <= 300
            && a_rule.a_5_comment.length <= 300 && a_rule.a_5_engie.length <= 300
            && a_rule.a_6_comment.length <= 300 && a_rule.a_6_engie.length <= 300) {
            
            A_rule.create(a_rule)
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

        A_rule.findAll({ where: { company: company }})
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

    if(req.body.company != null && req.body.a_1 != null && req.body.a_2 != null && req.body.a_3 != null && req.body.a_4 != null && req.body.a_5 != null && req.body.a_6 != null ) {
        if(req.body.company.toUpperCase() && req.body.a_1_comment.length <= 300 && req.body.a_1_engie.length <= 300
            && req.body.a_2_comment.length <= 300 && req.body.a_2_engie.length <= 300
            && req.body.a_3_comment.length <= 300 && req.body.a_3_engie.length <= 300
            && req.body.a_4_comment.length <= 300 && req.body.a_4_engie.length <= 300
            && req.body.a_5_comment.length <= 300 && req.body.a_5_engie.length <= 300
            && req.body.a_6_comment.length <= 300 && req.body.a_6_engie.length <= 300) {

            A_rule.update(req.body, {
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
