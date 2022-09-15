# Fichiers de configuration

## main.js && index.html

Le fichier main.js permet de définir les librairies qui seront utilisé par l'application.
On peut citer Vue Router et VueX par exemple.

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')

Ce dernier bloc de code permet d'instancier Vue avec le router, le store et de monter l'application avec la vue : App.vue.

Le fichier index.html quand à lui est tout simplement le fichier index du site. C'est lui définie l'id : app qui sera utilisé par main.js et App.vue.

## vue.config.js

    module.exports = {
      devServer: {
        port: 8081,
        //port: 80,
        disableHostCheck: true,
      }
    }

Ce fichier permet de paramétrer certaines informations du front en phase de développement.
Comme le port d'écoute et la vérification du host.

## conformite_API.json

Ce document est un fichier JSON qui permet de documenter l'API de l'application grâce au standard openapi.

Cela permet de lister l'ensemble des requêtes HTTP et de pouvoir faire des tests dessus.

## Assets

Le dossier assets permet de regrouper les fichiers CSS, on utilise pour l'application du SCSS. Mais aussi les images ainsi que la documentation en markdown du front et du back.