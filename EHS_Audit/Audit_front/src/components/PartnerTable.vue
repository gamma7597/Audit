<template>
  <div>
    <table class="table_style">
      <thead>
        <tr>
          <th scope="col">Partenaire</th>
          <th scope="col">Numéro de contrat</th>
          <th scope="col">Localisation</th>
          <th scope="col">Description</th>
          <th scope="col">Debut de la prestation</th>
          <th scope="col">Fin de la prestation</th>
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
          <td>{{partner.start_service}}</td>
          <td>{{partner.end_service}}</td>
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