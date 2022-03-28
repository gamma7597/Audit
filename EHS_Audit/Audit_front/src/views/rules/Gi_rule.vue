<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="gi_rules_1" label="Un système de surveillance et d'alerte en cas d'incident de sécurité est présent" label-for="gi_rules_1-select">
        <b-form-select id="gi_rules_1-select" v-model="formData.gi_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="gi_rules_1_comment" label="Commentaire du partenaire" label-for="gi_rules_1_comment-select">
        <b-form-input id="gi_rules_1_comment-input" v-model="formData.gi_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gi_rules_1_impact" label="Impact" label-for="gi_rules_1_impact-select">
        <b-form-select id="gi_rules_1_impact-select" v-model="formData.gi_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="gi_rules_1_engie" label="Commentaire EHS" label-for="gi_rules_1_engie-select">
        <b-form-input id="gi_rules_1_engie-input" v-model="formData.gi_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gi_rules_2" label="Un système de résolution d'incident est présent" label-for="gi_rules_2-select">
        <b-form-select id="gi_rules_2-select" v-model="formData.gi_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="gi_rules_2_comment" label="Commentaire du partenaire" label-for="gi_rules_2_comment-select">
        <b-form-input id="gi_rules_2_comment-input" v-model="formData.gi_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gi_rules_2_impact" label="Impact" label-for="gi_rules_2_impact-select">
        <b-form-select id="gi_rules_2_impact-select" v-model="formData.gi_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="gi_rules_2_engie" label="Commentaire EHS" label-for="gi_rules_2_engie-select">
        <b-form-input id="gi_rules_2_engie-input" v-model="formData.gi_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gi_rules_3" label="Il existe un processus pour alerter EHS rapidement en cas d'incident impactant le service du partenaire. 
Ce processus doit être connu par tous les employés du partenaire.
Préciser les délais de notification." label-for="gi_rules_3-select">
        <b-form-select id="gi_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="gi_rules_3_comment" label="Commentaire du partenaire" label-for="gi_rules_3_comment-select">
        <b-form-input id="gi_rules_3_comment-input" v-model="formData.gi_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="gi_rules_3_impact" label="Impact" label-for="gi_rules_3_impact-select">
        <b-form-select id="gi_rules_3_impact-select" v-model="formData.gi_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="gi_rules_3_engie" label="Commentaire EHS" label-for="gi_rules_3_engie-select">
        <b-form-input id="gi_rules_3_engie-input" v-model="formData.gi_3_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("gi_rules", ["gi_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("gi_rules", ["edit_gi_rules"]),
      handleSubmit() {
        const payload = {
          company: this.gi_rules.company,
          data: {
            company: this.gi_rules.company,
            gi_1: this.formData.gi_1,
            gi_1_comment: this.formData.gi_1_comment,
            gi_1_impact: this.formData.gi_1_impact,
            gi_1_engie: this.formData.gi_1_engie,
            gi_2: this.formData.gi_2,
            gi_2_comment: this.formData.gi_2_comment,
            gi_2_impact: this.formData.gi_2_impact,
            gi_2_engie: this.formData.gi_2_engie,
            gi_3: this.formData.gi_3,
            gi_3_comment: this.formData.gi_3_comment,
            gi_3_impact: this.formData.gi_3_impact,
            gi_3_engie: this.formData.gi_3_engie,
            partnerId: this.gi_rules.partnerId,
          },
        };
        this.edit_gi_rules(payload);
        this.formData = this.gi_rules
      },
    },
    mounted() {
      this.formData = this.gi_rules
    }
  }
</script>
