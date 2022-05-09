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

      <label for="last_nameInput">
        <input type="text" 
          id="last_nameInput" 
          placeholder="Nom du contact" 
          v-model="formData.last_name" />
        <span>Nom du contact</span>
      </label>

      <label for="first_nameInput">
        <input type="text" 
          id="first_nameInput" 
          placeholder="Prenom du contact" 
          v-model="formData.first_name" />
        <span>Prenom du contact</span>
      </label>

      <label for="phoneInput">
        <input type="number" 
          id="phoneInput" 
          placeholder="Telephone du contact" 
          v-model="formData.phone" />
        <span>Telephone du contact</span>
      </label>

      <label for="mailInput">
        <input type="text" 
          id="mailInput" 
          placeholder="Mail du contact" 
          v-model="formData.mail" />
        <span>Mail du contact</span>
      </label>

      <label for="jobInput">
        <input type="text" 
          id="jobInput" 
          placeholder="Fonction du contact" 
          v-model="formData.job"  />
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
        ...mapState('partner', [ 'partner' ])
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
