const db = require("../../models");
const Tdt_rule = db.tdt_rules;

exports.create = (req, res) => {

    const company = req.params.company
    const tdt_rule = {
        company: company,
        tdt_1: "", 
        tdt_1_comment: "",
        tdt_2: "",
        tdt_2_comment: "",
        tdt_3: "",
        tdt_3_comment: "",
        tdt_4: "",
        tdt_4_comment: "",
        tdt_5: "",
        tdt_5_comment: "",
        partnerId: req.body.partnerId
    };
        
    Tdt_rule.create(tdt_rule)
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

    Tdt_rule.findAll({ where: { company: company }})
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
    console.log(company)
    Tdt_rule.update(req.body, {
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