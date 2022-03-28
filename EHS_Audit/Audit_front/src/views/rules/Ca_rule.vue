<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="ca_rules_1" label="Le partenaire doit effectuer une revue régulière (au moins une fois par an) des accès et des habilitations de ses employés" label-for="ca_rules_1-select">
        <b-form-select id="ca_rules_1-select" v-model="formData.ca_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_1_comment" label="Commentaire du partenaire" label-for="ca_rules_1_comment-select">
        <b-form-input id="ca_rules_1_comment-input" v-model="formData.ca_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_1_impact" label="Impact" label-for="ca_rules_1_impact-select">
        <b-form-select id="ca_rules_1_impact-select" v-model="formData.ca_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_1_engie" label="Commentaire EHS" label-for="ca_rules_1_engie-select">
        <b-form-input id="ca_rules_1_engie-input" v-model="formData.ca_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_2" label="Liste des employés du partenaire qui accèdent aux données d'EHS maintenue et à jour" label-for="ca_rules_2-select">
        <b-form-select id="ca_rules_2-select" v-model="formData.ca_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_2_comment" label="Commentaire du partenaire" label-for="ca_rules_2_comment-select">
        <b-form-input id="ca_rules_2_comment-input" v-model="formData.ca_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_2_impact" label="Impact" label-for="ca_rules_2_impact-select">
        <b-form-select id="ca_rules_2_impact-select" v-model="formData.ca_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="ca_rules_2_engie" label="Commentaire EHS" label-for="ca_rules_2_engie-select">
        <b-form-input id="ca_rules_2_engie-input" v-model="formData.ca_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_3" label="Le partenaire doit appliquer les principes du moindre privilège et de la séparation des tâches pour ses employés" label-for="ca_rules_3-select">
        <b-form-select id="ca_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_3_comment" label="Commentaire du partenaire" label-for="ca_rules_3_comment-select">
        <b-form-input id="ca_rules_3_comment-input" v-model="formData.ca_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_3_impact" label="Impact" label-for="ca_rules_3_impact-select">
        <b-form-select id="ca_rules_3_impact-select" v-model="formData.ca_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_3_engie" label="Commentaire EHS" label-for="ca_rules_3_engie-select">
        <b-form-input id="ca_rules_3_engie-input" v-model="formData.ca_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_4" label="Les employés du partenaire possèdent un identifiant unique. Dans le cas échéant, les comptes génériques doivent être bien identifiés et référencés" label-for="ca_rules_4-select">
        <b-form-select id="ca_rules_4-select" v-model="formData.a_4" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_4_comment" label="Commentaire du partenaire" label-for="ca_rules_4_comment-select">
        <b-form-input id="ca_rules_4_comment-input" v-model="formData.ca_4_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_4_impact" label="Impact" label-for="ca_rules_4_impact-select">
        <b-form-select id="ca_rules_4_impact-select" v-model="formData.ca_4_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_4_engie" label="Commentaire EHS" label-for="ca_rules_4_engie-select">
        <b-form-input id="ca_rules_4_engie-input" v-model="formData.ca_4_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_5" label="Le partenaire doit pouvoir proposer une authentification multi facteurs pour les administrateurs et pour les utilisateurs si applicable" label-for="ca_rules_5-select">
        <b-form-select id="ca_rules_5-select" v-model="formData.a_5" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_5_comment" label="Commentaire du partenaire" label-for="ca_rules_5_comment-select">
        <b-form-input id="ca_rules_5_comment-input" v-model="formData.ca_5_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_5_impact" label="Impact" label-for="ca_rules_5_impact-select">
        <b-form-select id="ca_rules_5_impact-select" v-model="formData.ca_5_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_5_engie" label="Commentaire EHS" label-for="ca_rules_5_engie-select">
        <b-form-input id="ca_rules_5_engie-input" v-model="formData.ca_5_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_6" label="Le partenaire doit préciser les moyens de sécurité supplémentaires dédiées à la gestion de ses comptes administrateurs (la procédure d'habilitation, de révocation, la revue des comptes et des habilitations)" label-for="ca_rules_6-select">
        <b-form-select id="ca_rules_6-select" v-model="formData.ca_6" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_6_comment" label="Commentaire du partenaire" label-for="ca_rules_6_comment-select">
        <b-form-input id="ca_rules_6_comment-input" v-model="formData.ca_6_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_6_impact" label="Impact" label-for="ca_rules_6_impact-select">
        <b-form-select id="ca_rules_6_impact-select" v-model="formData.a_6_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_6_engie" label="Commentaire EHS" label-for="ca_rules_6_engie-select">
        <b-form-input id="ca_rules_6_engie-input" v-model="formData.ca_6_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_7" label="Le management standard des mots de passe chez le partenaire est défini au minimum par :
