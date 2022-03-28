<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="gca_rules_1" label="Présence d'un PCA [Plan de Continuité d'Activité] maintenu et testé" label-for="gca_rules_1-select">
        <b-form-select id="gca_rules_1-select" v-model="formData.gca_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="gca_rules_1_comment" label="Commentaire du partenaire" label-for="gca_rules_1_comment-select">
        <b-form-input id="gca_rules_1_comment-input" v-model="formData.gca_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gca_rules_1_impact" label="Impact" label-for="gca_rules_1_impact-select">
        <b-form-select id="gca_rules_1_impact-select" v-model="formData.gca_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="gca_rules_1_engie" label="Comentaire EHS" label-for="gca_rules_1_engie-select">
        <b-form-input id="gca_rules_1_engie-input" v-model="formData.gca_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gca_rules_2" label="Présence d'un PRA [Plan de Reprise d'Activité] maintenu et testé" label-for="gca_rules_2-select">
        <b-form-select id="gca_rules_2-select" v-model="formData.gca_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="gca_rules_2_comment" label="Commentaire du partenaire" label-for="gca_rules_2_comment-select">
        <b-form-input id="gca_rules_2_comment-input" v-model="formData.gca_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gca_rules_2_impact" label="Impact" label-for="gca_rules_2_impact-select">
        <b-form-select id="gca_rules_2_impact-select" v-model="formData.gca_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="gca_rules_2_engie" label="Comentaire EHS" label-for="gca_rules_2_engie-select">
        <b-form-input id="gca_rules_2_engie-input" v-model="formData.gca_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gca_rules_3" label="Présence d'un PSR [Plan de Sauvegarde et Restitution] maintenu et testé" label-for="gca_rules_3-select">
        <b-form-select id="gca_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="gca_rules_3_comment" label="Commentaire du partenaire" label-for="gca_rules_3_comment-select">
        <b-form-input id="gca_rules_3_comment-input" v-model="formData.gca_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gca_rules_3_impact" label="Impact" label-for="gca_rules_3_impact-select">
        <b-form-select id="gca_rules_3_impact-select" v-model="formData.gca_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="gca_rules_3_engie" label="Comentaire EHS" label-for="gca_rules_3_engie-select">
        <b-form-input id="gca_rules_3_engie-input" v-model="formData.gca_3_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("gca_rules", ["gca_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("gca_rules", ["edit_gca_rules"]),
      handleSubmit() {
        const payload = {
          company: this.gca_rules.company,
          data: {
            company: this.gca_rules.company,
            gca_1: this.formData.gca_1,
            gca_1_comment: this.formData.gca_1_comment,
            gca_1_impact: this.formData.gca_1_impact,
            gca_1_engie: this.formData.gca_1_engie,
            gca_2: this.formData.gca_2,
            gca_2_comment: this.formData.gca_2_comment,
            gca_2_impact: this.formData.gca_2_impact,
            gca_2_engie: this.formData.gca_2_engie,
            gca_3: this.formData.gca_3,
            gca_3_comment: this.formData.gca_3_comment,
            gca_3_impact: this.formData.gca_3_impact,
            gca_3_engie: this.formData.gca_3_engie,
            partnerId: this.gca_rules.partnerId,
          },
        };
        this.edit_gca_rules(payload);
        this.formData = this.gca_rules
      },
    },
    mounted() {
      this.formData = this.gca_rules
    }
  }
</script>
