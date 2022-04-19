<template>
  <div>
    <table class="table_style">
      <thead>
        <tr>
          <th scope="row">Partenaire</th>
          <th scope="row">Nom</th>
          <th scope="row">Prenom</th>
          <th scope="row">Fonction</th>
          <th scope="row">Mail</th>
          <th scope="row">Telephone</th>
          <th scope="row">Lieu de travail</th>
          <th scope="row">Date d'entrée chez le partenaire</th>
          <th scope="row">Date de sortie de chez le partenaire</th>
          <th scope="row">Ordinateur portable</th>
          <th scope="row">Ordinateur de bureau</th>
          <th scope="row">Office admin user</th>
          <th scope="row">GID</th>
          <th scope="row">Office account d79</th>
          <th scope="row">Acces fonctionnel</th>
          <th scope="row">Acces technique</th>
          <th scope="row">Acces SalesForce</th>
          <th scope="row">Acces Gazelle ERP</th>
          <th scope="row">Autres acces</th>
          <th scope="row">Commentaire</th>
          <th scope="row">Acces VPN</th>
          <th scope="row">Acces Okta MFA</th>
          <th scope="row">Autres acces</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="index">
          <td>{{employee.company}}</td>
          <td>{{employee.last_name}}</td>
          <td>{{employee.first_name}}</td>
          <td>{{employee.job}}</td>
          <td>{{employee.mail}}</td>
          <td>{{employee.phone}}</td>
          <td>{{employee.work_place}}</td>
          <td>{{employee.start_date}}</td>
          <td>{{employee.end_date}}</td>
          <td>{{employee.laptop}}</td>
          <td>{{employee.desktop}}</td>
          <td>{{employee.office_admin_user}}</td>
          <td>{{employee.gid}}</td>
          <td>{{employee.office_account_d79}}</td>
          <td>{{employee.functional_access}}</td>
          <td>{{employee.technical_access}}</td>
          <td>{{employee.salesforce_access}}</td>
          <td>{{employee.gazelle_erp_access}}</td>
          <td>{{employee.other_access}}</td>
          <td>{{employee.comment}}</td>
          <td>{{employee.vpn_access}}</td>
          <td>{{employee.okta_mfa_access}}</td>
        </tr>
      </tbody>
    </table>
    <b-table striped hover :items="employees" :fields="fields">
      <template #cell(edit)="data">
          <b-button @click="editEmployee(data)">Modifier</b-button>
          <b-button v-on:click="removeEmployee(data.item.company, data.item.last_name)" variant="danger">Supprimer</b-button>
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
        ...mapState('employee', [ 'employees' ])
    },
    methods: {
      removeEmployee(company, last_name) {
        var payload = {
          company: company,
          last_name: last_name
        }
        this.$store.dispatch('employee/removeEmployee', payload)
      }
    }
  }
</script>