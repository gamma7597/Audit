<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="g_rules_1" label="Le partenaire doit disposer d'une politique de sécurité pour la gestion de son système d'information" label-for="g_rules_1-select">
        <b-form-select id="g_rules_1-select" v-model="formData.g_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_1_comment" label="Commentaire du partenaire" label-for="g_rules_1_comment-select">
        <b-form-input id="g_rules_1_comment-input" v-model="formData.g_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_1_impact" label="Impact" label-for="g_rules_1_impact-select">
        <b-form-select id="g_rules_1_impact-select" v-model="formData.g_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_1_engie" label="Commentaire EHS" label-for="g_rules_1_engie-select">
        <b-form-input id="g_rules_1_engie-input" v-model="formData.g_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_2" label="Les contacts externes sont identifiés :
- Sécurité IT
- Juridique
- Réglementaire" label-for="g_rules_2-select">
        <b-form-select id="g_rules_2-select" v-model="formData.g_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_2_comment" label="Commentaire du partenaire" label-for="g_rules_2_comment-select">
        <b-form-input id="g_rules_2_comment-input" v-model="formData.g_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_2_impact" label="Impact" label-for="g_rules_2_impact-select">
        <b-form-select id="g_rules_2_impact-select" v-model="formData.g_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="g_rules_2_engie" label="Commentaire EHS" label-for="g_rules_2_engie-select">
        <b-form-input id="g_rules_2_engie-input" v-model="formData.g_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_3" label="Des comités de sécurité doivent être organisés régulièrement entre EHS et le partenaire au moins deux fois par an. Le comité doit aborder les sujets ci-dessous :
- Revue des indicateurs de Sécurité et des reportings 
- Revue des traitements des incidents et des évènements 
- Suivi de l’avancement du plan d’actions correctives
- Reporting des audits de sécurité et suivi des plans d’action" label-for="g_rules_3-select">
        <b-form-select id="g_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_3_comment" label="Commentaire du partenaire" label-for="g_rules_3_comment-select">
        <b-form-input id="g_rules_3_comment-input" v-model="formData.g_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_3_impact" label="Impact" label-for="g_rules_3_impact-select">
        <b-form-select id="g_rules_3_impact-select" v-model="formData.g_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_3_engie" label="Commentaire EHS" label-for="g_rules_3_engie-select">
        <b-form-input id="g_rules_3_engie-input" v-model="formData.g_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_4" label="Le partenaire doit mettre à disposition d'EHS tous les documents (certification, rapport d’audit, déclaration d’applicabilité, etc.) attestant de ses certifications en matière de sécurité (SAS 70, ISO 27001…) ainsi que de leurs périmètres" label-for="g_rules_4-select">
        <b-form-select id="g_rules_4-select" v-model="formData.g_4" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_4_comment" label="Commentaire du partenaire" label-for="g_rules_4_comment-select">
        <b-form-input id="g_rules_4_comment-input" v-model="formData.g_4_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_4_impact" label="Impact" label-for="g_rules_4_impact-select">
        <b-form-select id="g_rules_4_impact-select" v-model="formData.g_4_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_4_engie" label="Commentaire EHS" label-for="g_rules_4_engie-select">
        <b-form-input id="g_rules_4_engie-input" v-model="formData.g_4_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_5" label="Le partenaire doit formaliser un processus de gestion de crise (notamment préciser les canaux de communication mis en place avec EHS) et sa capacité à mettre en place une cellule de crise en cas de besoin" label-for="g_rules_5-select">
        <b-form-select id="g_rules_5-select" v-model="formData.a_5" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_5_comment" label="Commentaire du partenaire" label-for="g_rules_5_comment-select">
        <b-form-input id="g_rules_5_comment-input" v-model="formData.g_5_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="g_rules_5_impact" label="Impact" label-for="g_rules_5_impact-select">
        <b-form-select id="g_rules_5_impact-select" v-model="formData.g_5_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="g_rules_5_engie" label="Commentaire EHS" label-for="g_rules_5_engie-select">
        <b-form-input id="g_rules_5_engie-input" v-model="formData.g_5_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("g_rules", ["g_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("g_rules", ["edit_g_rules"]),
      handleSubmit() {
        const payload = {
          company: this.g_rules.company,
          data: {
            company: this.g_rules.company,
            g_1: this.formData.g_1,
            g_1_comment: this.formData.g_1_comment,
            g_1_impact: this.formData.g_1_impact,
            g_1_engie: this.formData.g_1_engie,
            g_2: this.formData.g_2,
            g_2_comment: this.formData.g_2_comment,
            g_2_impact: this.formData.g_2_impact,
            g_2_engie: this.formData.g_2_engie,
            g_3: this.formData.g_3,
            g_3_comment: this.formData.g_3_comment,
            g_3_impact: this.formData.g_3_impact,
            g_3_engie: this.formData.g_3_engie,
            g_4: this.formData.g_4,
            g_4_comment: this.formData.g_4_comment,
            g_4_impact: this.formData.g_4_impact,
            g_4_engie: this.formData.g_4_engie,
            g_5: this.formData.g_5,
            g_5_comment: this.formData.g_5_comment,
            g_5_impact: this.formData.g_5_impact,
            g_5_engie: this.formData.g_5_engie,
            partnerId: this.g_rules.partnerId,
          },
        };
        this.edit_g_rules(payload);
        this.formData = this.g_rules
      },
    },
    mounted() {
      this.formData = this.g_rules
    }
  }
</script>
