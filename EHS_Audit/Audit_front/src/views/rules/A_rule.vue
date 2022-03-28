<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="a_rules_1" label="Les données d'EHS stockées par le partenaire sont chiffrées" label-for="a_rules_1-select">
        <b-form-select id="a_rules_1-select" v-model="formData.a_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="a_rules_1_comment" label="Commentaire du partenaire" label-for="a_rules_1_comment-select">
        <b-form-input id="a_rules_1_comment-input" v-model="formData.a_1_comment"></b-form-input>
      </b-form-group>
      <b-form-group id="a_rules_1_impact" label="Impact" label-for="a_rules_1_impact-select">
        <b-form-select id="a_rules_1_impact-select" v-model="formData.a_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="a_rules_1_engie" label="Commentaire EHS" label-for="a_rules_1_engie-select">
        <b-form-input id="a_rules_1_engie-input" v-model="formData.a_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="a_rules_2" label="Le partenaire doit assurer la réversibilité en fin de contrat ou suite à l’activation de la clause de réversibilité" label-for="a_rules_2-select">
        <b-form-select id="a_rules_2-select" v-model="formData.a_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="a_rules_2_comment" label="Commentaire du partenaire" label-for="a_rules_2_comment-select">
        <b-form-input id="a_rules_2_comment-input" v-model="formData.a_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="a_rules_2_impact" label="Impact" label-for="a_rules_2_impact-select">
        <b-form-select id="a_rules_2_impact-select" v-model="formData.a_2_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="a_rules_2_engie" label="Commentaire EHS" label-for="a_rules_2_engie-select">
        <b-form-input id="a_rules_2_engie-input" v-model="formData.a_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="a_rules_3" label="Il existe une procédure permettant de prouver la restitution ou la destruction des actifs (données et support) sur les environnement du partenaire et ses sous-traitants" label-for="a_rules_3-select">
        <b-form-select id="a_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="a_rules_3_comment" label="Commentaire du partenaire" label-for="a_rules_3_comment-select">
        <b-form-input id="a_rules_3_comment-input" v-model="formData.a_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="a_rules_3_impact" label="Impact" label-for="a_rules_3_impact-select">
        <b-form-select id="a_rules_3_impact-select" v-model="formData.a_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="a_rules_3_engie" label="Commentaire EHS" label-for="a_rules_3_engie-select">
        <b-form-input id="a_rules_3_engie-input" v-model="formData.a_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="a_rules_4" label="Le partenaire doit envoyer a EHS une preuve de blanchissement des serveurs si le contrat le prévoit" label-for="a_rules_4-select">
        <b-form-select id="a_rules_4-select" v-model="formData.a_4" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="a_rules_4_comment" label="Commentaire du partenaire" label-for="a_rules_4_comment-select">
        <b-form-input id="a_rules_4_comment-input" v-model="formData.a_4_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="a_rules_4_impact" label="Impact" label-for="a_rules_4_impact-select">
        <b-form-select id="a_rules_4_impact-select" v-model="formData.a_4_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="a_rules_4_engie" label="Commentaire EHS" label-for="a_rules_4_engie-select">
        <b-form-input id="a_rules_4_engie-input" v-model="formData.a_4_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("a_rules", ["a_rules"]),
      ...mapState("partner", ["partner"]),
    },
    methods: {
      ...mapActions("a_rules", ["edit_a_rules"]),
      handleSubmit() {
        const payload = {
          company: this.a_rules.company,
          data: {
            company: this.a_rules.company,
            a_1: this.formData.a_1,
            a_1_comment: this.formData.a_1_comment,
            a_1_impact: this.formData.a_1_impact,
            a_1_engie: this.formData.a_1_engie,
            a_2: this.formData.a_2,
            a_2_comment: this.formData.a_2_comment,
            a_2_impact: this.formData.a_2_impact,
            a_2_engie: this.formData.a_2_engie,
            a_3: this.formData.a_3,
            a_3_comment: this.formData.a_3_comment,
            a_3_impact: this.formData.a_3_impact,
            a_3_engie: this.formData.a_3_engie,
            a_4: this.formData.a_4,
            a_4_comment: this.formData.a_4_comment,
            a_4_impact: this.formData.a_4_impact,
            a_4_engie: this.formData.a_4_engie,
            partnerId: this.a_rules.partnerId,
          },
        };
        this.edit_a_rules(payload);
        this.formData = this.a_rules;
      },
    },
    mounted() {
      this.formData = this.a_rules
    }
  }
</script>
