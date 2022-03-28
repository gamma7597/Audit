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
    
};

exports.findAll = (req, res) => {

    const company = req.params.company;

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
};

exports.update = (req, res) => {
    const company = req.params.company;
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
};