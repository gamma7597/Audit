<template>
  <div class="addpartner">

    <button class="button_blue" @click="togglePartnerForm" type="button">Ajouter un partenaire</button>

    <form @submit.prevent="handleSubmit" v-if="showPartnerForm">
      <label for="companyInput">
        <input type="text" 
          id="companyInput" 
          placeholder="Nom du partenaire"
          v-model="formData.company" 
          required />
        <span>Nom du partenaire</span>
      </label>
      
      <label for="contract_numberInput">
        <input type="text" 
          id="contract_numberInput" 
          placeholder="Numero de contrat" 
          v-model="formData.contract_number" 
          required />
        <span>Numero de contrat</span>
      </label>

      <label for="locationInput">
        <input type="text" 
          id="locationInput" 
          placeholder="Localisation" 
          v-model="formData.location" 
          required />
        <span>Localisation</span>
      </label>

      <label for="descriptionInput">
        <input type="text" 
          id="descriptionInput" 
          placeholder="Description" 
          v-model="formData.description" 
          required />
        <span>Description</span>
      </label>

      <label for="start_serviceInput">
        <input type="date" 
          id="start_serviceInput" 
          placeholder="Debut de la prestation" 
          v-model="formData.start_service" 
          required />
        <span>Debut de la prestation</span>
      </label>

      <label for="end_serviceInput">
        <input type="date" 
          id="end_serviceInput" 
          placeholder="Fin de la prestation" 
          v-model="formData.end_service" 
          required />
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
