# Documentation Back-End Conformité

Documentation du code de la partie back-end de l'application Conformité.

L'application fonctionne assez simplement avec un fichier server.js qui permet de lancer le serveur et de le paramétrer.

Pour la gestion de l'API, on utilise :
- Des models qui correspondent aux table des la BDD.
- Des controllers qui permettent d'effectuer des actions sur les tables sur la BDD.
- Des routes qui permettent d'associer une requête HTTP au bon controller.

On utilise un framework NodeJS nommé ExpressJS et une BDD MySQL. Le tout est controllé avec Sequelize qui permet d'automatisé et de simplifier les actions sur la BDD.

En plus de cela, on utilise Okta pour vérifier le JSON Web Token lors des appels API.

Enfin, le back-end dispose de deux middlewares pour gérer les logs ainsi que l'upload de fichiers.

[Voir les fichiers de configuration du Back-End.](./Configs.md)
[Voir les models.](./Models.md)
[Voir les controllers.](./Controllers.md)
[Voir les routes.](./Routes.md)
[Voir les middleswares.](./Middleware.md)

Voici les technologies qui sont utilisés pour le back-end :

- [Node JS](https://nodejs.org)
- [Express JS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com)
- [Okta](https://www.okta.com)
- [Winston](https://github.com/winstonjs/winston)
- [Multer](http://expressjs.com/en/resources/middleware/multer.html)

Nous vous invitons à regarder le fichier package.json qui contient l'ensemble des dépendances du serveur ainsi que les versions.