- Longueur / complexité
- Une période de validité
- Le nombre de tentatives d'authentification avant blocage du compte" label-for="ca_rules_7-select">
        <b-form-select id="ca_rules_7-select" v-model="formData.ca_7" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_7_comment" label="Commentaire du partenaire" label-for="ca_rules_7_comment-select">
        <b-form-input id="ca_rules_7_comment-input" v-model="formData.ca_7_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_7_impact" label="Impact" label-for="ca_rules_7_impact-select">
        <b-form-select id="ca_rules_7_impact-select" v-model="formData.ca_7_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_7_engie" label="Commentaire EHS" label-for="ca_rules_7_engie-select">
        <b-form-input id="ca_rules_7_engie-input" v-model="formData.ca_7_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_8" label="Le partenaire doit pouvoir journaliser les logs de connexions réussies et échouées " label-for="ca_rules_8-select">
        <b-form-select id="ca_rules_8-select" v-model="formData.ca_8" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_8_comment" label="Commentaire du partenaire" label-for="ca_rules_8_comment-select">
        <b-form-input id="ca_rules_8_comment-input" v-model="formData.ca_8_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_8_impact" label="Impact" label-for="ca_rules_8_impact-select">
        <b-form-select id="ca_rules_8_impact-select" v-model="formData.ca_8_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_8_engie" label="Commentaire EHS" label-for="ca_rules_8_engie-select">
        <b-form-input id="ca_rules_8_engie-input" v-model="formData.ca_8_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_9" label="Le partenaire doit mettre en œuvre des moyens pour protéger la confidentialité des données d'authentification.
En particulier, chiffrer les mots de passes en stockage et en transmission" label-for="ca_rules_9-select">
        <b-form-select id="ca_rules_9-select" v-model="formData.ca_9" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_9_comment" label="Commentaire du partenaire" label-for="ca_rules_9_comment-select">
        <b-form-input id="ca_rules_9_comment-input" v-model="formData.ca_9_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_9_impact" label="Impact" label-for="ca_rules_9_impact-select">
        <b-form-select id="ca_rules_9_impact-select" v-model="formData.ca_9_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_9_engie" label="Commentaire EHS" label-for="ca_rules_9_engie-select">
        <b-form-input id="ca_rules_9_engie-input" v-model="formData.ca_9_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_10" label="L’ensemble des actions utilisateurs et administrateurs sur les données EHS doivent être tracées et doivent être rendues disponibles, soit directement dans l’interface utilisateur de l’outil, soit dans l’interface administrateur, soit via une demande explicite de EHS. (Fourniture des traces demandées sous 2 jours ouvrés, en particulier dans le cadre du traitement d’incidents)" label-for="ca_rules_10-select">
        <b-form-select id="ca_rules_10-select" v-model="formData.ca_10" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_10_comment" label="Commentaire du partenaire" label-for="ca_rules_10_comment-select">
        <b-form-input id="ca_rules_10_comment-input" v-model="formData.ca_10_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="ca_rules_10_impact" label="Impact" label-for="ca_rules_10_impact-select">
        <b-form-select id="ca_rules_10_impact-select" v-model="formData.ca_10_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="ca_rules_10_engie" label="Commentaire EHS" label-for="ca_rules_10_engie-select">
        <b-form-input id="ca_rules_10_engie-input" v-model="formData.ca_10_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("ca_rules", ["ca_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("ca_rules", ["edit_ca_rules"]),
      handleSubmit() {
        const payload = {
          company: this.ca_rules.company,
          data: {
            company: this.ca_rules.company,
            ca_1: this.formData.ca_1,
            ca_1_comment: this.formData.ca_1_comment,
            ca_1_impact: this.formData.ca_1_impact,
            ca_1_engie: this.formData.ca_1_engie,
            ca_2: this.formData.ca_2,
            ca_2_comment: this.formData.ca_2_comment,
            ca_2_impact: this.formData.ca_2_impact,
            ca_2_engie: this.formData.ca_2_engie,
            ca_3: this.formData.ca_3,
            ca_3_comment: this.formData.ca_3_comment,
            ca_3_impact: this.formData.ca_3_impact,
            ca_3_engie: this.formData.ca_3_engie,
            ca_4: this.formData.ca_4,
            ca_4_comment: this.formData.ca_4_comment,
            ca_4_impact: this.formData.ca_4_impact,
            ca_4_engie: this.formData.ca_4_engie,
            ca_5: this.formData.ca_5,
            ca_5_comment: this.formData.ca_5_comment,
            ca_5_impact: this.formData.ca_5_impact,
            ca_5_engie: this.formData.ca_5_engie,
            ca_6: this.formData.ca_6,
            ca_6_comment: this.formData.ca_6_comment,
            ca_6_impact: this.formData.ca_6_impact,
            ca_6_engie: this.formData.ca_6_engie,
            ca_7: this.formData.ca_7,
            ca_7_comment: this.formData.ca_7_comment,
            ca_7_impact: this.formData.ca_7_impact,
            ca_7_engie: this.formData.ca_7_engie,
            ca_8: this.formData.ca_8,
            ca_8_comment: this.formData.ca_8_comment,
            ca_8_impact: this.formData.ca_8_impact,
            ca_8_engie: this.formData.ca_8_engie,
            ca_9: this.formData.ca_9,
            ca_9_comment: this.formData.ca_9_comment,
            ca_9_impact: this.formData.ca_9_impact,
            ca_9_engie: this.formData.ca_9_engie,
            ca_10: this.formData.ca_10,
            ca_10_comment: this.formData.ca_10_comment,
            ca_10_impact: this.formData.ca_10_impact,
            ca_10_engie: this.formData.ca_10_engie,
            partnerId: this.ca_rules.partnerId,
          },
        };
        this.edit_ca_rules(payload);
        this.formData = this.ca_rules
      },
    },
    mounted() {
      this.formData = this.ca_rules
    }
  }
</script>
