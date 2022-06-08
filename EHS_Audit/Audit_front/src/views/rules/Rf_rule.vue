<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Relation avec les fournisseurs</h2>

    <form @submit.prevent="verifForm(rf_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="rf_1">Le partenaire déclare l’existence de sous-traitants en lien avec la prestation et la nature des relations avec ces derniers sur le plan des responsabilités</label>
        <select
          id="rf_1" 
          :value="active_rf_rules.rf_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rf_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="rf_1_comment" 
          :value="active_rf_rules.rf_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rf_1_impact">Impact</label>
        <select
          id="rf_1_impact" 
          :value="active_rf_rules.rf_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rf_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="rf_1_engie" 
          :value="active_rf_rules.rf_1_engie"
          @input="updateLocalContact($event)" />

      <label for="rf_2">Le partenaire maitrise la sécurité de ses sous-traitants</label>
        <select
          id="rf_2" 
          :value="active_rf_rules.rf_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rf_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="rf_2_comment" 
          :value="active_rf_rules.rf_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rf_2_impact">Impact</label>
        <select
          id="rf_2_impact" 
          :value="active_rf_rules.rf_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rf_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="rf_2_engie" 
          :value="active_rf_rules.rf_2_engie"
          @input="updateLocalContact($event)" />

      <label for="rf_3">Les sous-traitants signent une clause de confidentialité</label>
        <select
          id="rf_3" 
          :value="active_rf_rules.rf_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rf_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="rf_3_comment" 
          :value="active_rf_rules.rf_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rf_3_impact">Impact</label>
        <select
          id="rf_3_impact" 
          :value="active_rf_rules.rf_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rf_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="rf_3_engie" 
          :value="active_rf_rules.rf_3_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_rf_rules(active_rf_rules.company)" value="Reinitialiser" />
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
        rf_rules: {},
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
      ...mapGetters("rf_rules", ["active_rf_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_rf_rules: {
        handler(){
          this.rf_rules = this.active_rf_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("rf_rules", ["get_rf_rules"]),
      ...mapActions("rf_rules", ["edit_rf_rules"]),
      updateLocalContact(e) {
        this.$set(this.rf_rules, e.target.id, e.target.value);
      },
      verifForm(rf_rules) {

        rf_rules.rf_1_impact = parseInt(rf_rules.rf_1_impact)
        rf_rules.rf_2_impact = parseInt(rf_rules.rf_2_impact)
        rf_rules.rf_3_impact = parseInt(rf_rules.rf_3_impact)

        this.errors = [];

        const { rf_1, rf_1_comment, rf_1_engie, 
          rf_2, rf_2_comment, rf_2_engie,
          rf_3, rf_3_comment, rf_3_engie } = this.rf_rules
        
        if(!rf_1 || !rf_2 || !rf_3) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(rf_1_comment.length > 300 || rf_2_comment.length > 300 || rf_3_comment.length > 300
          || rf_1_engie.length > 300 || rf_2_engie.length > 300 || rf_3_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_rf_rules(rf_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
