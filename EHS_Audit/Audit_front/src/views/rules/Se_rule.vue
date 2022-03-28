<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="se_rules_1" label="Le partenaire doit appliquer une procédure de durcissement des équipements et des OS (Operating System) " label-for="se_rules_1-select">
        <b-form-select id="se_rules_1-select" v-model="formData.se_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_1_comment" label="Commentaire du partenaire" label-for="se_rules_1_comment-select">
        <b-form-input id="se_rules_1_comment-input" v-model="formData.se_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_1_impact" label="Impact" label-for="se_rules_1_impact-select">
        <b-form-select id="se_rules_1_impact-select" v-model="formData.se_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_1_engie" label="Commentaire EHS" label-for="se_rules_1_engie-select">
        <b-form-input id="se_rules_1_engie-input" v-model="formData.se_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_2" label="Le partenaire doit appliquer une politique antivirale sur tous les composants hébergeant le service fourni à EHS. 
Précisez les antivirus utilisés sur les postes et les serveurs, leurs versions et la fréquences de leur mise à jour " label-for="se_rules_2-select">
        <b-form-select id="se_rules_2-select" v-model="formData.se_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_2_comment" label="Commentaire du partenaire" label-for="se_rules_2_comment-select">
        <b-form-input id="se_rules_2_comment-input" v-model="formData.se_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_2_impact" label="Impact" label-for="se_rules_2_impact-select">
        <b-form-select id="se_rules_2_impact-select" v-model="formData.se_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="se_rules_2_engie" label="Commentaire EHS" label-for="se_rules_2_engie-select">
        <b-form-input id="se_rules_2_engie-input" v-model="formData.se_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_3" label="Le partenaire doit appliquer une procédure de patch management lui permettant de déployer rapidement les correctifs recommandés par les fournisseurs de solutions matérielles et logicielles" label-for="se_rules_3-select">
        <b-form-select id="se_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_3_comment" label="Commentaire du partenaire" label-for="se_rules_3_comment-select">
        <b-form-input id="se_rules_3_comment-input" v-model="formData.se_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_3_impact" label="Impact" label-for="se_rules_3_impact-select">
        <b-form-select id="se_rules_3_impact-select" v-model="formData.se_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_3_engie" label="Commentaire EHS" label-for="se_rules_3_engie-select">
        <b-form-input id="se_rules_3_engie-input" v-model="formData.se_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_4" label="La prestation doit permettre la journalisation et la centralisation des évènements (techniques et applicatifs) ainsi que la protection de ces logs" label-for="se_rules_4-select">
        <b-form-select id="se_rules_4-select" v-model="formData.a_4" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_4_comment" label="Commentaire du partenaire" label-for="se_rules_4_comment-select">
        <b-form-input id="se_rules_4_comment-input" v-model="formData.se_4_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_4_impact" label="Impact" label-for="se_rules_4_impact-select">
        <b-form-select id="se_rules_4_impact-select" v-model="formData.se_4_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_4_engie" label="Commentaire EHS" label-for="se_rules_4_engie-select">
        <b-form-input id="se_rules_4_engie-input" v-model="formData.se_4_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_5" label="EHS doit être en mesure d'avoir accès aux journaux des logs ayant eu lieu sur son instance applicative notamment dans le cas de traitement d’incidents" label-for="se_rules_5-select">
        <b-form-select id="se_rules_5-select" v-model="formData.a_5" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_5_comment" label="Commentaire du partenaire" label-for="se_rules_5_comment-select">
        <b-form-input id="se_rules_5_comment-input" v-model="formData.se_5_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_5_impact" label="Impact" label-for="se_rules_5_impact-select">
        <b-form-select id="se_rules_5_impact-select" v-model="formData.se_5_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_5_engie" label="Commentaire EHS" label-for="se_rules_5_engie-select">
        <b-form-input id="se_rules_5_engie-input" v-model="formData.se_5_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_6" label="La partenaire doit mettre en place les moyens de sécurité appropriés pour assurer l'intégrité des données" label-for="se_rules_6-select">
        <b-form-select id="se_rules_6-select" v-model="formData.se_6" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_6_comment" label="Commentaire du partenaire" label-for="se_rules_6_comment-select">
        <b-form-input id="se_rules_6_comment-input" v-model="formData.se_6_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="se_rules_6_impact" label="Impact" label-for="se_rules_6_impact-select">
        <b-form-select id="se_rules_6_impact-select" v-model="formData.a_6_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="se_rules_6_engie" label="Commentaire EHS" label-for="se_rules_6_engie-select">
        <b-form-input id="se_rules_6_engie-input" v-model="formData.se_6_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("se_rules", ["se_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("se_rules", ["edit_se_rules"]),
      handleSubmit() {
        const payload = {
          company: this.se_rules.company,
          data: {
            company: this.se_rules.company,
            se_1: this.formData.se_1,
            se_1_comment: this.formData.se_1_comment,
            se_1_impact: this.formData.se_1_impact,
            se_1_engie: this.formData.se_1_engie,
            se_2: this.formData.se_2,
            se_2_comment: this.formData.se_2_comment,
            se_2_impact: this.formData.se_2_impact,
            se_2_engie: this.formData.se_2_engie,
            se_3: this.formData.se_3,
            se_3_comment: this.formData.se_3_comment,
            se_3_impact: this.formData.se_3_impact,
            se_3_engie: this.formData.se_3_engie,
            se_4: this.formData.se_4,
            se_4_comment: this.formData.se_4_comment,
            se_4_impact: this.formData.se_4_impact,
            se_4_engie: this.formData.se_4_engie,
            se_5: this.formData.se_5,
            se_5_comment: this.formData.se_5_comment,
            se_5_impact: this.formData.se_5_impact,
            se_5_engie: this.formData.se_5_engie,
            se_6: this.formData.se_6,
            se_6_comment: this.formData.se_6_comment,
            se_6_impact: this.formData.se_6_impact,
            se_6_engie: this.formData.se_6_engie,
            partnerId: this.se_rules.partnerId,
          },
        };
        this.edit_se_rules(payload);
        this.formData = this.se_rules
      },
    },
    mounted() {
      this.formData = this.se_rules
    }
  }
</script>
