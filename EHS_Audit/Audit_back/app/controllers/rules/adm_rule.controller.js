const db = require("../../models");
const Adm_rule = db.adm_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const adm_rule = {
        company: company,
        adm_1: "",
        adm_1_comment: "",
        adm_1_impact: 0,
        adm_1_engie: "",
        adm_2: "",
        adm_2_comment: "",
        adm_2_impact: 0,
        adm_2_engie: "",
        adm_3: "",
        adm_3_comment: "",
        adm_3_impact: 0,
        adm_3_engie: "",
        adm_4: "",
        adm_4_comment: "",
        adm_4_impact: 0,
        adm_4_engie: "",
        adm_5: "",
        adm_5_comment: "",
        adm_5_impact: 0,
        adm_5_engie: "",
        adm_6: "",
        adm_6_comment: "",
        adm_6_impact: 0,
        adm_6_engie: "",
        adm_7: "",
        adm_7_comment: "",
        adm_7_impact: 0,
        adm_7_engie: "",
        partnerId: req.body.partnerId
    };
    Adm_rule.create(adm_rule)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the contact.",
            });
        });
    
};

exports.findAll = (req, res) => {

    const company = req.params.company;

    Adm_rule.findAll({ where: { company: company }})
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
    Adm_rule.update(req.body, {
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