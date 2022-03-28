const db = require("../../models");
const Spe_rule = db.spe_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const spe_rule = {
        company: company,
        spe_1: "",
        spe_1_comment: "",
        spe_1_impact: 0,
        spe_1_engie: "",
        spe_2: "",
        spe_2_comment: "",
        spe_2_impact: 0,
        spe_2_engie: "",
        spe_3: "",
        spe_3_comment: "",
        spe_3_impact: 0,
        spe_3_engie: "",
        spe_4: "",
        spe_4_comment: "",
        spe_4_impact: 0,
        spe_4_engie: "",
        spe_5: "",
        spe_5_comment: "",
        spe_5_impact: 0,
        spe_5_engie: "",
        partnerId: req.body.partnerId
    };
        
    Spe_rule.create(spe_rule)
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

    Spe_rule.findAll({ where: { company: company }})
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
    Spe_rule.update(req.body, {
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