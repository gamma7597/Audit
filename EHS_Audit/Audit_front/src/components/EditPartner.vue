<template>
  <div class="home">
    <button class="button_blue" @click="togglePartnerForm">Modifier le partenaire</button>

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

      <button class="button_blue" type="submit">Modifier</button>
      <button class="button_blue"  type="reset">Reinitialiser le formulaire</button>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Home',
    data() {
      return {
        showPartnerForm: false,
        formData: {
          company: '',
          contract_number: null,
          location: '',
          description: ''
        }
      }
    },
    computed: {
      ...mapState('partner', [ 'partner' ])
    },
    methods: {
      ...mapActions('partner', [ 'editPartner' ]),
      togglePartnerForm() {
        this.showPartnerForm = !this.showPartnerForm
      },
      handleSubmit() {
        const { company, contract_number, location, description } = this.formData
        const payload = {
          company: this.partner.company,
          data: {
            company,
            contract_number,
            location,
            description
          }
        }
        this.editPartner(payload)
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
