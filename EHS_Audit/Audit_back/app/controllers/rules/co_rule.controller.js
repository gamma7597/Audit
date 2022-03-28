const db = require("../../models");
const Co_rule = db.co_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const co_rule = {
        company: company,
        co_1: "", 
        co_1_comment: "",
        co_2: "",
        co_2_comment: "",
        co_3: "",
        co_3_comment: "",
        co_4: "",
        co_4_comment: "",
        co_5: "",
        co_5_comment: "",
        co_6: "",
        co_6_comment: "",
        partnerId: req.body.partnerId
    };
        
    Co_rule.create(co_rule)
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

    Co_rule.findAll({ where: { company: company }})
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
    Co_rule.update(req.body, {
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

