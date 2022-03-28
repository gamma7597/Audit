const db = require("../../models");
const Se_rule = db.se_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const se_rule = {
        company: company,
        se_1: "",
        se_1_comment: "",
        se_1_impact: 0,
        se_1_engie: "",
        se_2: "",
        se_2_comment: "",
        se_2_impact: 0,
        se_2_engie: "",
        se_3: "",
        se_3_comment: "",
        se_3_impact: 0,
        se_3_engie: "",
        se_4: "",
        se_4_comment: "",
        se_4_impact: 0,
        se_4_engie: "",
        se_5: "",
        se_5_comment: "",
        se_5_impact: 0,
        se_5_engie: "",
        se_6: "",
        se_6_comment: "",
        se_6_impact: 0,
        se_6_engie: "",
        partnerId: req.body.partnerId
    };
        
    Se_rule.create(se_rule)
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

    Se_rule.findAll({ where: { company: company }})
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
    Se_rule.update(req.body, {
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