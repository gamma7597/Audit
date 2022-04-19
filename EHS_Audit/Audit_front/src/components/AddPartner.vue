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
        <input type="number" 
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
      <button class="button_blue" type="submit">Ajouter</button>
      <button class="button_blue" type="reset">Réinitialiser le formulaire</button>
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
          contract_number: 0,
          location: '',
          description: ''
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
        const { company, contract_number, location, description } = this.formData
        const payload = {
          company,
          contract_number,
          location,
          description
        }
        this.addPartner(payload)
        this.formData = {
          company: '',
          contract_number: null,
          location: '',
          description: ''
        }
        this.togglePartnerForm()
      }
    }
  }
</script>
