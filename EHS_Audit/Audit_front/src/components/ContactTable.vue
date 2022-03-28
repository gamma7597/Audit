<template>
  <div>
    <b-table striped hover :items="contacts" :fields="fields">
      <template #cell(edit)="data">
          <b-button @click="editContact(data)">Modifier</b-button>
          <b-button v-on:click="removeContact(data.item.company, data.item.last_name)" variant="danger">Supprimer</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        fields: [
          { key: "company", label: "Partenaire", type: "text" },
          { key: "last_name", label: "Nom", type: "text" },
          { key: "first_name", label: "Prenom", type: "text" },
          { key: "phone", label: "Telephone", type: "text" },
          { key: "mail", label: "Mail", type: "email" },
          { key: "job", label: "Fonction", type: "text" },
          { key: "edit", label: "", type: "edit" }
        ]
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
      }
    }
  }
</script>