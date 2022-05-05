<template>
  <div class="addpartner">

    <button class="button_blue" @click="togglePartnerForm" type="button">Ajouter un partenaire</button>

    <form @submit.prevent="verifForm" v-if="showPartnerForm">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="companyInput">
        <input type="text" 
          id="companyInput" 
          placeholder="Nom du partenaire"
          v-model="formData.company" />
        <span>Nom du partenaire</span>
      </label>
      
      <label for="contract_numberInput">
        <input type="text" 
          id="contract_numberInput" 
          placeholder="Numero de contrat" 
          v-model="formData.contract_number" />
        <span>Numero de contrat</span>
      </label>

      <label for="locationInput">
        <input type="text" 
          id="locationInput" 
          placeholder="Localisation" 
          v-model="formData.location" />
        <span>Localisation</span>
      </label>

      <label for="descriptionInput">
        <input type="text" 
          id="descriptionInput" 
          placeholder="Description" 
          v-model="formData.description" />
        <span>Description</span>
      </label>

      <label for="start_serviceInput">
        <input type="date" 
          id="start_serviceInput" 
          placeholder="Debut de la prestation" 
          v-model="formData.start_service"
          value="" />
        <span>Debut de la prestation</span>
      </label>

      <label for="end_serviceInput">
        <input type="date" 
          id="end_serviceInput" 
          placeholder="Fin de la prestation"
          v-model="formData.end_service"
          value="" />
        <span>Fin de la prestation</span>
      </label>

      <button class="button_form" type="submit">Ajouter</button>
      <button class="button_form" type="reset">Réinitialiser le formulaire</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'AddPartner',
    data() {
      return {
        errors: [],
        showPartnerForm: false,
        formData: {
          company: '',
          contract_number: null,
          location: '',
          description: '',
          start_service: '',
          end_service: ''
        },
        partnerId: null
      }
    },
    methods: {
      ...mapActions('partner', [ 'addPartner' ]),
      togglePartnerForm() {
        this.showPartnerForm = !this.showPartnerForm
      },
      verifForm() {
        this.errors = [];

        const { company, contract_number, location, description, start_service, end_service } = this.formData
        
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
          console.log(this.errors.length)
          return true;
        }
        else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        const { company, contract_number, location, description, start_service, end_service } = this.formData

        const payload = {
          company,
          contract_number,
          location,
          description,
          start_service,
          end_service
        }
        this.addPartner(payload)
        this.formData = {
          company: '',
          contract_number: null,
          location: '',
          description: '',
          start_service: '',
          end_service: ''
        }
        this.togglePartnerForm()
      }
    }
  }
</script>
