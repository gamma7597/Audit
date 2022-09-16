## Store

Le dossier store permet de faire les appels API. Il stocke tant que l'utilisateur est connecté les informations de la BDD pour faire fonctionner l'application.

Concrètement, lorsque l'utilisateur demande l'ajout d'un partenaire par exemple, il fait appel à une fonction du store qui ensuite fera une requête HTTP au back. Lorsque la réponse arrive, les informations sont stockés dans le store. Le composant ou la vue qui a fait l'appel à ensuite juste à récupérer l'information dont il a besoin dans le store.

Le store est accessible à l'ensemble des vues et des composants de l'application.
Il faut juste faire les bonnes requêtes HTTP en amont pour remplir le store avec les informations dont on a besoin.

On utilise VueX pour le store.
Je ne vais pas expliquer comment cela fonctionne concrètement, c'est principalement des requêtes AJAX avec AXIOS.

Il faut juste savoir que le store est divisé en module avec une page par table de la BDD.

Dans index.js, on y définit ses modules.
Dans user.js, on stocke uniquement les groupes de l'utilisateur.
Dans axiosUrl.js, on définit l'URL du back-end pour les requêtes HTTP.

Un module du store est composé de 4 parties :

- state, les données à l'instant T.
- getters, utilisé pour récupérer les informations du store dans les composants.
- actions, utilisé pour faire les appels API.
- mutations, utilisé pour modifié le state après un appel API.

Attention, une mutation est toujouts lié à une action.
On ne lit pas directement le state, on passe par les getters.