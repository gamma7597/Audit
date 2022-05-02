const db = require("../models");
const Employee = db.employees;

exports.create = (req, res) => {

  const company = req.params.company

  const employee = {
    company: company,
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    job: req.body.job,
    mail: req.body.mail,
    phone: req.body.phone,
    work_place: req.body.work_place,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    laptop: req.body.laptop,
    desktop: req.body.desktop,
    office_admin_user: req.body.office_admin_user,
    gid: req.body.gid,
    office_account_d79: req.body.office_account_d79,
    functional_access: req.body.functional_access,
    technical_access: req.body.technical_access,
    salesforce_access: req.body.salesforce_access,
    gazelle_erp_access: req.body.gazelle_erp_access,
    other_access: req.body.other_access,
    comment: req.body.comment,
    vpn_access: req.body.vpn_access,
    okta_mfa_access: req.body.okta_mfa_access,
    partnerId: req.body.partnerId
  };
  Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the employee."
      });
    });
};

exports.findAll = (req, res) => {

  const company = req.params.company;
  Employee.findAll({ where: { company: company } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    });
};

/*exports.findOne = (req, res) => {
    const last_name = req.params.last_name;
    Contact.findOne({ where: { last_name: last_name } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Contact with last_name=${last_name}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Contact with last_name=" + last_name
            });
        });
};
*/
exports.update = (req, res) => {
    const last_name = req.params.last_name;

    Employee.update(req.body, {
        where: { last_name: last_name }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contact was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Contact with last_name=${last_name}. Maybe Contact was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Contact with last_name=" + last_name
            });
        });
};

exports.delete = (req, res) => {
    const last_name = req.params.last_name;

    Employee.destroy({
        where: { last_name: last_name }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contact was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Contact with last_name=${last_name}. Maybe Contact was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Contact with last_name=" + last_name
            });
        });
};