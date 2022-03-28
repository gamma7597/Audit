<template>
  <div>
    <b-table striped hover :items="partners">
      <template #cell(company)="data">
        <router-link :to="`/partner/${data.value}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
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