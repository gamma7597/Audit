<template>
  <div>
    <div class="page">
      <header>
        <img id="nav-logo" src="./assets/images/logo_ehs.png" alt="logo ehs"/>
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
      </header>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {
      activeUser: null,
    };
  },
  async created() {
    await this.refreshActiveUser();
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    $route: "refreshActiveUser",
  },
  computed: {
    ...mapState("user", ["groups"]),
  },
  methods: {
    myPartner(){
      const g = this.groups[0].split("-")
      return g[3]
    },
    async login() {
      this.$auth.signInWithRedirect();
    },
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
    },
    async logout() {
      await this.$auth.signOut();
      await this.refreshActiveUser();
      this.$router.push("/");
    },
  },
  mounted() {},
};
</script>

<style>
  @import 'assets/css/style.css';
</style>
