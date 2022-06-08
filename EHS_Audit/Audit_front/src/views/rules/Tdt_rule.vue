<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Type de données traitées</h2>

    <form @submit.prevent="verifForm(tdt_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="tdt_1">Informations Commercialement Sensibles (ICS)</label>
        <select
          id="tdt_1" 
          :value="active_tdt_rules.tdt_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="tdt_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="tdt_1_comment" 
          :value="active_tdt_rules.tdt_1_comment"
          @input="updateLocalContact($event)" />

      <label for="tdt_2">Données à Caractère Personnel (DCP) (employés et/ou client EHS)</label>
        <select
          id="tdt_2" 
          :value="active_tdt_rules.tdt_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="tdt_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="tdt_2_comment" 
          :value="active_tdt_rules.tdt_2_comment"
          @input="updateLocalContact($event)" />

      <label for="tdt_3">Informations concernant des méthodes, outils de travail et/ou stratégies d'EHS</label>
        <select
          id="tdt_3" 
          :value="active_tdt_rules.tdt_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="tdt_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="tdt_3_comment" 
          :value="active_tdt_rules.tdt_3_comment"
          @input="updateLocalContact($event)" />

      <label for="tdt_4">Informations bancaire/financière</label>
        <select
          id="tdt_4" 
          :value="active_tdt_rules.tdt_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="tdt_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="tdt_4_comment" 
          :value="active_tdt_rules.tdt_4_comment"
          @input="updateLocalContact($event)" />

      <label for="tdt_5">Données B2C</label>
        <select
          id="tdt_5" 
          :value="active_tdt_rules.tdt_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="tdt_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="tdt_5_comment" 
          :value="active_tdt_rules.tdt_5_comment"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_tdt_rules(active_tdt_rules.company)" value="Reinitialiser" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      errors: [],
      tdt_rules: {},
      options: [
        { value: "Oui", text: "Oui" },
        { value: "Non", text: "Non" },
      ],
    };
  },
  computed: {
      ...mapGetters("tdt_rules", ["active_tdt_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_tdt_rules: {
        handler(){
          this.tdt_rules = this.active_tdt_rules
        },
      immediate: true
      }
    },
  methods: {
    ...mapActions("tdt_rules", ["get_tdt_rules"]),
    ...mapActions("tdt_rules", ["edit_tdt_rules"]),
    updateLocalContact(e) {
      this.$set(this.tdt_rules, e.target.id, e.target.value);
    },
    verifForm(tdt_rules) {
      this.errors = [];

      const { tdt_1, tdt_1_comment, 
        tdt_2, tdt_2_comment, 
        tdt_3, tdt_3_comment, 
        tdt_4, tdt_4_comment,
        tdt_5, tdt_5_comment } = this.tdt_rules
      
      if(!tdt_1 || !tdt_2 || !tdt_3 || !tdt_4 || !tdt_5) {
        this.errors.push("Vous devez repondre à toutes les questions !");
      }

      if(tdt_1_comment.length > 300 || tdt_2_comment.length > 300 || tdt_3_comment.length > 300 || tdt_4_comment.length > 300 || tdt_5_comment.length > 300) {
        this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
      }

      if (this.errors.length != 0)
      {
        
        return true;
      }
      else {
        this.edit_tdt_rules(tdt_rules);
        this.goToRules(this.partner.company)
      }
    },
    goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
  }
};
</script>