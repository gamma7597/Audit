const db = require("../../models");
const Pt_rule = db.pt_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const pt_rule = {
        company: company,
        pt_1: "",
        pt_1_comment: "",
        pt_1_impact: 0,
        pt_1_engie: "",
        pt_2: "",
        pt_2_comment: "",
        pt_2_impact: 0,
        pt_2_engie: "",
        pt_3: "",
        pt_3_comment: "",
        pt_3_impact: 0,
        pt_3_engie: "",
        pt_4: "",
        pt_4_comment: "",
        pt_4_impact: 0,
        pt_4_engie: "",
        pt_5: "",
        pt_5_comment: "",
        pt_5_impact: 0,
        pt_5_engie: "",
        partnerId: req.body.partnerId
    };

    if(pt_rule.company != null && pt_rule.pt_1 != null && pt_rule.pt_2 != null && pt_rule.pt_3 != null && pt_rule.pt_4 != null && pt_rule.pt_5 != null) {
        if(pt_rule.company.toUpperCase() && pt_rule.pt_1_comment.length <= 300 && pt_rule.pt_1_engie.length <= 300
            && pt_rule.pt_2_comment.length <= 300 && pt_rule.pt_2_engie.length <= 300
            && pt_rule.pt_3_comment.length <= 300 && pt_rule.pt_3_engie.length <= 300
            && pt_rule.pt_4_comment.length <= 300 && pt_rule.pt_4_engie.length <= 300
            && pt_rule.pt_5_comment.length <= 300 && pt_rule.pt_5_engie.length <= 300) {
        
            Pt_rule.create(pt_rule)
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

        Pt_rule.findAll({ where: { company: company }})
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

    if(req.body.company != null && req.body.pt_1 != null && req.body.pt_2 != null && req.body.pt_3 != null && req.body.pt_4 != null && req.body.pt_5 != null) {
        if(req.body.company.toUpperCase() && req.body.pt_1_comment.length <= 300 && req.body.pt_1_engie.length <= 300
            && req.body.pt_2_comment.length <= 300 && req.body.pt_2_engie.length <= 300
            && req.body.pt_3_comment.length <= 300 && req.body.pt_3_engie.length <= 300
            && req.body.pt_4_comment.length <= 300 && req.body.pt_4_engie.length <= 300
            && req.body.pt_5_comment.length <= 300 && req.body.pt_5_engie.length <= 300) {
                
            Pt_rule.update(req.body, {
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