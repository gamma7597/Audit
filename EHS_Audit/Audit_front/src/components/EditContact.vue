<template>
  <div>
    <form @submit.prevent="handleSubmit">

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
          v-model="formData.job" />
        <span>Fonction du contact</span>
      </label>

      <button class="button_blue" type="submit">Modifier</button>
      <button class="button_blue"  type="reset">Reinitialiser le formulaire</button>
    </form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'EditContact',
    data() {
      return {
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
      ...mapState('partner', [ 'partner' ]),
      ...mapState('contact', [ 'contacts' ])
    },
    methods: {
      ...mapActions('partner', [ 'editPartner' ]),
      ...mapActions('contact', [ 'editContact' ]),
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
        this.editContact(payload)
        this.formData = {
          last_name: '',
          first_name: '',
          phone: null,
          mail: '',
          job: ''
        }
      }
    }
  }
</script>
