<template>
  <div class="addpartner">

    <button @click="togglePartnerForm" class="btn btn-primary">Add New Partner</button>
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
