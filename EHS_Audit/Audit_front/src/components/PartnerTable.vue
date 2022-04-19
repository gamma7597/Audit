<template>
  <div>
    <table class="table_style">
      <thead>
        <tr>
          <th scope="col">Partenaire</th>
          <th scope="col">Numéro de contrat</th>
          <th scope="col">Localisation</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(partner, index) in partners" :key="index">
          <td><router-link :to="`/partner/${partner.company}`">
                {{ partner.company }}
              </router-link></td>
          <td>{{partner.contract_number}}</td>
          <td>{{partner.location}}</td>
          <td>{{partner.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState('partner', ['partners']),
            
        }
    }
</script>