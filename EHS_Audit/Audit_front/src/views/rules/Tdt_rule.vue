<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="verifForm">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="tdt_rules_1">
        <select
          id="tdt_rules_1" 
          placeholder="Informations Commercialement Sensibles (ICS)" 
          v-model="formData.tdt_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Informations Commercialement Sensibles (ICS)</span>
      </label>

      <label for="tdt_rules_1_comment">
        <input type="text" 
          id="tdt_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.tdt_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="tdt_rules_2">
        <select
          id="tdt_rules_2" 
          placeholder="Données à Caractère Personnel (DCP) (employés et/ou client EHS)" 
          v-model="formData.tdt_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Données à Caractère Personnel (DCP) (employés et/ou client EHS)</span>
      </label>

      <label for="tdt_rules_2_comment">
        <input type="text" 
          id="tdt_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.tdt_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="tdt_rules_3">
        <select
          id="tdt_rules_3" 
          placeholder="Informations concernant des méthodes, outils de travail et/ou stratégies d'EHS" 
          v-model="formData.tdt_3">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Informations concernant des méthodes, outils de travail et/ou stratégies d'EHS</span>
      </label>

      <label for="tdt_rules_3_comment">
        <input type="text" 
          id="tdt_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.tdt_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="tdt_rules_4">
        <select
          id="tdt_rules_4" 
          placeholder="Informations bancaire/financière" 
          v-model="formData.tdt_4">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Informations bancaire/financière</span>
      </label>

      <label for="tdt_rules_4_comment">
        <input type="text" 
          id="tdt_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.tdt_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="tdt_rules_5">
        <select
          id="tdt_rules_5" 
          placeholder="Données B2C" 
          v-model="formData.tdt_5">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Données B2C</span>
      </label>

      <label for="tdt_rules_5_comment">
        <input type="text" 
          id="tdt_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.tdt_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <button class="button_blue" type="submit">Envoyer</button>
      <button class="button_blue" type="reset" >Reinitialiser</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      errors: [],
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
    verifForm() {
      this.errors = [];

      const { tdt_1, tdt_1_comment, 
        tdt_2, tdt_2_comment, 
        tdt_3, tdt_3_comment, 
        tdt_4, tdt_4_comment,
        tdt_5, tdt_5_comment } = this.formData
      
      if(!tdt_1 || !tdt_2 || !tdt_3 || !tdt_4 || !tdt_5) {
        this.errors.push("Vous devez repondre à toutes les questions !");
      }

      if(tdt_1_comment.length > 300 || tdt_2_comment.length > 300 || tdt_3_comment.length > 300 || tdt_4_comment.length > 300 || tdt_5_comment.length > 300) {
        this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
      }

      if (this.errors.length != 0)
      {
        console.log(this.errors.length)
        return true;
      }
      else {
        this.handleSubmit()
      }
    },
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
      this.goToRules(this.partner.company)
    },
    goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
  },
  mounted() {
    this.formData = this.tdt_rules;
  },
};
</script>