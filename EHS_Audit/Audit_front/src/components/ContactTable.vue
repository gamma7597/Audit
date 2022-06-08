<template>
  <div>
    <table class="table_style">
      <caption>Contacts {{activePartner.company}}</caption>
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
        <tr v-for="(contact, index) in contactList" :key="index">
          <td>{{contact.company}}</td>
          <td>{{contact.last_name}}</td>
          <td>{{contact.first_name}}</td>
          <td>{{contact.phone}}</td>
          <td>{{contact.mail}}</td>
          <td>{{contact.job}}</td>
          <td><button class="button_blue" @click="contactFormToggle(contact)">Modifier</button></td>
          <td><button class="button_blue" @click="remove(contact.company, contact.last_name)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
    <div v-if="contactForm">
      <EditContact/>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import EditContact from '@/components/EditContact.vue'
  export default {
    components: {
      EditContact,
    },
    data() {
      return {
        contactForm: false,
        list: []
      }
    },
    computed: {    
      ...mapGetters('contact', [ 'contactList' ]),
      ...mapGetters('partner', ['activePartner']),
      ...mapGetters('contact', ['activeContact'])
    },
    methods: {
      ...mapActions('contact', [ 'removeContact' ]),
      ...mapActions('contact', [ 'getOneContact' ]),
      ...mapActions('contact', [ 'getContacts' ]),
      remove(company, last_name) {
        var payload = {
          company: company,
          last_name: last_name
        }
        this.removeContact(payload)
      },
      contactFormToggle(contact){
        var payload = {
          company: contact.company,
          last_name: contact.last_name
        }
        this.getOneContact(payload)
        this.contactForm = !this.contactForm
      },
      afterEdit(){
        this.list = this.getContacts(this.activePartner.company)
        this.contactForm = !this.contactForm
      }
    }
  }
</script>