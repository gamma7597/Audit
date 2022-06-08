<template>
  <div>
    <form @submit.prevent="verifForm(contact)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="last_name">Nom du contact</label>
      <input type="text" 
        id="last_name"
        :value="activeContact.last_name"
        @input="updateLocalContact($event)" />

      <label for="first_name">Prenom du contact</label>
      <input type="text" 
        id="first_name" 
        :value="activeContact.first_name"
        @input="updateLocalContact($event)" />

      <label for="phone">Telephone du contact</label>
      <input type="number" 
        id="phone" 
        :value="activeContact.phone"
        @input="updateLocalContact($event)" />

      <label for="mail">Mail du contact</label>
      <input type="text" 
        id="mail" 
        :value="activeContact.mail"
        @input="updateLocalContact($event)" />

      <label for="job">Fonction du contact</label>
      <input type="text" 
        id="job" 
        :value="activeContact.job"
        @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="getOneContact(contact)" value="Reinitialiser" />
      </div>
    </form>
  </div>  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'EditContact',
    data() {
      return {
        errors: [],
        contact: {}
      }
    },
    computed: {
      ...mapGetters('contact', [ 'activeContact' ]),
    },
    watch: {
      activeContact: {
        handler(){
          this.contact = this.activeContact
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions('contact', [ 'editContact' ]),
      ...mapActions('contact', [ 'getOneContact' ]),
      updateLocalContact(e) {
        this.$set(this.contact, e.target.id, e.target.value);
      },
      verifForm(contact) {
        this.errors = [];

        const { last_name, first_name, phone, mail, job } = this.contact
        
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
          this.editContact(contact)
          this.$parent.afterEdit(contact)
        }
      }
    }
  }
</script>
