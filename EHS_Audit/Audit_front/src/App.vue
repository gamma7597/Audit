<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Audit partenaires</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Accueil</b-nav-item>
          <b-nav-item to="/partnerList/" v-if="activeUser">Liste des partenaires</b-nav-item>
          <b-nav-item href="#" @click.prevent="login" v-if="!activeUser">Connexion</b-nav-item>
          <b-nav-item href="#" @click.prevent="logout" v-else>Deconnexion</b-nav-item>
          {{$store.state.user.groups}}
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import  { mapState } from 'vuex'
  export default {
    name: 'app',
    data () {
      return {
        activeUser: null
      }
    },
    async created () {
      await this.refreshActiveUser()
    },
    watch: {
      // everytime a route is changed refresh the activeUser
      '$route': 'refreshActiveUser'
    },
    computed: {
      ...mapState('user', [ 'groups' ])
    },
    methods: {
      
      async login () {
        this.$auth.signInWithRedirect()
      },
      async refreshActiveUser () {
        if (this.authState.isAuthenticated) {
          this.activeUser = await this.$auth.getUser()
          this.$store.state.user.groups = this.activeUser.groups
        }
      },
      async logout () {
        await this.$auth.signOut()
        await this.refreshActiveUser()
        this.$router.push('/')
      }
    },
    mounted(){
      
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
