const db = require("../../models");
const G_rule = db.g_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const g_rule = {
        company: company,
        g_1: "",
        g_1_comment: "",
        g_1_impact: 0,
        g_1_engie: "",
        g_2: "",
        g_2_comment: "",
        g_2_impact: 0,
        g_2_engie: "",
        g_3: "",
        g_3_comment: "",
        g_3_impact: 0,
        g_3_engie: "",
        g_4: "",
        g_4_comment: "",
        g_4_impact: 0,
        g_4_engie: "",
        g_5: "",
        g_5_comment: "",
        g_5_impact: 0,
        g_5_engie: "",
        partnerId: req.body.partnerId
    };
        
    G_rule.create(g_rule)
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

    G_rule.findAll({ where: { company: company }})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                console.log("erreur")
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
    G_rule.update(req.body, {
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