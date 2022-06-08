<template>
  <div class="addpartner">

    <button class="button_blue" @click="togglePartnerForm" type="button">Ajouter un partenaire</button>

    <form @submit.prevent="verifForm" v-if="showPartnerForm">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="company">Nom du partenaire</label>
      <input type="text" 
        id="company" 
        v-model="formData.company" />
      
      <label for="contract_number">Numero de contrat</label>
      <input type="text" 
        id="contract_number" 
        v-model="formData.contract_number" />

      <label for="location">Localisation</label>
      <input type="text" 
        id="location" 
        v-model="formData.location" />

      <label for="description">Description</label>
      <input type="text" 
        id="description" 
        v-model="formData.description" />

      <label for="start_service">Debut de la prestation</label>
      <input type="date" 
        id="start_service" 
        v-model="formData.start_service"/>

      <label for="end_service">Fin de la prestation</label>
      <input type="date" 
        id="end_service" 
        v-model="formData.end_service"/>

      <button class="button_form" type="submit">Ajouter</button>
      <button class="button_form" type="reset">Réinitialiser le formulaire</button>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'AddPartner',
    data() {
      return {
        errors: [],
        showPartnerForm: false,
        formData: {
          company: '',
          contract_number: '',
          location: '',
          description: '',
          start_service: '',
          end_service: ''
        }
      }
    },
    methods: {
      ...mapActions('partner', [ 'addPartner' ]),
      ...mapActions('partner', [ 'getOnePartner' ]),
      ...mapActions("co_rules", ["add_co_rules"]),
      ...mapActions("a_rules", ["add_a_rules"]),
      ...mapActions("adm_rules", ["add_adm_rules"]),
      ...mapActions("c_rules", ["add_c_rules"]),
      ...mapActions("ca_rules", ["add_ca_rules"]),
      ...mapActions("gca_rules", ["add_gca_rules"]),
      ...mapActions("cd_rules", ["add_cd_rules"]),
      ...mapActions("g_rules", ["add_g_rules"]),
      ...mapActions("gi_rules", ["add_gi_rules"]),
      ...mapActions("ie_rules", ["add_ie_rules"]),
      ...mapActions("pt_rules", ["add_pt_rules"]),
      ...mapActions("rf_rules", ["add_rf_rules"]),
      ...mapActions("rgpd_rules", ["add_rgpd_rules"]),
      ...mapActions("tdt_rules", ["add_tdt_rules"]),
      ...mapActions("rh_rules", ["add_rh_rules"]),
      ...mapActions("se_rules", ["add_se_rules"]),
      ...mapActions("spe_rules", ["add_spe_rules"]),
      ...mapActions("maturite", ["addMaturites"]),
      togglePartnerForm() {
        this.showPartnerForm = !this.showPartnerForm
      },
      verifForm() {
        this.errors = [];

        const { company, contract_number, location, description, start_service, end_service } = this.formData
        
        if(!company) {
          this.errors.push("Le nom du partenaire ne peut pas être vide !");
        }
        if(!company.toUpperCase()) {
          this.errors.push("Le nom du partenaire doit être en majuscule !");
        }
        if(company.length > 30) {
          this.errors.push("Le nom du partenaire doit faire maximum 30 caractères !");
        }
        
        if(!contract_number) {
          this.errors.push("Le numéro de contrat ne peut pas être vide !");
        }

        if(!location) {
          this.errors.push("La localisation ne peut pas être vide !");
        }
        if(location.length > 30) {
          this.errors.push("La localisation doit faire maximum 30 caractères !");
        }

        if(!description) {
          this.errors.push("La description ne peut pas être vide !");
        }
        if(description.length > 100) {
          this.errors.push("La description doit faire maximum 100 caractères !");
        }

        if(!start_service) {
          this.errors.push("Le debut de la prestation ne peut pas être vide !");
        }

        if(!end_service) {
          this.errors.push("La fin de la prestation ne peut pas être vide !");
        }
        if(end_service < start_service) {
          this.errors.push("La fin de la prestation doit être après le début de la prestation !");
        }

        if (this.errors.length != 0)
        {
          return true;
        }
        else {
          this.handleSubmit()
        }
      },
      async handleSubmit() {
        const { company, contract_number, location, description, start_service, end_service } = this.formData

        const payload = {
          company,
          contract_number,
          location,
          description,
          start_service,
          end_service
        }
        await this.addPartner(payload)
        this.formData = {
          company: '',
          contract_number: '',
          location: '',
          description: '',
          start_service: '',
          end_service: ''
        }
        this.togglePartnerForm()
        this.addRules()
      },
      addRules(){
        const payload = {
          company: this.$store.state.partner.partner.company,
          partnerId: this.$store.state.partner.partner.id,
        };
        this.add_co_rules(payload);
        this.add_a_rules(payload);
        this.add_adm_rules(payload);
        this.add_c_rules(payload);
        this.add_ca_rules(payload);
        this.add_gca_rules(payload);
        this.add_cd_rules(payload);
        this.add_g_rules(payload);
        this.add_gi_rules(payload);
        this.add_ie_rules(payload);
        this.add_pt_rules(payload);
        this.add_rf_rules(payload);
        this.add_rgpd_rules(payload);
        this.add_tdt_rules(payload);
        this.add_rh_rules(payload);
        this.add_se_rules(payload);
        this.add_spe_rules(payload);
        this.addMaturites(payload);
      }
    }
  }
</script>
