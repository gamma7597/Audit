<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="cd_rules_1" label="L'inventaire des données EHS traitées par le partenaire est maintenu à jour" label-for="cd_rules_1-select">
        <b-form-select id="cd_rules_1-select" v-model="formData.cd_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="cd_rules_1_comment" label="Commentaire du partenaire" label-for="cd_rules_1_comment-select">
        <b-form-input id="cd_rules_1_comment-input" v-model="formData.cd_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="cd_rules_1_impact" label="Impact" label-for="cd_rules_1_impact-select">
        <b-form-select id="cd_rules_1_impact-select" v-model="formData.cd_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="cd_rules_1_engie" label="Commentaire EHS" label-for="cd_rules_1_engie-select">
        <b-form-input id="cd_rules_1_engie-input" v-model="formData.cd_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="cd_rules_2" label="Le partenaire dispose d'une échelle de classification des données et l'applique sur les documents en rapport avec la prestation.
" label-for="cd_rules_2-select">
        <b-form-select id="cd_rules_2-select" v-model="formData.cd_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="cd_rules_2_comment" label="Commentaire du partenaire" label-for="cd_rules_2_comment-select">
        <b-form-input id="cd_rules_2_comment-input" v-model="formData.cd_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="cd_rules_2_impact" label="Impact" label-for="cd_rules_2_impact-select">
        <b-form-select id="cd_rules_2_impact-select" v-model="formData.cd_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="cd_rules_2_engie" label="Commentaire EHS" label-for="cd_rules_2_engie-select">
        <b-form-input id="cd_rules_2_engie-input" v-model="formData.cd_2_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("cd_rules", ["cd_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("cd_rules", ["edit_cd_rules"]),
      handleSubmit() {
        const payload = {
          company: this.cd_rules.company,
          data: {
            company: this.cd_rules.company,
            cd_1: this.formData.cd_1,
            cd_1_comment: this.formData.cd_1_comment,
            cd_1_impact: this.formData.cd_1_impact,
            cd_1_engie: this.formData.cd_1_engie,
            cd_2: this.formData.cd_2,
            cd_2_comment: this.formData.cd_2_comment,
            cd_2_impact: this.formData.cd_2_impact,
            cd_2_engie: this.formData.cd_2_engie,
            partnerId: this.cd_rules.partnerId,
          },
        };
        this.edit_cd_rules(payload);
        this.formData = this.cd_rules
      },
    },
    mounted() {
      this.formData = this.cd_rules
    }
  }
</script>
