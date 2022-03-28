<template>
  <div class="home">
    <button @click="togglePartnerForm" class="btn btn-primary">Edit Partner</button>
    <b-form @submit.prevent="handleSubmit" v-if="showPartnerForm">
      <b-form-group id="exampleInputGroup" label="Company name : " label-for="companyInput">
        <b-form-input
          id="companyInput"
          type="text"
          v-model="formData.company"
          required
          placeholder="Enter company" />
      </b-form-group>

      <b-form-group id="exampleInputGroup" label="Contract number : " label-for="contract_numberInput">
        <b-form-input
          id="contract_numberInput"
          type="number"
          v-model="formData.contract_number"
          required
          placeholder="Enter contract number" />
      </b-form-group>

      <b-form-group id="exampleInputGroup" label="location : " label-for="locationInput">
        <b-form-input
          id="locationInput"
          type="text"
          v-model="formData.location"
          required
          placeholder="Enter location" />
      </b-form-group>

      <b-form-group id="exampleInputGroup" label="description : " label-for="descriptionInput">
        <b-form-input
          id="descriptionInput"
          type="text"
          v-model="formData.description"
          required
          placeholder="Enter description" />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
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
