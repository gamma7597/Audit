# Middlewares

Les middleware sont des modules permettant d'effectuer des actions très spécifiques sur le serveur. Ils sont écris dans un fichier à part pour ne pas surchargé le code de server.js.

Dans le cadre de notre application, nous en avons définis 2.

## log.js

En cours de développement.

## upload.js

Pour l'upload de nos fichiers sur le serveur, nous avons utilisé une dépendance nommée multer.

    const util = require("util");
    const multer = require("multer");

On commence donc naturelement par instancié multer ainsi que util qui permet de faire des actions en lien avec l'API NodeJS.

    let storage = multer.diskStorage({
      
      destination: (req, file, cb) => {
        const company = req.params.company;
        cb(null, __basedir + "/resources/static/assets/uploads/" + company);
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });

On définit ensuite notre storage, la ou seront stockés nos fichiers.
La destination varie en fonction des partenaires.

En effet, chaque partenaire à sa création se voit créditer d'un dossier comportant uniquement pour les fichiers de ses partenaires.
A la suppression du partenaire, ce dossier est lui aussi supprimé.

On remarque req et res, ils correspondent a la requête et à la réponse lors de l'appel de la fonction uploadFile du controller file.

On trouvera donc le body et les paramètres de la requête, le nom du partenaire ainsi que le fichier.

    let uploadFile = multer({
      storage: storage,
      limits: { 
        fields: 10,
        fieldNameSize: 50,
        fieldSize: 20000,
        fileSize: 15000000
      },
      fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" 
            || file.mimetype == "image/jpg" 
            || file.mimetype == "image/jpeg"
            || file.mimetype == "application/msword"
            || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            || file.mimetype == "application/pdf"
            || file.mimetype == "application/vnd.ms-powerpoint"
            || file.mimetype == "application/vnd.openxmlformats-officedocument.presentationml.presentation"
            || file.mimetype == "application/vnd.ms-excel"
            || file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }
    }).single("file");

On va ensuite grâce à Multer uploader le fichier dans le dossier du serveur.

On a donc le storage définie précédemment.

    storage: storage,

Puis les limites avec le nombre de fichiers et les tailles autorisées.

    limits: { 
      fields: 10,
      fieldNameSize: 50,
      fieldSize: 20000,
      fileSize: 15000000
    },

Enfin les filtres :

    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" 
          || file.mimetype == "image/jpg" 
          || file.mimetype == "image/jpeg"
          || file.mimetype == "application/msword"
          || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          || file.mimetype == "application/pdf"
          || file.mimetype == "application/vnd.ms-powerpoint"
          || file.mimetype == "application/vnd.openxmlformats-officedocument.presentationml.presentation"
          || file.mimetype == "application/vnd.ms-excel"
          || file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }

Ici, on va vérifier le mimetype du fichier que l'on souhaite uploader. Pour des raisons de sécurité, cette liste est exhaustive.
Si le fichier n'a pas le bon mimetype, on renvoit avec res qu'il y a une erreur.

    }).single("file");

Cette ligne de code à la fin du code Multer précise que l'on upload un fichier unique.

    let uploadFileMiddleware = util.promisify(uploadFile);
    module.exports = uploadFileMiddleware;

Enfin, ces deux dernières lignes de code permettent de modifier uploadFile pour qu'il retourne une promesse. Cela nous permettra d'utiliser await lors de l'appel à ce middleware. On évitera ainsi de n'envoyer que la moitié du fichier.
Puis on l'exporte pour qu'il puisse être utilisé dans le controller file.

