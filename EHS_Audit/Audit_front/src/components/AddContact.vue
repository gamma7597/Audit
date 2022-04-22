<template>
  <div class="addContact">

    <button class="button_blue" @click="toggleContactForm">Ajouter un contact</button>
    <form @submit.prevent="handleSubmit" v-if="showContactForm">

      <label for="last_nameInput">
        <input type="text" 
          id="last_nameInput" 
          placeholder="Nom du contact" 
          v-model="formData.last_name" 
          required />
        <span>Nom du contact</span>
      </label>

      <label for="first_nameInput">
        <input type="text" 
          id="first_nameInput" 
          placeholder="Prenom du contact" 
          v-model="formData.first_name" 
          required />
        <span>Prenom du contact</span>
      </label>

      <label for="phoneInput">
        <input type="number" 
          id="phoneInput" 
          placeholder="Telephone du contact" 
          v-model="formData.phone" 
          required />
        <span>Telephone du contact</span>
      </label>

      <label for="mailInput">
        <input type="text" 
          id="mailInput" 
          placeholder="Mail du contact" 
          v-model="formData.mail" 
          required />
        <span>Mail du contact</span>
      </label>

      <label for="jobInput">
        <input type="text" 
          id="jobInput" 
          placeholder="Fonction du contact" 
          v-model="formData.job" 
          required />
        <span>Fonction du contact</span>
      </label>

      <button class="button_form" type="submit">Ajouter</button>
      <button class="button_form" type="reset">Réinitialiser le formulaire</button>
    </form>
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
