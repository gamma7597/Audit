<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Gestion des incidents</h2>

    <form @submit.prevent="verifForm(gi_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="gi_1">Un processus de surveillance et d'alerte en cas d'incident de sécurité est présent</label>
        <select
          id="gi_1" 
          :value="active_gi_rules.gi_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gi_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="gi_1_comment" 
          :value="active_gi_rules.gi_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="gi_1_impact">Impact</label>
        <select
          id="gi_1_impact" 
          :value="active_gi_rules.gi_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gi_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="gi_1_engie" 
          :value="active_gi_rules.gi_1_engie"
          @input="updateLocalContact($event)" />

      <label for="gi_2">Un processus de résolution d'incident est présent</label>
        <select
          id="gi_2" 
          :value="active_gi_rules.gi_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gi_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="gi_2_comment" 
          :value="active_gi_rules.gi_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="gi_2_impact">Impact</label>
        <select
          id="gi_2_impact" 
          :value="active_gi_rules.gi_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gi_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="gi_2_engie" 
          :value="active_gi_rules.gi_2_engie"
          @input="updateLocalContact($event)" />

      <label for="gi_3">Un processus pour alerter EHS rapidement en cas d'incident impactant le service du partenaire est présent</label>
        <select
          id="gi_3" 
          :value="active_gi_rules.gi_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gi_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="gi_3_comment" 
          :value="active_gi_rules.gi_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="gi_3_impact">Impact</label>
        <select
          id="gi_3_impact" 
          :value="active_gi_rules.gi_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gi_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="gi_3_engie" 
          :value="active_gi_rules.gi_3_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_gi_rules(active_gi_rules.company)" value="Reinitialiser" />
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
        gi_rules: {},
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
      ...mapGetters("gi_rules", ["active_gi_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_gi_rules: {
        handler(){
          this.gi_rules = this.active_gi_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("gi_rules", ["get_gi_rules"]),
      ...mapActions("gi_rules", ["edit_gi_rules"]),
      updateLocalContact(e) {
        this.$set(this.gi_rules, e.target.id, e.target.value);
      },
      verifForm(gi_rules) {

        gi_rules.gi_1_impact = parseInt(gi_rules.gi_1_impact)
        gi_rules.gi_2_impact = parseInt(gi_rules.gi_2_impact)
        gi_rules.gi_3_impact = parseInt(gi_rules.gi_3_impact)

        this.errors = [];

        const { gi_1, gi_1_comment, gi_1_engie, 
          gi_2, gi_2_comment, gi_2_engie,
          gi_3, gi_3_comment, gi_3_engie } = this.gi_rules
        
        if(!gi_1 || !gi_2 || !gi_3) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(gi_1_comment.length > 300 || gi_2_comment.length > 300 || gi_3_comment.length > 300
          || gi_1_engie.length > 300 || gi_2_engie.length > 300 || gi_3_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_gi_rules(gi_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
