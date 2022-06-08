<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Inventaire des équipements on-prem/cloud</h2>

    <form @submit.prevent="verifForm(ie_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="ie_1">Le partenaire maintient un inventaire des actifs utilisés dans le cadre de la prestation</label>
        <select
          id="ie_1" 
          :value="active_ie_rules.ie_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ie_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ie_1_comment" 
          :value="active_ie_rules.ie_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ie_1_impact">Impact</label>
        <select
          id="ie_1_impact" 
          :value="active_ie_rules.ie_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ie_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="ie_1_engie" 
          :value="active_ie_rules.ie_1_engie"
          @input="updateLocalContact($event)" />

      <label for="ie_2">Le partenaire maintient un inventaire des instances et/ou applicatifs cloud accédés</label>
        <select
          id="ie_2" 
          :value="active_ie_rules.ie_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ie_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ie_2_comment" 
          :value="active_ie_rules.ie_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ie_2_impact">Impact</label>
        <select
          id="ie_2_impact" 
          :value="active_ie_rules.ie_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ie_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="ie_2_engie" 
          :value="active_ie_rules.ie_2_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_ie_rules(active_ie_rules.company)" value="Reinitialiser" />
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
        ie_rules: {},
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
      ...mapGetters("ie_rules", ["active_ie_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_ie_rules: {
        handler(){
          this.ie_rules = this.active_ie_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("ie_rules", ["get_ie_rules"]),
      ...mapActions("ie_rules", ["edit_ie_rules"]),
      updateLocalContact(e) {
        this.$set(this.ie_rules, e.target.id, e.target.value);
      },
      verifForm(ie_rules) {

        ie_rules.ie_1_impact = parseInt(ie_rules.ie_1_impact)
        ie_rules.ie_2_impact = parseInt(ie_rules.ie_2_impact)

        this.errors = [];

        const { ie_1, ie_1_comment, ie_1_engie, 
          ie_2, ie_2_comment, ie_2_engie} = this.ie_rules
        
        if(!ie_1 || !ie_2) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(ie_1_comment.length > 300 || ie_2_comment.length > 300
          || ie_1_engie.length > 300 || ie_2_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_ie_rules(ie_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
