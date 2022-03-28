<template>
  <div class="addContact">

    <button @click="toggleContactForm" class="btn btn-primary">Add New Contact</button>
    <b-form @submit.prevent="handleSubmit" v-if="showContactForm">

      <b-form-group id="exampleInputGroup" label="Last name : " label-for="last_nameInput">
        <b-form-input
          id="last_nameInput"
          type="text"
          v-model="formData.last_name"
          required
          placeholder="Enter last name" />
      </b-form-group>

      <b-form-group id="exampleInputGroup" label="First name : " label-for="first_nameInput">
        <b-form-input
          id="first_nameInput"
          type="text"
          v-model="formData.first_name"
          required
          placeholder="Enter first name" />
      </b-form-group>

      <b-form-group id="exampleInputGroup" label="Phone : " label-for="phoneInput">
        <b-form-input
          id="phoneInput"
          type="number"
          v-model="formData.phone"
          required
          placeholder="Enter phone" />
      </b-form-group>

      <b-form-group id="exampleInputGroup" label="Mail : " label-for="mailInput">
        <b-form-input
          id="mailInput"
          type="text"
          v-model="formData.mail"
          required
          placeholder="Enter mail" />
      </b-form-group>

      <b-form-group id="exampleInputGroup" label="Job : " label-for="jobInput">
        <b-form-input
          id="jobInput"
          type="text"
          v-model="formData.job"
          required
          placeholder="Enter job" />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'AddContact',
    data() {
      return {
        showContactForm: false,
        formData: {
          last_name: '',
          first_name: '',
          phone: null,
          mail: '',
          job: ''
        }
      }
    },
    computed: {
        ...mapState('partner', [ 'partner' ])
    },
    methods: {
      ...mapActions('contact', [ 'addContact' ]),
      toggleContactForm() {
        this.showContactForm = !this.showContactForm
      },
      handleSubmit() {
        const { last_name, first_name, phone, mail, job } = this.formData
        const payload = {
          company: this.partner.company,
          data: {
            company: this.partner.company,
            last_name,
            first_name,
            phone,
            mail,
            job,
            partnerId: this.partner.id
          }
        }
        this.addContact(payload)
        this.formData = {
          last_name: '',
          first_name: '',
          phone: null,
          mail: '',
          job: ''
        }
        this.toggleContactForm()
      }
    }
  }
</script>
