# Controllers

Les controlleurs permettent de modifier la BDD en se basant sur les models et en utilisant les informations transmisent via les routes.

Il y a un controller par model avec une fonction pour chaque route basés sur les différentes requêtes HTTP (GET / POST / PUT / DELETE).

## Exemple de controller

Voici un exemple de controller utilisé dans l'application.
C'est le controller Partner qui permet de créer de modifier la table partner.

Généralement, nous allons définir 5 fonctions :

- create (POST) pour créer une entrée dans la table.
- findAll (GET) pour récupérer tous les élements d'une table.
- findOne (GET) pour trouver un seul élément d'une table.
- update (PUT) pour modifier un élément d'une table.
- delete (DELETE) pour supprimer un élément d'une table.

Ces fonctions sont exportés pour être utilisé dans les routes.


    const db = require("../models");
    const Partner = db.partners;
    const fs = require('fs');

Dans un premier temps, on récupère le model de Partner.
fs est aussi instancié, il permettra d'effectuer des actions sur les dossiers comportant des fichiers.

Voici un exemple pour la fonction update :

    exports.update = (req, res) => {
        const company = req.params.company;

        if( company != null && req.body.company && req.body.contract_number != null && req.body.location != null && req.body.description != null && req.body.start_service != null && req.body.end_service != null ){
            if (company.toUpperCase() && req.body.company.toUpperCase() && company.length <= 30 && req.body.company.length <= 30 && req.body.location.length <= 30 && req.body.description.length <= 100 && req.body.end_service >= req.body.start_service) {

                Partner.update(req.body, {
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

On remarque que la fonction comporte req et res.
- Req est la requête HTTP, elle comporte plusieurs éléments dont les informations passées comme paramètres et celles dans le body.
- Res est la réponse HTTP, c'est ce que nous allons renvoyer au front-end grâce à l'API.

La syntaxe de ces fonction est toujours la même. On commence par récupéré les informations dans les paramètre ou dans le body si c'est nécessaire.

    const company = req.params.company;

Ensuite si la requête HTTP provient d'un envoie de formulaire (c'est le cas ici), on va vérifier les informations transmisent comme la taille, le format, etc...

    if( company != null && req.body.company && req.body.contract_number != null && req.body.location != null && req.body.description != null && req.body.start_service != null && req.body.end_service != null ){
            if (company.toUpperCase() && req.body.company.toUpperCase() && company.length <= 30 && req.body.company.length <= 30 && req.body.location.length <= 30 && req.body.description.length <= 100 && req.body.end_service >= req.body.start_service) {

Ensuite, nous allons concrètement effectuer la modification de la table de la BDD.

    Partner.update(req.body, {
      where: { company: company }
    })
Dans notre cas, on distingue bien comme pour le langage SQL, le SELECT et le WHERE.
Le FROM quand à lui est directement géré par Sequelize car nous sommes dans le controller d'une seule table, ici Partner.

    .then(() => {
      res.send(res.data)
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Partner with company=" + company
      });
    });

Enfin, cette partie du code sert à renvoyer des informations au front.
Dans le then, si l'action s'est déroulée correctement.
Dans le catch, si il y a eu un problème.