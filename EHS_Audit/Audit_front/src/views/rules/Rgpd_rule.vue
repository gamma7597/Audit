<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="rgpd_rules_1" label="La nature de la prestation (finalité du traitement) et des données justifient l’instruction d’un dossier DPIA" label-for="rgpd_rules_1-select">
        <b-form-select id="rgpd_rules_1-select" v-model="formData.rgpd_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="rgpd_rules_1_comment" label="Commentaire du partenaire" label-for="rgpd_rules_1_comment-select">
        <b-form-input id="rgpd_rules_1_comment-input" v-model="formData.rgpd_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rgpd_rules_1_impact" label="Impact" label-for="rgpd_rules_1_impact-select">
        <b-form-select id="rgpd_rules_1_impact-select" v-model="formData.rgpd_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="rgpd_rules_1_engie" label="Commentaire EHS" label-for="rgpd_rules_1_engie-select">
        <b-form-input id="rgpd_rules_1_engie-input" v-model="formData.rgpd_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rgpd_rules_2" label="La protection des données personnelles est prise en compte dès le début des projets (Privacy By Design) et avec le plus haut niveau de protection possible (Privacy By Default)" label-for="rgpd_rules_2-select">
        <b-form-select id="rgpd_rules_2-select" v-model="formData.rgpd_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="rgpd_rules_2_comment" label="Commentaire du partenaire" label-for="rgpd_rules_2_comment-select">
        <b-form-input id="rgpd_rules_2_comment-input" v-model="formData.rgpd_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rgpd_rules_2_impact" label="Impact" label-for="rgpd_rules_2_impact-select">
        <b-form-select id="rgpd_rules_2_impact-select" v-model="formData.rgpd_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="rgpd_rules_2_engie" label="Commentaire EHS" label-for="rgpd_rules_2_engie-select">
        <b-form-input id="rgpd_rules_2_engie-input" v-model="formData.rgpd_2_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("rgpd_rules", ["rgpd_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("rgpd_rules", ["edit_rgpd_rules"]),
      handleSubmit() {
        const payload = {
          company: this.rgpd_rules.company,
          data: {
            company: this.rgpd_rules.company,
            rgpd_1: this.formData.rgpd_1,
            rgpd_1_comment: this.formData.rgpd_1_comment,
            rgpd_1_impact: this.formData.rgpd_1_impact,
            rgpd_1_engie: this.formData.rgpd_1_engie,
            rgpd_2: this.formData.rgpd_2,
            rgpd_2_comment: this.formData.rgpd_2_comment,
            rgpd_2_impact: this.formData.rgpd_2_impact,
            rgpd_2_engie: this.formData.rgpd_2_engie,
            partnerId: this.rgpd_rules.partnerId,
          },
        };
        this.edit_rgpd_rules(payload);
        this.formData = this.rgpd_rules
      },
    },
    mounted() {
      this.formData = this.rgpd_rules
    }
  }
</script>
