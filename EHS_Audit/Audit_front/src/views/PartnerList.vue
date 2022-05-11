<template>
    <div>
        <h3 id="title">Les partenaires Engie Home Services</h3>
        <AddPartner v-if="!groups.includes('GG-USR-APPCONFORMITE-METIER')" />
        <PartnerTable />
    </div>
</template>

<script>
    import PartnerTable from '@/components/PartnerTable.vue'
    import AddPartner from '@/components/AddPartner.vue'
    import { mapState } from "vuex";
    export default {
        components: {
            PartnerTable,
            AddPartner
        },
        data() {
            return {
                claims: {}
            }
        },
        computed: {
            ...mapState("user", ["groups"]),
        },
        mounted() {
            this.$store.dispatch('partner/getPartners')
        }
    }
</script>