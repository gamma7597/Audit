<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="spe_rules_1" label="Le partenaire doit garantir le cloisonnement : 
- Des environnements (Préproduction, test, production, etc.) 
- Des réseaux 
- Des données EHS vis-à-vis des données des autres clients" label-for="spe_rules_1-select">
        <b-form-select id="spe_rules_1-select" v-model="formData.spe_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_1_comment" label="Commentaire du partenaire" label-for="spe_rules_1_comment-select">
        <b-form-input id="spe_rules_1_comment-input" v-model="formData.spe_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_1_impact" label="Impact" label-for="spe_rules_1_impact-select">
        <b-form-select id="spe_rules_1_impact-select" v-model="formData.spe_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_1_engie" label="Commentaire EHS" label-for="spe_rules_1_engie-select">
        <b-form-input id="spe_rules_1_engie-input" v-model="formData.spe_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_2" label="Les données EHS ne sont pas partagées avec d'autres tiers (sous-traitant ultérieur)
Dans le cas contraire, indiquez quelles données et quel(s) tier(s) sont concernés" label-for="spe_rules_2-select">
        <b-form-select id="spe_rules_2-select" v-model="formData.spe_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_2_comment" label="Commentaire du partenaire" label-for="spe_rules_2_comment-select">
        <b-form-input id="spe_rules_2_comment-input" v-model="formData.spe_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_2_impact" label="Impact" label-for="spe_rules_2_impact-select">
        <b-form-select id="spe_rules_2_impact-select" v-model="formData.spe_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="spe_rules_2_engie" label="Commentaire EHS" label-for="spe_rules_2_engie-select">
        <b-form-input id="spe_rules_2_engie-input" v-model="formData.spe_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_3" label="Le partenaire doit préciser la liste de tous les lieux de stockage des données de EHS (site d’hébergement principal, sites de secours, etc.) et s’engager à tenir informé EHS en cas de changement de localisation des données" label-for="spe_rules_3-select">
        <b-form-select id="spe_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_3_comment" label="Commentaire du partenaire" label-for="spe_rules_3_comment-select">
        <b-form-input id="spe_rules_3_comment-input" v-model="formData.spe_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_3_impact" label="Impact" label-for="spe_rules_3_impact-select">
        <b-form-select id="spe_rules_3_impact-select" v-model="formData.spe_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_3_engie" label="Commentaire EHS" label-for="spe_rules_3_engie-select">
        <b-form-input id="spe_rules_3_engie-input" v-model="formData.spe_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_4" label="Les visiteurs sont identifiés et escortés durant leur visite" label-for="spe_rules_4-select">
        <b-form-select id="spe_rules_4-select" v-model="formData.a_4" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_4_comment" label="Commentaire du partenaire" label-for="spe_rules_4_comment-select">
        <b-form-input id="spe_rules_4_comment-input" v-model="formData.spe_4_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_4_impact" label="Impact" label-for="spe_rules_4_impact-select">
        <b-form-select id="spe_rules_4_impact-select" v-model="formData.spe_4_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_4_engie" label="Commentaire EHS" label-for="spe_rules_4_engie-select">
        <b-form-input id="spe_rules_4_engie-input" v-model="formData.spe_4_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_5" label="Les lieux d’hébergement des actifs EHS doivent satisfaire les exigences de sécurité physique (contrôles des accès physiques, alarme anti-intrusion, dispositif anti-incendie, protection contre les dégâts des eaux, etc.)" label-for="spe_rules_5-select">
        <b-form-select id="spe_rules_5-select" v-model="formData.a_5" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_5_comment" label="Commentaire du partenaire" label-for="spe_rules_5_comment-select">
        <b-form-input id="spe_rules_5_comment-input" v-model="formData.spe_5_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="spe_rules_5_impact" label="Impact" label-for="spe_rules_5_impact-select">
        <b-form-select id="spe_rules_5_impact-select" v-model="formData.spe_5_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="spe_rules_5_engie" label="Commentaire EHS" label-for="spe_rules_5_engie-select">
        <b-form-input id="spe_rules_5_engie-input" v-model="formData.spe_5_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("spe_rules", ["spe_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("spe_rules", ["edit_spe_rules"]),
      handleSubmit() {
        const payload = {
          company: this.spe_rules.company,
          data: {
            company: this.spe_rules.company,
            spe_1: this.formData.spe_1,
            spe_1_comment: this.formData.spe_1_comment,
            spe_1_impact: this.formData.spe_1_impact,
            spe_1_engie: this.formData.spe_1_engie,
            spe_2: this.formData.spe_2,
            spe_2_comment: this.formData.spe_2_comment,
            spe_2_impact: this.formData.spe_2_impact,
            spe_2_engie: this.formData.spe_2_engie,
            spe_3: this.formData.spe_3,
            spe_3_comment: this.formData.spe_3_comment,
            spe_3_impact: this.formData.spe_3_impact,
            spe_3_engie: this.formData.spe_3_engie,
            spe_4: this.formData.spe_4,
            spe_4_comment: this.formData.spe_4_comment,
            spe_4_impact: this.formData.spe_4_impact,
            spe_4_engie: this.formData.spe_4_engie,
            spe_5: this.formData.spe_5,
            spe_5_comment: this.formData.spe_5_comment,
            spe_5_impact: this.formData.spe_5_impact,
            spe_5_engie: this.formData.spe_5_engie,
            partnerId: this.spe_rules.partnerId,
          },
        };
        this.edit_spe_rules(payload);
        this.formData = this.spe_rules
      },
    },
    mounted() {
      this.formData = this.spe_rules
    }
  }
</script>
