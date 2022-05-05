<template>
  <div>
    <form @submit.prevent="verifForm">

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
        errors: [],
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
          console.log(this.errors.length)
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
