<template>
    <div>
        <h1>Partners</h1>
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