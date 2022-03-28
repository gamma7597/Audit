<template>
    <div>
        
        <h1>Bienvenue sur le compte {{ partner.company }}</h1>

        <p>Voici vos informations : </p>
        <h5>Numéro de contrat : {{ partner.contract_number }}</h5>
        <h5>Localisation : {{ partner.location }}</h5>
        <h5>Description : {{ partner.description }}</h5>

        <h4>A partir de cette page, vous pouvez : </h4>
        <ul>
            <li>Modifier vos règles cybersécurité.</li>
            <li>Ajouter des fichiers / images.</li>
            <li>Visualiser votre maturité.</li>
            <li>Modifier vos contacts.</li>
            <li>Ajouter vos employes.</li>
        </ul>
        <p>
            Cet audit cybersécurité permet un suivi de votre maturité sur la durée. <br />
            Des indications sont présentes pour vous aider à comprendre les actions qui vous sont demandés.<br />
            Nous insistons sur le fait que l'ajout ou la modifications des informations est à votre initiative, <br />
            dans le but d'avoir une représentation la plus fidèle et exhaustive à l'instant T. <br />
            Nous restons bien evidemment disponible pour vous aider à le maintenir à jour et pour répondre à vos questions.
        </p>

        
        <AddContact />
        <ContactTable />
        <AddEmployee />
        <EmployeeTable />
        <b-button :to="'/rules/'+partner.company" variant="success">Règles</b-button>
        <b-button :to="partner.company+'/files/'" variant="success">Fichiers</b-button>

        <EditPartner :partner="partner" />
        <b-button v-on:click="removePartner()" to="/partnerList" variant="danger">Supprimer le partenaire</b-button>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import EditPartner from '@/components/EditPartner.vue'
    import ContactTable from '@/components/ContactTable.vue'
    import AddContact from '@/components/AddContact.vue' 
    import EmployeeTable from '@/components/EmployeeTable.vue'
    import AddEmployee from '@/components/AddEmployee.vue' 
    export default {
        components: {
            EditPartner,
            ContactTable,
            AddContact,
            EmployeeTable,
            AddEmployee
        },
        computed: {
            ...mapState('partner', [ 'partner' ])
        },
        methods: {
            removePartner() {
                this.$store.dispatch('partner/removePartner', this.partner.company)
            }
        },
        mounted() {
            this.$store.dispatch('partner/getOnePartner', this.$route.params.company)
            this.$store.dispatch("contact/getContacts", this.$route.params.company)
            this.$store.dispatch("employee/getEmployees", this.$route.params.company)
            this.$store.dispatch('co_rules/get_co_rules', this.$route.params.company)
            this.$store.dispatch('g_rules/get_g_rules', this.$route.params.company)
            this.$store.dispatch('rh_rules/get_rh_rules', this.$route.params.company)
            this.$store.dispatch('pt_rules/get_pt_rules', this.$route.params.company)
            this.$store.dispatch('a_rules/get_a_rules', this.$route.params.company)
            this.$store.dispatch('ca_rules/get_ca_rules', this.$route.params.company)
            this.$store.dispatch('spe_rules/get_spe_rules', this.$route.params.company)
            this.$store.dispatch('c_rules/get_c_rules', this.$route.params.company)
            this.$store.dispatch('adm_rules/get_adm_rules', this.$route.params.company)
            this.$store.dispatch('se_rules/get_se_rules', this.$route.params.company)
            this.$store.dispatch('rf_rules/get_rf_rules', this.$route.params.company)
            this.$store.dispatch('gi_rules/get_gi_rules', this.$route.params.company)
            this.$store.dispatch('gca_rules/get_gca_rules', this.$route.params.company)
            this.$store.dispatch('ie_rules/get_ie_rules', this.$route.params.company)
            this.$store.dispatch('rgpd_rules/get_rgpd_rules', this.$route.params.company)
            this.$store.dispatch('cd_rules/get_cd_rules', this.$route.params.company)
            this.$store.dispatch('tdt_rules/get_tdt_rules', this.$route.params.company)
        }
    }
</script>
