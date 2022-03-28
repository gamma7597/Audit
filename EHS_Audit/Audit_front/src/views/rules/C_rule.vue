<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="c_rules_1" label="Le partenaire doit proposer une architecture sécurisée (Réseau, Endpoint, Serveur, etc.). 
Le partenaire doit envoyer à EHS le schéma d'architecture sécurité de la solution proposée" label-for="c_rules_1-select">
        <b-form-select id="c_rules_1-select" v-model="formData.c_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_1_comment" label="Commentaire du partenaire" label-for="c_rules_1_comment-select">
        <b-form-input id="c_rules_1_comment-input" v-model="formData.c_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_1_impact" label="Impact" label-for="c_rules_1_impact-select">
        <b-form-select id="c_rules_1_impact-select" v-model="formData.c_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_1_engie" label="Commentaire EHS" label-for="c_rules_1_engie-select">
        <b-form-input id="c_rules_1_engie-input" v-model="formData.c_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_2" label="Le partenaire doit assurer le chiffrement des données d'EHS en transmission " label-for="c_rules_2-select">
        <b-form-select id="c_rules_2-select" v-model="formData.c_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_2_comment" label="Commentaire du partenaire" label-for="c_rules_2_comment-select">
        <b-form-input id="c_rules_2_comment-input" v-model="formData.c_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_2_impact" label="Impact" label-for="c_rules_2_impact-select">
        <b-form-select id="c_rules_2_impact-select" v-model="formData.c_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="c_rules_2_engie" label="Commentaire EHS" label-for="c_rules_2_engie-select">
        <b-form-input id="c_rules_2_engie-input" v-model="formData.c_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_3" label="Présence d'une matrice de flux à jour : le partenaire doit envoyer à EHS la matrice de flux listant tous les flux utilisés pour la réalisation de la prestation." label-for="c_rules_3-select">
        <b-form-select id="c_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_3_comment" label="Commentaire du partenaire" label-for="c_rules_3_comment-select">
        <b-form-input id="c_rules_3_comment-input" v-model="formData.c_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_3_impact" label="Impact" label-for="c_rules_3_impact-select">
        <b-form-select id="c_rules_3_impact-select" v-model="formData.c_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_3_engie" label="Commentaire EHS" label-for="c_rules_3_engie-select">
        <b-form-input id="c_rules_3_engie-input" v-model="formData.c_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_4" label="Le partenaire doit mettre en œuvre des composants de détection, de prévention et de monitoring (IDS,IPS) sur tous les flux entrants  " label-for="c_rules_4-select">
        <b-form-select id="c_rules_4-select" v-model="formData.a_4" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_4_comment" label="Commentaire du partenaire" label-for="c_rules_4_comment-select">
        <b-form-input id="c_rules_4_comment-input" v-model="formData.c_4_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_4_impact" label="Impact" label-for="c_rules_4_impact-select">
        <b-form-select id="c_rules_4_impact-select" v-model="formData.c_4_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_4_engie" label="Commentaire EHS" label-for="c_rules_4_engie-select">
        <b-form-input id="c_rules_4_engie-input" v-model="formData.c_4_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_5" label="Le partenaire doit mettre en œuvre des composants spécifiques de filtrage" label-for="c_rules_5-select">
        <b-form-select id="c_rules_5-select" v-model="formData.a_5" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_5_comment" label="Commentaire du partenaire" label-for="c_rules_5_comment-select">
        <b-form-input id="c_rules_5_comment-input" v-model="formData.c_5_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_5_impact" label="Impact" label-for="c_rules_5_impact-select">
        <b-form-select id="c_rules_5_impact-select" v-model="formData.c_5_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_5_engie" label="Commentaire EHS" label-for="c_rules_5_engie-select">
        <b-form-input id="c_rules_5_engie-input" v-model="formData.c_5_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_6" label="Le partenaire doit sécuriser les accès distants par VPN et les flux Wi-Fi à minima par protocole WPA2 ou WPA2-PSK" label-for="c_rules_6-select">
        <b-form-select id="c_rules_6-select" v-model="formData.c_6" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_6_comment" label="Commentaire du partenaire" label-for="c_rules_6_comment-select">
        <b-form-input id="c_rules_6_comment-input" v-model="formData.c_6_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_6_impact" label="Impact" label-for="c_rules_6_impact-select">
        <b-form-select id="c_rules_6_impact-select" v-model="formData.a_6_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_6_engie" label="Commentaire EHS" label-for="c_rules_6_engie-select">
        <b-form-input id="c_rules_6_engie-input" v-model="formData.c_6_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_7" label="Le partenaire doit mettre en place un outil permettant la détection de fuite de données sensibles  " label-for="c_rules_7-select">
        <b-form-select id="c_rules_7-select" v-model="formData.c_7" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_7_comment" label="Commentaire du partenaire" label-for="c_rules_7_comment-select">
        <b-form-input id="c_rules_7_comment-input" v-model="formData.c_7_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_7_impact" label="Impact" label-for="c_rules_7_impact-select">
        <b-form-select id="c_rules_7_impact-select" v-model="formData.c_7_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_7_engie" label="Commentaire EHS" label-for="c_rules_7_engie-select">
        <b-form-input id="c_rules_7_engie-input" v-model="formData.c_7_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_8" label="Une protection contre les attaques de type déni de service doit être mise en œuvre pour protéger le service fourni à EHS" label-for="c_rules_8-select">
        <b-form-select id="c_rules_8-select" v-model="formData.c_8" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_8_comment" label="Commentaire du partenaire" label-for="c_rules_8_comment-select">
        <b-form-input id="c_rules_8_comment-input" v-model="formData.c_8_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="c_rules_8_impact" label="Impact" label-for="c_rules_8_impact-select">
        <b-form-select id="c_rules_8_impact-select" v-model="formData.c_8_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="c_rules_8_engie" label="Commentaire EHS" label-for="c_rules_8_engie-select">
        <b-form-input id="c_rules_8_engie-input" v-model="formData.c_8_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("c_rules", ["c_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("c_rules", ["edit_c_rules"]),
      handleSubmit() {
        const payload = {
          company: this.c_rules.company,
          data: {
            company: this.c_rules.company,
            c_1: this.formData.c_1,
            c_1_comment: this.formData.c_1_comment,
            c_1_impact: this.formData.c_1_impact,
            c_1_engie: this.formData.c_1_engie,
            c_2: this.formData.c_2,
            c_2_comment: this.formData.c_2_comment,
            c_2_impact: this.formData.c_2_impact,
            c_2_engie: this.formData.c_2_engie,
            c_3: this.formData.c_3,
            c_3_comment: this.formData.c_3_comment,
            c_3_impact: this.formData.c_3_impact,
            c_3_engie: this.formData.c_3_engie,
            c_4: this.formData.c_4,
            c_4_comment: this.formData.c_4_comment,
            c_4_impact: this.formData.c_4_impact,
            c_4_engie: this.formData.c_4_engie,
            c_5: this.formData.c_5,
            c_5_comment: this.formData.c_5_comment,
            c_5_impact: this.formData.c_5_impact,
            c_5_engie: this.formData.c_5_engie,
            c_6: this.formData.c_6,
            c_6_comment: this.formData.c_6_comment,
            c_6_impact: this.formData.c_6_impact,
            c_6_engie: this.formData.c_6_engie,
            c_7: this.formData.c_7,
            c_7_comment: this.formData.c_7_comment,
            c_7_impact: this.formData.c_7_impact,
            c_7_engie: this.formData.c_7_engie,
            c_8: this.formData.c_8,
            c_8_comment: this.formData.c_8_comment,
            c_8_impact: this.formData.c_8_impact,
            c_8_engie: this.formData.c_8_engie,
            partnerId: this.c_rules.partnerId,
          },
        };
        this.edit_c_rules(payload);
        this.formData = this.c_rules;
      },
    },
     mounted() {
      this.formData = this.c_rules
    }
  }
</script>
