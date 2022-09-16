# App.vue

Ce fichier est le plus important du front. C'est la vue de base a laquelle sont ensuite raccorder les autres vues grâce à Vue Router.

C'est ici que nous avons définis le menu de l'application ainsi que la gestion des groupes.

    <nav>
      <ul class="menu">
        <li class="item"><router-link to="/">Accueil</router-link></li>
        <li class="item" v-if="activeUser && (groups.includes('GG-USR-APPCONFORMITE-ADMIN') || groups.includes('GG-USR-APPCONFORMITE-METIER'))">
          <router-link  :to="`/partnerList/`">Liste des partenaires</router-link>
        </li>
        <li class="item" v-else-if="activeUser">
          <router-link  :to="`/partner/${myPartner()}`">{{myPartner()}}</router-link>
        </li>
        <li><router-link to="/aide/" target="_blank">Aide</router-link></li>
        <li class="item" v-if="activeUser && (groups.includes('GG-USR-APPCONFORMITE-ADMIN'))">
          <router-link  :to="`/doc/`">Documentation</router-link>
        </li>
        <li class="item" v-if="!activeUser"><a href="#" @click.prevent="login">Connexion</a></li>
        <li class="item" v-else><a href="#" @click.prevent="logout">Deconnexion</a></li>
      </ul>
    </nav>

Les éléments du menu permettent de se déplacer dans l'application. Certaine routes nécessite d'appartenir à un groupe spécial comme ADMIN.
D'autres d'être uniquement authentifié sur l'application.

Pour la partie authentification et gestion des groupes, on utilise OKTA.

    async refreshActiveUser() {
      if (this.authState.isAuthenticated) {
        this.activeUser = await this.$auth.getUser();
        var group = []
        if ("groups_ad" in this.activeUser){
          this.activeUser.groups_ad.forEach(element => {
            if (element != "Everyone") {
              group.push(element);
            }
          })
        }
        if ("groups_okta" in this.activeUser) {
          this.activeUser.groups_okta.forEach(element => {
            if (element != "Everyone") {
              group.push(element);
            }
          })
        }
        this.$store.state.user.groups = group;
      }

Grâce à cette fontion qui est exécuté à chaque interaction dans l'application, on peut récupérer les informations de l'utilisateur et ajouter ses groupes dans le store VueX.