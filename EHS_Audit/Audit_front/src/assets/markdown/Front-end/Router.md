# Router

Le fichier index.js permet de paramétrer le routage du front avec Vue Router.

On commence par importer l'ensemble des Vue de l'application ainsi que Vue, Vue Router et notre store VueX.

Puis on paramètre Okta :

    import OktaVue, { LoginCallback } from '@okta/okta-vue'
    import { OktaAuth } from '@okta/okta-auth-js'

    const oktaAuth = new OktaAuth({
      //localhost
      issuer: 'https://dev-46549604.okta.com/oauth2/aus4gbwz3qR3wa0v75d7',
      clientId: '0oa2pf2uaeW95u4VH5d7',
      //prod
      //issuer: 'https://engie.okta-emea.com/oauth2/aus7o7nrogwXSVcYn0i7',
      //clientId: '0oa7n4gwwkvQiWODq0i7',
      //poc
      //issuer: 'https://engie-btoc-oie-preview.oktapreview.com/oauth2/aus4c092lcGfLRARP0x7',
      //clientId: '0oa4c08oa16DlRFzW0x7',
      redirectUri: window.location.origin + '/callback',
      scopes: ['openid', 'profile', 'email']
    })

On récupère les dépendances Okta pour pour l'utiliser avec Vue et pour gérer l'authentification des utilisateurs.
On définit donc pour les environnements localhost, POC et production l'issuer et clientId.
On fournit ensuite l'url de redirection après authentification et les scopes que l'on souhaite utiliser.
Le scope profile contient les informations de l'utilisateur et openid le token d'authentification.

Ensuite on définit plusieurs fonctions pour vérifier que le partenaire, une ou plusieurs règles ou encore un fichier match bien avec le groupe de l'utilisateur.
Concrètement, cela permet de vérifier que l'utilisateur est bien dans un groupe autorisé à avoir accès à cette ressource.

## Exemple de fonction pour match l'accès aux partenaires

    function matchPartner(to) {
      const groups = store.state.user.groups
      const path = to.path
      const test = []
      groups.forEach(function(item) {
        const g = item.split("-")
        const x = "/partner/" + g[3]
        test.push(x)
      })
      return test.includes(path)
    }

On commence par récupérer les groupes de l'utilisateur dans le store.
Puis le path de la route que l'on souhaite.
Pour chaque groupe, on récupère le nom du partenaire dans le nom du groupe (c'est le 3ème élément).
On ajoute dans une liste le chemin de la route.
On renvoie cette liste à laquelle on ajoute le path.

## Les routes

On termine avec l'explication de quelques routes.
Premièrement, on demande à Vue d'utiliser Vue Router et les dépendances Okta.

    Vue.use(VueRouter)
    Vue.use(OktaVue, { oktaAuth })

Voici la structure d'une route :

- Le path de la route.
- Son nom
- Le component qui lui est affilié.

Ensuite on peut ajouter des metas comme :

    meta: {
      requiresAuth: true
    }

Cela oblige l'utilisateur à s'être authentifié pour pouvoir accéder à cette route.

Et enfin nous avons la fonction beforeEnter() qui elle vérifie que le groupe de l'utilisateur est authorisé à accéder à une route.

    beforeEnter: (to, from, next) => {
      if(store.state.user.groups.includes("OKTA-CONFORMITE-PROD-METIER")
        || store.state.user.groups.includes("OKTA-CONFORMITE-PROD-ADMIN")){
        next()
      }
      else if(matchPartner(to)){
        next()
      }
    }

Dans cette exemple, on vérifie que l'utilisateur fait bien partie à minima d'un des deux groupes.
Si nous n'avons pas l'information dans le store, on va vérifier le match en allant directement regarder les autres groupes.

Concrètement, cela donne un accès à l'ensemble de l'application pour les utilisateur dans les groupes métier et admin.
Pour les autres, cela permet de récupérer le nom du partenaire dans le groupe et de matcher les ressources autorisés uniquement en lien avec ce partenaire.
