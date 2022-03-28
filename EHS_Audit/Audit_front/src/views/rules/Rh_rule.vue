<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="rh_rules_1" label="Une procédure de sensibilisation et de formation à la sécurité existe, est appliquée et est à jour" label-for="rh_rules_1-select">
        <b-form-select id="rh_rules_1-select" v-model="formData.rh_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="rh_rules_1_comment" label="Commentaire du partenaire" label-for="rh_rules_1_comment-select">
        <b-form-input id="rh_rules_1_comment-input" v-model="formData.rh_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rh_rules_1_impact" label="Impact" label-for="rh_rules_1_impact-select">
        <b-form-select id="rh_rules_1_impact-select" v-model="formData.rh_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="rh_rules_1_engie" label="Commentaire EHS" label-for="rh_rules_1_engie-select">
        <b-form-input id="rh_rules_1_engie-input" v-model="formData.rh_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rh_rules_2" label="Les exigences en matière de non divulgation reflétant les besoins en matière de protection des informations sont identifiées et documentées [signature d'un NDA]" label-for="rh_rules_2-select">
        <b-form-select id="rh_rules_2-select" v-model="formData.rh_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="rh_rules_2_comment" label="Commentaire du partenaire" label-for="rh_rules_2_comment-select">
        <b-form-input id="rh_rules_2_comment-input" v-model="formData.rh_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="rh_rules_2_impact" label="Impact" label-for="rh_rules_2_impact-select">
        <b-form-select id="rh_rules_2_impact-select" v-model="formData.rh_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="rh_rules_2_engie" label="Commentaire EHS" label-for="rh_rules_2_engie-select">
        <b-form-input id="rh_rules_2_engie-input" v-model="formData.rh_2_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("rh_rules", ["rh_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("rh_rules", ["edit_rh_rules"]),
      handleSubmit() {
        const payload = {
          company: this.rh_rules.company,
          data: {
            company: this.rh_rules.company,
            rh_1: this.formData.rh_1,
            rh_1_comment: this.formData.rh_1_comment,
            rh_1_impact: this.formData.rh_1_impact,
            rh_1_engie: this.formData.rh_1_engie,
            rh_2: this.formData.rh_2,
            rh_2_comment: this.formData.rh_2_comment,
            rh_2_impact: this.formData.rh_2_impact,
            rh_2_engie: this.formData.rh_2_engie,
            partnerId: this.rh_rules.partnerId,
          },
        };
        this.edit_rh_rules(payload);
        this.formData = this.rh_rules
      },
    },
    mounted() {
      this.formData = this.rh_rules
    }
  }
</script>
