<template>
  <div>
    <div class="page">
      <header>
        <img id="nav-logo" src="./assets/images/logo_ehs.png" alt="logo ehs"/>
        <nav>
          <ul class="menu">
            <li class="item"><router-link to="/">Accueil</router-link></li>
            <li class="item"><router-link to="/partnerList/" v-if="activeUser">Liste des partenaires</router-link></li>
            <li class="item" v-if="!activeUser"><a href="#" @click.prevent="login">Connexion</a></li>
            <li class="item" v-else><a href="#" @click.prevent="logout">Deconnexion</a></li>
          </ul>
        </nav>
      </header>
    </div>
    {{groups}}
    <router-view />
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
    async login() {
      this.$auth.signInWithRedirect();
    },
    async refreshActiveUser() {
      if (this.authState.isAuthenticated) {
        this.activeUser = await this.$auth.getUser();
        this.$store.state.user.groups = this.activeUser.groups;
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
