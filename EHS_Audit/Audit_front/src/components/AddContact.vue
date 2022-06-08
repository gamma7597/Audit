<template>
  <div class="addContact">

    <button class="button_blue" @click="toggleContactForm">Ajouter un contact</button>

    <form @submit.prevent="verifForm" v-if="showContactForm">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="last_name">Nom du contact</label>
      <input type="text" 
        id="last_name" 
        v-model="formData.last_name" />

      <label for="first_name">Prenom du contact</label>
      <input type="text" 
        id="first_name" 
        v-model="formData.first_name" />

      <label for="phone">Telephone du contact</label>
      <input type="number" 
        id="phone" 
        v-model="formData.phone" />

      <label for="mail">Mail du contact</label>
      <input type="text" 
        id="mail" 
        v-model="formData.mail" />

      <label for="job">Fonction du contact</label>
      <input type="text" 
        id="job" 
        v-model="formData.job"  />

      <button class="button_form" type="submit">Ajouter</button>
      <button class="button_form" type="reset">Réinitialiser le formulaire</button>
    </form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'AddContact',
    data() {
      return {
        errors: [],
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
        ...mapGetters('partner', [ 'activePartner' ]),
    },
    methods: {
      ...mapActions('contact', [ 'addContact' ]),
      toggleContactForm() {
        this.showContactForm = !this.showContactForm
      },
      verifForm() {
        this.errors = [];

        const { last_name, first_name, phone, mail, job } = this.formData
        
        if(!last_name) {
          this.errors.push("Le nom du contact ne peut pas être vide !");
        }
        if(last_name.length > 30) {
          this.errors.push("Le nom du contact doit faire maximum 30 caractères !");
        }
        
        if(!first_name) {
          this.errors.push("Le prenom du contact ne peut pas être vide !");
        }
        if(first_name.length > 30) {
          this.errors.push("Le prenom du contact doit faire maximum 30 caractères !");
        }

        if(!phone) {
          this.errors.push("Le telephone ne peut pas être vide !");
        }
        var phone_regex = new RegExp(/(?:(?:\+|00)33|0)[1-9](?:[\s.-]*\d{2}){4}/)
        if(!phone_regex.test(phone)) {
          this.errors.push("Le telephone doit etre de la forme ...")
        }

        if(!mail) {
          this.errors.push("Le mail ne peut pas être vide !");
        }
        var mail_regex = new RegExp(/\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+/)
        if(!mail_regex.test(mail)) {
          this.errors.push("Le mail doit etre de la forme ...")
        }

        if(!job) {
          this.errors.push("La fonction du contact ne peut pas être vide !");
        }
        if(job.length > 30) {
          this.errors.push("La fonction du contact doit faire maximum 30 caractères !");
        }

        if (this.errors.length != 0)
        {
          return true;
        }
        else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        const { last_name, first_name, phone, mail, job } = this.formData
        const payload = {
          company: this.activePartner.company,
          data: {
            company: this.activePartner.company,
            last_name,
            first_name,
            phone,
            mail,
            job,
            partnerId: this.activePartner.id
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
