<template>
  <div>
    <table class="table_scroll">
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
          <th scope="row">Modifier</th>
          <th scope="row">Supprimer</th>
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
          <td><button class="button_blue" @click="editEmployee(employee)">Modifier</button></td>
          <td><button class="button_blue" v-on:click="removeEmployee(employee.company, employee.last_name)">Supprimer</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
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