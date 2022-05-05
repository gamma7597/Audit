const db = require("../../models");
const C_rule = db.c_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const c_rule = {
        company: company,
        c_1: "",
        c_1_comment: "",
        c_1_impact: 0,
        c_1_engie: "",
        c_2: "",
        c_2_comment: "",
        c_2_impact: 0,
        c_2_engie: "",
        c_3: "",
        c_3_comment: "",
        c_3_impact: 0,
        c_3_engie: "",
        c_4: "",
        c_4_comment: "",
        c_4_impact: 0,
        c_4_engie: "",
        c_5: "",
        c_5_comment: "",
        c_5_impact: 0,
        c_5_engie: "",
        c_6: "",
        c_6_comment: "",
        c_6_impact: 0,
        c_6_engie: "",
        c_7: "",
        c_7_comment: "",
        c_7_impact: 0,
        c_7_engie: "",
        c_8: "",
        c_8_comment: "",
        c_8_impact: 0,
        c_8_engie: "",
        partnerId: req.body.partnerId
    };

    if(c_rule.company != null && c_rule.c_1 != null && c_rule.c_2 != null && c_rule.c_3 != null && c_rule.c_4 != null && c_rule.c_5 != null && c_rule.c_6 != null && c_rule.c_7 != null && c_rule.c_8 != null ) {
        if(c_rule.company.toUpperCase() && c_rule.c_1_comment.length <= 300 && c_rule.c_1_engie.length <= 300
            && c_rule.c_2_comment.length <= 300 && c_rule.c_2_engie.length <= 300
            && c_rule.c_3_comment.length <= 300 && c_rule.c_3_engie.length <= 300
            && c_rule.c_4_comment.length <= 300 && c_rule.c_4_engie.length <= 300
            && c_rule.c_5_comment.length <= 300 && c_rule.c_5_engie.length <= 300
            && c_rule.c_6_comment.length <= 300 && c_rule.c_6_engie.length <= 300
            && c_rule.c_7_comment.length <= 300 && c_rule.c_7_engie.length <= 300
            && c_rule.c_8_comment.length <= 300 && c_rule.c_8_engie.length <= 300) {
        
            C_rule.create(c_rule)
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

        C_rule.findAll({ where: { company: company }})
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

    if(req.body.company != null && req.body.c_1 != null && req.body.c_2 != null && req.body.c_3 != null && req.body.c_4 != null && req.body.c_5 != null && req.body.c_6 != null && req.body.c_7 != null && req.body.c_8 != null ) {
        if(req.body.company.toUpperCase() && req.body.c_1_comment.length <= 300 && req.body.c_1_engie.length <= 300
            && req.body.c_2_comment.length <= 300 && req.body.c_2_engie.length <= 300
            && req.body.c_3_comment.length <= 300 && req.body.c_3_engie.length <= 300
            && req.body.c_4_comment.length <= 300 && req.body.c_4_engie.length <= 300
            && req.body.c_5_comment.length <= 300 && req.body.c_5_engie.length <= 300
            && req.body.c_6_comment.length <= 300 && req.body.c_6_engie.length <= 300
            && req.body.c_7_comment.length <= 300 && req.body.c_7_engie.length <= 300
            && req.body.c_8_comment.length <= 300 && req.body.c_8_engie.length <= 300) {
                
            C_rule.update(req.body, {
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