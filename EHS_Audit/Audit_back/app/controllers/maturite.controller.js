const db = require("../models");
const Maturite = db.maturites;

exports.create = (req, res) => {

    const maturite = {
        company: req.body.company,
        maturite: 0,
        impact: 0,
        partnerId: req.body.partnerId
    };


    if( maturite.company != null && maturite.maturite != null && maturite.impact != null ){
        if (maturite.company.toUpperCase() && maturite.company.length <= 30) {
            
            Maturite.create(maturite)
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the Maturity."
                    });
                });
        }
    }
    
};

exports.findAll = (req, res) => {
    Maturite.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving maturites."
            });
        });
};

exports.update = (req, res) => {
    const company = req.params.company;

    if( company != null && req.body.company && req.body.maturite != null && req.body.impact != null ){
        if (company.toUpperCase() && req.body.company.toUpperCase()) {

            Maturite.update(req.body, {
                where: { company: company }
            })
                .then(() => {
                    res.send(res.data)
                })
                .catch(err => {
                    res.status(500).send({
                        message: "Error updating Maturite with company=" + company
                    });
                });
        }
    }
};
