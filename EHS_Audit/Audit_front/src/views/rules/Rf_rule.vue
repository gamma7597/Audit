<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="rf_rules_1" label="Le partenaire doit déclarer l’existence de sous-traitants en lien avec la prestation et la nature des relations avec ces derniers sur le plan des responsabilités" label-for="rf_rules_1-select">
        <b-form-select id="rf_rules_1-select" v-model="formData.rf_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="rf_rules_1_comment" label="Commentaire du partenaire" label-for="rf_rules_1_comment-select">
        <b-form-input id="rf_rules_1_comment-input" v-model="formData.rf_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rf_rules_1_impact" label="Impact" label-for="rf_rules_1_impact-select">
        <b-form-select id="rf_rules_1_impact-select" v-model="formData.rf_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="rf_rules_1_engie" label="Commentaire EHS" label-for="rf_rules_1_engie-select">
        <b-form-input id="rf_rules_1_engie-input" v-model="formData.rf_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rf_rules_2" label="Le partenaire doit maitriser la sécurité de ses sous-traitants" label-for="rf_rules_2-select">
        <b-form-select id="rf_rules_2-select" v-model="formData.rf_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="rf_rules_2_comment" label="Commentaire du partenaire" label-for="rf_rules_2_comment-select">
        <b-form-input id="rf_rules_2_comment-input" v-model="formData.rf_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rf_rules_2_impact" label="Impact" label-for="rf_rules_2_impact-select">
        <b-form-select id="rf_rules_2_impact-select" v-model="formData.rf_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="rf_rules_2_engie" label="Commentaire EHS" label-for="rf_rules_2_engie-select">
        <b-form-input id="rf_rules_2_engie-input" v-model="formData.rf_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rf_rules_3" label="Les fournisseurs signent une clause de confidentialité" label-for="rf_rules_3-select">
        <b-form-select id="rf_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="rf_rules_3_comment" label="Commentaire du partenaire" label-for="rf_rules_3_comment-select">
        <b-form-input id="rf_rules_3_comment-input" v-model="formData.rf_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rf_rules_3_impact" label="Impact" label-for="rf_rules_3_impact-select">
        <b-form-select id="rf_rules_3_impact-select" v-model="formData.rf_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="rf_rules_3_engie" label="Commentaire EHS" label-for="rf_rules_3_engie-select">
        <b-form-input id="rf_rules_3_engie-input" v-model="formData.rf_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Envoyer</b-button>
      <b-button type="reset" variant="danger">Reinitialiser</b-button>
    </b-form>

  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  export default {
    data() {
      return {
        formData: {},
        options: [
          { value: "N/A", text: "N/A" },
          { value: "Oui", text: "Oui" },
          { value: "Non", text: "Non" },
          { value: "En cours", text: "En cours" },
          { value: "Partiel", text: "Partiel" },
        ],
        options2: [
          { value: 1, text: 1 },
          { value: 2, text: 2 },
          { value: 3, text: 3 },
          { value: 4, text: 4 }
        ]
      }
    },
    computed: {
      ...mapState("rf_rules", ["rf_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("rf_rules", ["edit_rf_rules"]),
      handleSubmit() {
        const payload = {
          company: this.rf_rules.company,
          data: {
            company: this.rf_rules.company,
            rf_1: this.formData.rf_1,
            rf_1_comment: this.formData.rf_1_comment,
            rf_1_impact: this.formData.rf_1_impact,
            rf_1_engie: this.formData.rf_1_engie,
            rf_2: this.formData.rf_2,
            rf_2_comment: this.formData.rf_2_comment,
            rf_2_impact: this.formData.rf_2_impact,
            rf_2_engie: this.formData.rf_2_engie,
            rf_3: this.formData.rf_3,
            rf_3_comment: this.formData.rf_3_comment,
            rf_3_impact: this.formData.rf_3_impact,
            rf_3_engie: this.formData.rf_3_engie,
            partnerId: this.rf_rules.partnerId,
          },
        };
        this.edit_rf_rules(payload);
        this.formData = this.rf_rules
      },
    },
    mounted() {
      this.formData = this.rf_rules
    }
  }
</script>
