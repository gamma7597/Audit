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

    if(tdt_rule.company != null && tdt_rule.tdt_1 != null && tdt_rule.tdt_2 != null && tdt_rule.tdt_3 != null && tdt_rule.tdt_4 != null && tdt_rule.tdt_5 != null ) {
        if(tdt_rule.company.toUpperCase() && tdt_rule.tdt_1_comment.length <= 300
            && tdt_rule.tdt_2_comment.length <= 300
            && tdt_rule.tdt_3_comment.length <= 300
            && tdt_rule.tdt_4_comment.length <= 300
            && tdt_rule.tdt_5_comment.length <= 300) {
        
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
        }
    }
};

exports.findAll = (req, res) => {

    const company = req.params.company;

    if (company != null && company.toUpperCase()) {

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
    }
};

exports.update = (req, res) => {
    
    const company = req.params.company;

    if(req.body.company != null && req.body.tdt_1 != null && req.body.tdt_2 != null && req.body.tdt_3 != null && req.body.tdt_4 != null && req.body.tdt_5 != null ) {
        if(req.body.company.toUpperCase() && req.body.tdt_1_comment.length <= 300
            && req.body.tdt_2_comment.length <= 300
            && req.body.tdt_3_comment.length <= 300
            && req.body.tdt_4_comment.length <= 300
            && req.body.tdt_5_comment.length <= 300) {

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
        }
    }
};