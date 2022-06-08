<template>
  <div class="home">

    <button class="button_blue" @click="togglePartnerForm">Modifier le partenaire</button>

    <form @submit.prevent="verifForm(partner)" v-if="showPartnerForm">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="company">Nom du partenaire</label>
      <input id="company" 
        :value="activePartner.company"
        @input="updateLocalPartner($event)" />
      
      <label for="contract_number">Numero de contrat</label>
      <input id="contract_number" 
        :value="activePartner.contract_number"
        @input="updateLocalPartner($event)" />

      <label for="location">Localisation</label>
      <input id="location" 
        :value="activePartner.location"
        @input="updateLocalPartner($event)" />

      <label for="description">Description</label>
      <input id="description" 
        :value="activePartner.description"
        @input="updateLocalPartner($event)" />

      <label for="start_service">Debut de la prestation</label>
      <input id="start_service" 
        type="date"
        :value="activePartner.start_service"
        @input="updateLocalPartner($event)" />

      <label for="end_serviceInput">Fin de la prestation</label>
      <input id="end_serviceInput" 
        type="date"
        :value="activePartner.end_service"
        @input="updateLocalPartner($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="getOnePartner(activePartner.company)" value="Reinitialiser" />
      </div>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Home',
    data() {
      return {
        errors: [],
        showPartnerForm: false,
        partner: {}
      }
    },
    computed: {
      ...mapGetters('partner', [ 'activePartner' ])
    },
    watch: {
      activePartner: {
        handler(){
          this.partner = this.activePartner
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions('partner', [ 'editPartner' ]),
      ...mapActions('partner', [ 'getOnePartner' ]),
      updateLocalPartner(e) {
        this.$set(this.partner, e.target.id, e.target.value);
      },
      togglePartnerForm() {
        this.showPartnerForm = !this.showPartnerForm
      },
      verifForm(partner) {
        this.errors = [];

        const { company, contract_number, location, description, start_service, end_service } = this.partner
        
        if(!company) {
          this.errors.push("Le nom du partenaire ne peut pas être vide !");
        }
        if(!company.toUpperCase()) {
          this.errors.push("Le nom du partenaire doit être en majuscule !");
        }
        if(company.length > 30) {
          this.errors.push("Le nom du partenaire doit faire maximum 30 caractères !");
        }
        
        if(!contract_number) {
          this.errors.push("Le numéro de contrat ne peut pas être vide !");
        }

        if(!location) {
          this.errors.push("La localisation ne peut pas être vide !");
        }
        if(location.length > 30) {
          this.errors.push("La localisation doit faire maximum 30 caractères !");
        }

        if(!description) {
          this.errors.push("La description ne peut pas être vide !");
        }
        if(description.length > 100) {
          this.errors.push("La description doit faire maximum 100 caractères !");
        }

        if(!start_service) {
          this.errors.push("Le debut de la prestation ne peut pas être vide !");
        }

        if(!end_service) {
          this.errors.push("La fin de la prestation ne peut pas être vide !");
        }
        if(end_service < start_service) {
          this.errors.push("La fin de la prestation doit être après le début de la prestation !");
        }

        if (this.errors.length != 0)
        {
          return true;
        }
        else {
          this.togglePartnerForm()
          this.editPartner(partner)
        }
      }
    }
  }
</script>
