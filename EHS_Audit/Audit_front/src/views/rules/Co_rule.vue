<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Connexion</h2>

    <form @submit.prevent="verifForm(co_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="co_1">Accès applicatif (ex : filtrage applicatif)</label>
        <select
          id="co_1" 
          :value="active_co_rules.co_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="co_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="co_1_comment" 
          :value="active_co_rules.co_1_comment"
          @input="updateLocalContact($event)" />

      <label for="co_2">Accès VPN (Global Protect) / Firewall</label>
        <select
          id="co_2" 
          :value="active_co_rules.co_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="co_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="co_2_comment" 
          :value="active_co_rules.co_2_comment"
          @input="updateLocalContact($event)" />

      <label for="co_3">Accès ZPA</label>
        <select
          id="co_3" 
          :value="active_co_rules.co_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="co_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="co_3_comment" 
          :value="active_co_rules.co_3_comment"
          @input="updateLocalContact($event)" />

      <label for="co_4">Accès lien réseau Wan dédié (MPLS)</label>
        <select
          id="co_4" 
          :value="active_co_rules.co_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="co_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="co_4_comment" 
          :value="active_co_rules.co_4_comment"
          @input="updateLocalContact($event)" />

      <label for="co_5">Accès depuis un réseau externe en SSO ENGIE avec OKTA</label>
        <select
          id="co_5" 
          :value="active_co_rules.co_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="co_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="co_5_comment" 
          :value="active_co_rules.co_5_comment"
          @input="updateLocalContact($event)" />

      <label for="co_6">Accès depuis un réseau externe en MFA avec OKTA</label>
        <select
          id="co_6" 
          :value="active_co_rules.co_6"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="co_6_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="co_6_comment" 
          :value="active_co_rules.co_6_comment"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_co_rules(active_co_rules.company)" value="Reinitialiser" />
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
      co_rules: {},
      options: [
        { value: "Oui", text: "Oui" },
        { value: "Non", text: "Non" },
      ],
    };
  },
  computed: {
      ...mapGetters("co_rules", ["active_co_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_co_rules: {
        handler(){
          this.co_rules = this.active_co_rules
        },
      immediate: true
      }
    },
  methods: {
    ...mapActions("co_rules", ["get_co_rules"]),
    ...mapActions("co_rules", ["edit_co_rules"]),
    updateLocalContact(e) {
        this.$set(this.co_rules, e.target.id, e.target.value);
      },
    verifForm(co_rules) {
      this.errors = [];

      const { co_1, co_1_comment, 
        co_2, co_2_comment, 
        co_3, co_3_comment, 
        co_4, co_4_comment,
        co_5, co_5_comment,
        co_6, co_6_comment } = this.co_rules
      
      if(!co_1 || !co_2 || !co_3 || !co_4 || !co_5 || !co_6) {
        this.errors.push("Vous devez repondre à toutes les questions !");
      }

      if(co_1_comment.length > 300 || co_2_comment.length > 300 || co_3_comment.length > 300 || co_4_comment.length > 300 || co_5_comment.length > 300 || co_6_comment.length > 300) {
        this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
      }

      if (this.errors.length != 0)
      {
        
        return true;
      }
      else {
        this.edit_co_rules(co_rules);
        this.goToRules(this.partner.company)
      }
    },
    goToRules(partner){
      this.$router.push("/rules/" + partner)
    }
  }
};
</script>