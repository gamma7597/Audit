<template>
  <div>
    <table class="table_style">
      <thead>
        <tr>
          <th scope="col">Partenaire</th>
          <th scope="col">Nom</th>
          <th scope="col">Prenom</th>
          <th scope="col">Telephone</th>
          <th scope="col">Mail</th>
          <th scope="col">Fonction</th>
          <th scope="col">Modifier</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) in contacts" :key="index">
          <td>{{contact.company}}</td>
          <td>{{contact.last_name}}</td>
          <td>{{contact.first_name}}</td>
          <td>{{contact.phone}}</td>
          <td>{{contact.mail}}</td>
          <td>{{contact.job}}</td>
          <td><button class="button_blue" @click="contactFormToggle(contact)">Modifier</button></td>
          <td><button class="button_blue" v-on:click="removeContact(contact.company, contact.last_name)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
    <div v-if="contactForm">
      <EditContact/>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import EditContact from '@/components/EditContact.vue'
  export default {
    components: {
      EditContact,
    },
    data() {
      return {
        contactForm: false,
        selectContact: null
      }
    },
    computed: {    
      ...mapState('contact', [ 'contacts' ])
    },
    methods: {
      removeContact(company, last_name) {
        var payload = {
          company: company,
          last_name: last_name
        }
        this.$store.dispatch('contact/removeContact', payload)
      },
      contactFormToggle(contact){
        this.selectContact = contact
        this.contactForm = !this.contactForm
        console.log(this.contactForm)
      }
    }
  }
</script>