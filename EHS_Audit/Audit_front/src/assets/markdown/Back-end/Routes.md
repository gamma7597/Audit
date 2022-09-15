# Routes

Les routes permettent d'associé les requêtes HTTP via aux bons controllers.
C'est la première étape lorsque les flux API passe du front vers le back.

# Exemple de route

Voici une exemple de route utilisé dans l'application.
C'est la route Partner qui permet d'associer une requête HTTP au bon controller pour ensuite modifier la BDD.

    module.exports = app => {
      const partners = require("../controllers/partner.controller.js");

      var router = require("express").Router();

      router.post("/", partners.create);

      router.get("/", partners.findAll);

      router.get("/:company", partners.findOne);

      router.put("/:company", partners.update);

      router.delete("/:company", partners.delete);

      app.use('/api/partners', router);
    };

On remarque que la route est exportable pour son utilisation dans le fichier de paramétrage du serveur.

On commence par récupérer le controller associé à cette route, ici partner.
On récupère ensuite la fonction de routage propre à ExpressJS.

Puis pour chaque chaque action liée au controller, on va créer une route.
On définit donc les routes en fonction de la requête HTTP (POST / PUT / DELETE / GET) avec pour paramètre le chemin de l'API et le controller.

L'API commence toujours par /api auquel on ajoute le nom du routage en cours, ici /partners.