<template>
  <div>
    <b-button :to="'/rules/' + partner.company" variant="success"
      >Retour</b-button
    >
    <b-form @submit.prevent="handleSubmit">
      <b-form-group
        id="co_rules_1"
        label="Accès applicatif (ex : filtrage applicatif)"
        label-for="co_rules_1-select"
      >
        <b-form-select
          id="co_rules_1-select"
          v-model="formData.co_1"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="co_rules_1_comment"
        label="Commentaire du partenaire"
        label-for="co_rules_1_comment-select"
      >
        <b-form-input
          id="co_rules_1_comment-input"
          v-model="formData.co_1_comment"
          placeholder="Commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="co_rules_2"
        label="Accès VPN (Global Protect) / Firewall"
        label-for="co_rules_2-select"
      >
        <b-form-select
          id="co_rules_2-select"
          v-model="formData.co_2"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="co_rules_2_comment"
        label=""
        label-for="co_rules_2_comment-select"
      >
        <b-form-input
          id="co_rules_2_comment-input"
          v-model="formData.co_2_comment"
          placeholder="Commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="co_rules_3"
        label="Accès ZPA"
        label-for="co_rules_3-select"
      >
        <b-form-select
          id="co_rules_3-select"
          v-model="formData.co_3"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="co_rules_3_comment"
        label="Commentaire du partenaire"
        label-for="co_rules_3_comment-select"
      >
        <b-form-input
          id="co_rules_3_comment-input"
          v-model="formData.co_3_comment"
          placeholder="Commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="co_rules_4"
        label="Accès lien réseau Wan dédié (MPLS)"
        label-for="co_rules_4-select"
      >
        <b-form-select
          id="co_rules_4-select"
          v-model="formData.co_4"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="co_rules_4_comment"
        label="Commentaire du partenaire"
        label-for="co_rules_4_comment-select"
      >
        <b-form-input
          id="co_rules_4_comment-input"
          v-model="formData.co_4_comment"
          placeholder="Commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="co_rules_5"
        label="Depuis un réseau externe en SSO ENGIE avec OKTA"
        label-for="co_rules_5-select"
      >
        <b-form-select
          id="co_rules_5-select"
          v-model="formData.co_5"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="co_rules_5_comment"
        label="Commentaire du partenaire"
        label-for="co_rules_5_comment-select"
      >
        <b-form-input
          id="co_rules_5_comment-input"
          v-model="formData.co_5_comment"
          placeholder="Commentaire"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="co_rules_6"
        label="Depuis un réseau externe en MFA avec OKTA"
        label-for="co_rules_6-select"
      >
        <b-form-select
          id="co_rules_6-select"
          v-model="formData.co_6"
          :options="options"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="co_rules_6_comment"
        label="Commentaire du partenaire"
        label-for="co_rules_6_comment-select"
      >
        <b-form-input
          id="co_rules_6_comment-input"
          v-model="formData.co_6_comment"
          placeholder="Commentaire"
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
    ...mapState("co_rules", ["co_rules"]),
    ...mapState("partner", ["partner"]),
  },
  methods: {
    ...mapActions("co_rules", ["edit_co_rules"]),
    handleSubmit() {
      console.log(this.co_rules);
      const payload = {
        company: this.co_rules.company,
        data: {
          company: this.co_rules.company,
          co_1: this.formData.co_1,
          co_1_comment: this.formData.co_1_comment,
          co_2: this.formData.co_2,
          co_2_comment: this.formData.co_2_comment,
          co_3: this.formData.co_3,
          co_3_comment: this.formData.co_3_comment,
          co_4: this.formData.co_4,
          co_4_comment: this.formData.co_4_comment,
          co_5: this.formData.co_5,
          co_5_comment: this.formData.co_5_comment,
          co_6: this.formData.co_6,
          co_6_comment: this.formData.co_6_comment,
          partnerId: this.co_rules.partnerId,
        },
      };
      this.edit_co_rules(payload);
      this.formData = this.co_rules;
    },
  },
  mounted() {
    this.formData = this.co_rules;
  },
};
</script>