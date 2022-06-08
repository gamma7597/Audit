<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Classification des données</h2>

    <form @submit.prevent="verifForm(cd_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="cd_1">L'inventaire des données EHS traitées par le partenaire est maintenu à jour</label>
        <select
          id="cd_1" 
          :value="active_cd_rules.cd_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="cd_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="cd_1_comment" 
          :value="active_cd_rules.cd_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="cd_1_impact">Impact</label>
        <select
          id="cd_1_impact" 
          :value="active_cd_rules.cd_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="cd_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="cd_1_engie" 
          :value="active_cd_rules.cd_1_engie"
          @input="updateLocalContact($event)" />

      <label for="cd_2">Le partenaire dispose d'une échelle de classification des données et l'applique sur les documents en rapport avec la prestation.</label>
        <select
          id="cd_2" 
          :value="active_cd_rules.cd_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="cd_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="cd_2_comment" 
          :value="active_cd_rules.cd_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="cd_2_impact">Impact</label>
        <select
          id="cd_2_impact" 
          :value="active_cd_rules.cd_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="cd_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="cd_2_engie" 
          :value="active_cd_rules.cd_2_engie"
          @input="updateLocalContact($event)"/>
      
      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_cd_rules(active_cd_rules.company)" value="Reinitialiser" />
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
        cd_rules: {},
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
      ...mapGetters("cd_rules", ["active_cd_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_cd_rules: {
        handler(){
          this.cd_rules = this.active_cd_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("cd_rules", ["get_cd_rules"]),
      ...mapActions("cd_rules", ["edit_cd_rules"]),
      updateLocalContact(e) {
        this.$set(this.cd_rules, e.target.id, e.target.value);
      },
      verifForm(cd_rules) {

        cd_rules.cd_1_impact = parseInt(cd_rules.cd_1_impact)
        cd_rules.cd_2_impact = parseInt(cd_rules.cd_2_impact)

        this.errors = [];

        const { cd_1, cd_1_comment, cd_1_engie, 
          cd_2, cd_2_comment, cd_2_engie } = this.cd_rules
        
        if(!cd_1 || !cd_2) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(cd_1_comment.length > 300 || cd_2_comment.length > 300
          || cd_1_engie.length > 300 || cd_2_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_cd_rules(cd_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
