<template>
  <div>
    <b-button :to="'/rules/'+partner.company" variant="success">Retour</b-button>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="pt_rules_1" label="EHS doit être en mesure de réaliser des audits organisationnels sur le périmètre du service fourni à EHS " label-for="pt_rules_1-select">
        <b-form-select id="pt_rules_1-select" v-model="formData.pt_1" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_1_comment" label="Commentaire du partenaire" label-for="pt_rules_1_comment-select">
        <b-form-input id="pt_rules_1_comment-input" v-model="formData.pt_1_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_1_impact" label="Impact" label-for="pt_rules_1_impact-select">
        <b-form-select id="pt_rules_1_impact-select" v-model="formData.pt_1_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_1_engie" label="Commentaire EHS" label-for="pt_rules_1_engie-select">
        <b-form-input id="pt_rules_1_engie-input" v-model="formData.pt_1_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_2" label="EHS doit être en mesure de réaliser des audits techniques (test d'intrusion, scan de vulnérabilité, audit de code, audit d'infrastructure) 
sur le périmètre du service fourni à EHS " label-for="pt_rules_2-select">
        <b-form-select id="pt_rules_2-select" v-model="formData.pt_2" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_2_comment" label="Commentaire du partenaire" label-for="pt_rules_2_comment-select">
        <b-form-input id="pt_rules_2_comment-input" v-model="formData.pt_2_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_2_impact" label="Impact" label-for="pt_rules_2_impact-select">
        <b-form-select id="pt_rules_2_impact-select" v-model="formData.pt_2_impact" :options="options2" required></b-form-select>
      </b-form-group>d
      <b-form-group id="pt_rules_2_engie" label="Commentaire EHS" label-for="pt_rules_2_engie-select">
        <b-form-input id="pt_rules_2_engie-input" v-model="formData.pt_2_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_3" label="EHS doit être en mesure de réaliser des audits de la sécurité physique sur le périmètre du service fourni à EHS" label-for="pt_rules_3-select">
        <b-form-select id="pt_rules_3-select" v-model="formData.a_3" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_3_comment" label="Commentaire du partenaire" label-for="pt_rules_3_comment-select">
        <b-form-input id="pt_rules_3_comment-input" v-model="formData.pt_3_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_3_impact" label="Impact" label-for="pt_rules_3_impact-select">
        <b-form-select id="pt_rules_3_impact-select" v-model="formData.pt_3_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_3_engie" label="Commentaire EHS" label-for="pt_rules_3_engie-select">
        <b-form-input id="pt_rules_3_engie-input" v-model="formData.pt_3_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_4" label="Le partenaire doit régulièrement évaluer le niveau de sécurité de ses périmètres sensibles ou exposés par le biais de tests d'intrusion et de scan de vulnérabilités et corriger les vulnérabilités découvertes" label-for="pt_rules_4-select">
        <b-form-select id="pt_rules_4-select" v-model="formData.a_4" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_4_comment" label="Commentaire du partenaire" label-for="pt_rules_4_comment-select">
        <b-form-input id="pt_rules_4_comment-input" v-model="formData.pt_4_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_4_impact" label="Impact" label-for="pt_rules_4_impact-select">
        <b-form-select id="pt_rules_4_impact-select" v-model="formData.pt_4_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_4_engie" label="Commentaire EHS" label-for="pt_rules_4_engie-select">
        <b-form-input id="pt_rules_4_engie-input" v-model="formData.pt_4_engie" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_5" label="Le partenaire doit corriger les éventuelles vulnérabilités qui lui sont imputables (tierces parties incluses), selon un planning qui sera défini en collaboration avec EHS" label-for="pt_rules_5-select">
        <b-form-select id="pt_rules_5-select" v-model="formData.a_5" :options="options" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_5_comment" label="Commentaire du partenaire" label-for="pt_rules_5_comment-select">
        <b-form-input id="pt_rules_5_comment-input" v-model="formData.pt_5_comment" placeholder="Commentaire"></b-form-input>
      </b-form-group>
      <b-form-group id="pt_rules_5_impact" label="Impact" label-for="pt_rules_5_impact-select">
        <b-form-select id="pt_rules_5_impact-select" v-model="formData.pt_5_impact" :options="options2" required></b-form-select>
      </b-form-group>
      <b-form-group id="pt_rules_5_engie" label="Commentaire EHS" label-for="pt_rules_5_engie-select">
        <b-form-input id="pt_rules_5_engie-input" v-model="formData.pt_5_engie" placeholder="Commentaire"></b-form-input>
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
      ...mapState("pt_rules", ["pt_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("pt_rules", ["edit_pt_rules"]),
      handleSubmit() {
        const payload = {
          company: this.pt_rules.company,
          data: {
            company: this.pt_rules.company,
            pt_1: this.formData.pt_1,
            pt_1_comment: this.formData.pt_1_comment,
            pt_1_impact: this.formData.pt_1_impact,
            pt_1_engie: this.formData.pt_1_engie,
            pt_2: this.formData.pt_2,
            pt_2_comment: this.formData.pt_2_comment,
            pt_2_impact: this.formData.pt_2_impact,
            pt_2_engie: this.formData.pt_2_engie,
            pt_3: this.formData.pt_3,
            pt_3_comment: this.formData.pt_3_comment,
            pt_3_impact: this.formData.pt_3_impact,
            pt_3_engie: this.formData.pt_3_engie,
            pt_4: this.formData.pt_4,
            pt_4_comment: this.formData.pt_4_comment,
            pt_4_impact: this.formData.pt_4_impact,
            pt_4_engie: this.formData.pt_4_engie,
            pt_5: this.formData.pt_5,
            pt_5_comment: this.formData.pt_5_comment,
            pt_5_impact: this.formData.pt_5_impact,
            pt_5_engie: this.formData.pt_5_engie,
            partnerId: this.pt_rules.partnerId,
          },
        };
        this.edit_pt_rules(payload);
        this.formData = this.pt_rules
      },
    },
    mounted() {
      this.formData = this.pt_rules
    }
  }
</script>
