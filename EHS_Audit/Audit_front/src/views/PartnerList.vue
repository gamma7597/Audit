<template>
    <div>
        <h3 id="title">Les partenaires Engie Home Services</h3>
        <AddPartner />
        <PartnerTable />
    </div>
</template>

<script>
    import PartnerTable from '@/components/PartnerTable.vue'
    import AddPartner from '@/components/AddPartner.vue'
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
        mounted() {
            this.$store.dispatch('partner/getPartners')
        }
    }
</script>