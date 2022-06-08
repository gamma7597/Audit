<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Ressources humaines</h2>

    <form @submit.prevent="verifForm(rh_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="rh_1">Une procédure de sensibilisation et de formation à la sécurité existe, est appliquée et est à jour</label>
        <select
          id="rh_1" 
          :value="active_rh_rules.rh_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rh_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="rh_1_comment" 
          :value="active_rh_rules.rh_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rh_1_impact">Impact</label>
        <select
          id="rh_1_impact" 
          :value="active_rh_rules.rh_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rh_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="rh_1_engie" 
          :value="active_rh_rules.rh_1_engie" 
          @input="updateLocalContact($event)"/>

      <label for="rh_2">Les exigences en matière de non divulgation et de protection des informations sont identifiées et documentées [signature d'un NDA]</label>
        <select
          id="rh_2" 
          :value="active_rh_rules.rh_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rh_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="rh_2_comment" 
          :value="active_rh_rules.rh_2_comment" 
          @input="updateLocalContact($event)"/>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rh_2_impact">Impact</label>
        <select
          id="rh_2_impact" 
          :value="active_rh_rules.rh_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rh_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="rh_2_engie" 
          :value="active_rh_rules.rh_2_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_rh_rules(active_rh_rules.company)" value="Reinitialiser" />
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
        rh_rules: {},
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
      ...mapGetters('rh_rules', [ 'active_rh_rules' ]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_rh_rules: {
        handler(){
          this.rh_rules = this.active_rh_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("rh_rules", ["edit_rh_rules"]),
      ...mapActions("rh_rules", ["get_rh_rules"]),
      updateLocalContact(e) {
        this.$set(this.rh_rules, e.target.id, e.target.value);
      },
      verifForm(rh_rules) {

        rh_rules.rh_1_impact = parseInt(rh_rules.rh_1_impact)
        rh_rules.rh_2_impact = parseInt(rh_rules.rh_2_impact)

        this.errors = [];

        const { rh_1, rh_1_comment, rh_1_engie, 
          rh_2, rh_2_comment, rh_2_engie } = this.rh_rules
        
        if(!rh_1 || !rh_2) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(rh_1_comment.length > 300 || rh_2_comment.length > 300
          || rh_1_engie.length > 300 || rh_2_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_rh_rules(rh_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
  }
</script>
