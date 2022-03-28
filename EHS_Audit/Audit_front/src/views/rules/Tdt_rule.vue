<template>
  <div>
    <b-button :to="'/rules/' + partner.company" variant="success"
      >Retour</b-button
    >
    <b-form @submit.prevent="handleSubmit">
      <b-form-group
        id="tdt_rules_1"
        label="Informations Commercialement Sensibles (ICS)"
        label-for="tdt_rules_1-select"
      >
        <b-form-select
          id="tdt_rules_1-select"
          v-model="formData.tdt_1"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="tdt_rules_1_comment"
        label="Commentaire du partenaire"
        label-for="tdt_rules_1_comment-select"
      >
        <b-form-input
          id="tdt_rules_1_comment-input"
          v-model="formData.tdt_1_comment"
          placeholder="commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="tdt_rules_2"
        label="Données à Caractère Personnel (DCP) (employés et/ou client EHS)"
        label-for="tdt_rules_2-select"
      >
        <b-form-select
          id="tdt_rules_2-select"
          v-model="formData.tdt_2"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="tdt_rules_2_comment"
        label="Commentaire du partenaire"
        label-for="tdt_rules_2_comment-select"
      >
        <b-form-input
          id="tdt_rules_2_comment-input"
          v-model="formData.tdt_2_comment"
          placeholder="commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="tdt_rules_3"
        label="Informations concernant des méthodes, outils de travail et/ou stratégies d'EHS"
        label-for="tdt_rules_3-select"
      >
        <b-form-select
          id="tdt_rules_3-select"
          v-model="formData.tdt_3"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="tdt_rules_3_comment"
        label="Commentaire du partenaire"
        label-for="tdt_rules_3_comment-select"
      >
        <b-form-input
          id="tdt_rules_3_comment-input"
          v-model="formData.tdt_3_comment"
          placeholder="commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="tdt_rules_4"
        label="Informations bancaire/financière"
        label-for="tdt_rules_4-select"
      >
        <b-form-select
          id="tdt_rules_4-select"
          v-model="formData.tdt_4"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="tdt_rules_4_comment"
        label="Commentaire du partenaire"
        label-for="tdt_rules_4_comment-select"
      >
        <b-form-input
          id="tdt_rules_4_comment-input"
          v-model="formData.tdt_4_comment"
          placeholder="commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="tdt_rules_5"
        label="Données B2C"
        label-for="tdt_rules_5-select"
      >
        <b-form-select
          id="tdt_rules_5-select"
          v-model="formData.tdt_5"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="tdt_rules_5_comment"
        label="Commentaire du partenaire"
        label-for="tdt_rules_5_comment-select"
      >
        <b-form-input
          id="tdt_rules_5_comment-input"
          v-model="formData.tdt_5_comment"
          placeholder="commentaire"
        ></b-form-input>
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
        { value: "Oui", text: "Oui" },
        { value: "Non", text: "Non" },
      ],
    };
  },
  computed: {
    ...mapState("tdt_rules", ["tdt_rules"]),
    ...mapState("partner", ["partner"]),
  },
  methods: {
    ...mapActions("tdt_rules", ["edit_tdt_rules"]),
    handleSubmit() {
      const payload = {
        company: this.tdt_rules.company,
        data: {
          company: this.tdt_rules.company,
          tdt_1: this.formData.tdt_1,
          tdt_1_comment: this.formData.tdt_1_comment,
          tdt_2: this.formData.tdt_2,
          tdt_2_comment: this.formData.tdt_2_comment,
          tdt_3: this.formData.tdt_3,
          tdt_3_comment: this.formData.tdt_3_comment,
          tdt_4: this.formData.tdt_4,
          tdt_4_comment: this.formData.tdt_4_comment,
          tdt_5: this.formData.tdt_5,
          tdt_5_comment: this.formData.tdt_5_comment,
          partnerId: this.tdt_rules.partnerId,
        },
      };
      this.edit_tdt_rules(payload);
      this.formData = this.tdt_rules;
    },
  },
  mounted() {
    this.formData = this.tdt_rules;
  },
};
</script>