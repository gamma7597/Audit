<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="adm_rules_1" label="Le code source de l'application doit faire l'objet de revues de sécurité (manuelle ou via un outil automatisé)" label-for="adm_rules_1-select">
        <b-form-select id="adm_rules_1-select" v-model="formData.adm_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_1_comment" label="Commentaire du partenaire" label-for="adm_rules_1_comment-select">
        <b-form-input id="adm_rules_1_comment-input" v-model="formData.adm_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_1_impact" label="Impact" label-for="adm_rules_1_impact-select">
        <b-form-select id="adm_rules_1_impact-select" v-model="formData.adm_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_1_engie" label="Commentaire EHS" label-for="adm_rules_1_engie-select">
        <b-form-input id="adm_rules_1_engie-input" v-model="formData.adm_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_2" label="Le partenaire doit utiliser des algorithmes et des protocoles de chiffrement non obsolètes. 
Préciser lesquelles" label-for="adm_rules_2-select">
        <b-form-select id="adm_rules_2-select" v-model="formData.adm_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_2_comment" label="Commentaire du partenaire" label-for="adm_rules_2_comment-select">
        <b-form-input id="adm_rules_2_comment-input" v-model="formData.adm_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_2_impact" label="Impact" label-for="adm_rules_2_impact-select">
        <b-form-select id="adm_rules_2_impact-select" v-model="formData.adm_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="adm_rules_2_engie" label="Commentaire EHS" label-for="adm_rules_2_engie-select">
        <b-form-input id="adm_rules_2_engie-input" v-model="formData.adm_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_3" label="Le partenaire doit protéger les clés de chiffrement (Ex: utilisation d'un coffre fort) " label-for="adm_rules_3-select">
        <b-form-select id="adm_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_3_comment" label="Commentaire du partenaire" label-for="adm_rules_3_comment-select">
        <b-form-input id="adm_rules_3_comment-input" v-model="formData.adm_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_3_impact" label="Impact" label-for="adm_rules_3_impact-select">
        <b-form-select id="adm_rules_3_impact-select" v-model="formData.adm_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_3_engie" label="Commentaire EHS" label-for="adm_rules_3_engie-select">
        <b-form-input id="adm_rules_3_engie-input" v-model="formData.adm_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_4" label="L'environnement de développement (données de test, code source) doit être sécurisé (contrôle des accès, traçabilité..) " label-for="adm_rules_4-select">
        <b-form-select id="adm_rules_4-select" v-model="formData.a_4" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_4_comment" label="Commentaire du partenaire" label-for="adm_rules_4_comment-select">
        <b-form-input id="adm_rules_4_comment-input" v-model="formData.adm_4_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_4_impact" label="Impact" label-for="adm_rules_4_impact-select">
        <b-form-select id="adm_rules_4_impact-select" v-model="formData.adm_4_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_4_engie" label="Commentaire EHS" label-for="adm_rules_4_engie-select">
        <b-form-input id="adm_rules_4_engie-input" v-model="formData.adm_4_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_5" label="Le partenaire doit sécuriser les API " label-for="adm_rules_5-select">
        <b-form-select id="adm_rules_5-select" v-model="formData.a_5" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_5_comment" label="Commentaire du partenaire" label-for="adm_rules_5_comment-select">
        <b-form-input id="adm_rules_5_comment-input" v-model="formData.adm_5_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_5_impact" label="Impact" label-for="adm_rules_5_impact-select">
        <b-form-select id="adm_rules_5_impact-select" v-model="formData.adm_5_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_5_engie" label="Commentaire EHS" label-for="adm_rules_5_engie-select">
        <b-form-input id="adm_rules_5_engie-input" v-model="formData.adm_5_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_6" label="Présence de règles de développement :
les développeurs doivent être sensibilisés aux bonnes pratiques de développement telles que la configuration des web application headers ou les principales menaces telles que décrites dans l'OWASP
https://owasp.org/www-project-top-ten/" label-for="adm_rules_6-select">
        <b-form-select id="adm_rules_6-select" v-model="formData.adm_6" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_6_comment" label="Commentaire du partenaire" label-for="adm_rules_6_comment-select">
        <b-form-input id="adm_rules_6_comment-input" v-model="formData.adm_6_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_6_impact" label="Impact" label-for="adm_rules_6_impact-select">
        <b-form-select id="adm_rules_6_impact-select" v-model="formData.a_6_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_6_engie" label="Commentaire EHS" label-for="adm_rules_6_engie-select">
        <b-form-input id="adm_rules_6_engie-input" v-model="formData.adm_6_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_7" label="Les données de production doivent être utilisées seulement sur des environnements de production " label-for="adm_rules_7-select">
        <b-form-select id="adm_rules_7-select" v-model="formData.adm_7" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_7_comment" label="Commentaire du partenaire" label-for="adm_rules_7_comment-select">
        <b-form-input id="adm_rules_7_comment-input" v-model="formData.adm_7_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="adm_rules_7_impact" label="Impact" label-for="adm_rules_7_impact-select">
        <b-form-select id="adm_rules_7_impact-select" v-model="formData.adm_7_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="adm_rules_7_engie" label="Commentaire EHS" label-for="adm_rules_7_engie-select">
        <b-form-input id="adm_rules_7_engie-input" v-model="formData.adm_7_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("adm_rules", ["adm_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("adm_rules", ["edit_adm_rules"]),
      handleSubmit() {
        const payload = {
          company: this.adm_rules.company,
          data: {
            company: this.adm_rules.company,
            adm_1: this.formData.adm_1,
            adm_1_comment: this.formData.adm_1_comment,
            adm_1_impact: this.formData.adm_1_impact,
            adm_1_engie: this.formData.adm_1_engie,
            adm_2: this.formData.adm_2,
            adm_2_comment: this.formData.adm_2_comment,
            adm_2_impact: this.formData.adm_2_impact,
            adm_2_engie: this.formData.adm_2_engie,
            adm_3: this.formData.adm_3,
            adm_3_comment: this.formData.adm_3_comment,
            adm_3_impact: this.formData.adm_3_impact,
            adm_3_engie: this.formData.adm_3_engie,
            adm_4: this.formData.adm_4,
            adm_4_comment: this.formData.adm_4_comment,
            adm_4_impact: this.formData.adm_4_impact,
            adm_4_engie: this.formData.adm_4_engie,
            adm_5: this.formData.adm_5,
            adm_5_comment: this.formData.adm_5_comment,
            adm_5_impact: this.formData.adm_5_impact,
            adm_5_engie: this.formData.adm_5_engie,
            adm_6: this.formData.adm_6,
            adm_6_comment: this.formData.adm_6_comment,
            adm_6_impact: this.formData.adm_6_impact,
            adm_6_engie: this.formData.adm_6_engie,
            adm_7: this.formData.adm_7,
            adm_7_comment: this.formData.adm_7_comment,
            adm_7_impact: this.formData.adm_7_impact,
            adm_7_engie: this.formData.adm_7_engie,
            partnerId: this.adm_rules.partnerId,
          },
        };
        this.edit_adm_rules(payload);
        this.formData = this.adm_rules;
      },
    },
    mounted() {
      this.formData = this.adm_rules
    }
  }
</script>
