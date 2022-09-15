<template>
    <div>
        
        <h3 id="title">Bienvenue sur le compte {{ activePartner.company }}</h3>

        <button v-if="groups.includes('OKTA-CONFORMITE-PROD-ADMIN')" class="button_blue" v-on:click="remove()">Supprimer le partenaire</button>

        <EditPartner />
        
        <table class="table_style">
            <caption>Informations {{activePartner.company}}</caption>
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
                <tr>
                    <td>{{activePartner.company}}</td>
                    <td>{{activePartner.contract_number}}</td>
                    <td>{{activePartner.location}}</td>
                    <td>{{activePartner.description}}</td>
                    <td>{{activePartner.start_service}}</td>
                    <td>{{activePartner.end_service}}</td>
                </tr>
            </tbody>
        </table>

        <button class="button_blue" @click="goToRules(activePartner.company)">Règles</button>
        <button class="button_blue" @click="goToFiles(activePartner.company)">Fichiers</button>

        <p id="container">
            Cet audit cybersécurité permet un suivi de votre maturité sur la durée. <br />
            Des indications sont présentes pour vous aider à comprendre les actions qui vous sont demandés.<br />
            Nous insistons sur le fait que l'ajout ou la modifications des informations est à votre initiative, <br />
            dans le but d'avoir une représentation la plus fidèle et exhaustive à l'instant T. <br />
            Nous restons bien evidemment disponible pour vous aider à le maintenir à jour et pour répondre à vos questions.
        </p>

        <AddContact />
        <ContactTable />
        <!--<AddEmployee />
        <EmployeeTable />-->

    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex'
    import EditPartner from '@/components/EditPartner.vue'
    import ContactTable from '@/components/ContactTable.vue'
    import AddContact from '@/components/AddContact.vue' 
    //import EmployeeTable from '@/components/EmployeeTable.vue'
    //import AddEmployee from '@/components/AddEmployee.vue' 
    export default {
        components: {
            EditPartner,
            ContactTable,
            AddContact,
            //EmployeeTable,
            //AddEmployee
        },
        computed: {
            ...mapGetters('partner', [ 'activePartner' ]),
            ...mapState("user", ["groups"])
        },
        methods: {
            ...mapActions('partner', [ 'removePartner' ]),
            remove() {
                this.removePartner(this.activePartner.company)
                this.$router.push("/partnerList")
            },
            goToRules(partner){
                this.$router.push("/rules/"+partner)
            },
            goToFiles(partner){
                this.$router.push(partner+"/files/")
            }
        },
        created() {
            this.$store.dispatch('partner/getOnePartner', this.$route.params.company)
            this.$store.dispatch("contact/getContacts", this.$route.params.company)
            //this.$store.dispatch("employee/getEmployees", this.$route.params.company)
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
