<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Actifs</h2>

    <form @submit.prevent="verifForm(a_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="a_1">Les données d'EHS stockées par le partenaire sont chiffrées</label>
        <select
          id="a_1" 
          :value="active_a_rules.a_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
      
      <label for="a_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="a_1_comment" 
          :value="active_a_rules.a_1_comment"
          @input="updateLocalContact($event)" />
      
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="a_1_impact">Impact</label>
        <select
          id="a_1_impact" 
          :value="active_a_rules.a_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
      
      <label for="a_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="a_1_engie" 
          :value="active_a_rules.a_1_engie"
          @input="updateLocalContact($event)" />

      <label for="a_2">Le partenaire assure la réversibilité en fin de contrat ou suite à l’activation de la clause de réversibilité</label>
        <select
          id="a_2" 
          :value="active_a_rules.a_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="a_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="a_2_comment" 
          :value="active_a_rules.a_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="a_2_impact">Impact</label>
        <select
          id="a_2_impact" 
          :value="active_a_rules.a_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="a_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="a_2_engie"  
          :value="active_a_rules.a_2_engie"
          @input="updateLocalContact($event)" />

      <label for="a_3">Il existe une procédure permettant de prouver la restitution ou la destruction des actifs</label>
        <select
          id="a_3" 
          :value="active_a_rules.a_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        
      <label for="a_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="a_3_comment" 
          :value="active_a_rules.a_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="a_3_impact">Impact</label>
        <select
          id="a_3_impact" 
          :value="active_a_rules.a_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="a_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="a_3_engie" 
          :value="active_a_rules.a_3_engie"
          @input="updateLocalContact($event)" />

      <label for="a_4">Le partenaire envoie a EHS une preuve de blanchissement des serveurs si le contrat le prévoit</label>
        <select
          id="a_4" 
          :value="active_a_rules.a_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="a_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="a_4_comment" 
          :value="active_a_rules.a_4_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="a_4_impact">Impact</label>
        <select
          id="a_4_impact" 
          :value="active_a_rules.a_4_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="a_4_engie">Commentaire EHS</label>
        <input type="text" 
          id="a_4_engie" 
          :value="active_a_rules.a_4_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_a_rules(active_a_rules.company)" value="Reinitialiser" />
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
        a_rules: {},
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
      ...mapGetters('a_rules', [ 'active_a_rules' ]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_a_rules: {
        handler(){
          this.a_rules = this.active_a_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("a_rules", ["get_a_rules"]),
      ...mapActions("a_rules", ["edit_a_rules"]),
      updateLocalContact(e) {
        this.$set(this.a_rules, e.target.id, e.target.value);
      },
      verifForm(a_rules) {

        a_rules.a_1_impact = parseInt(a_rules.a_1_impact)
        a_rules.a_2_impact = parseInt(a_rules.a_2_impact)
        a_rules.a_3_impact = parseInt(a_rules.a_3_impact)
        a_rules.a_4_impact = parseInt(a_rules.a_4_impact)

        this.errors = [];

        const { a_1, a_1_comment, a_1_engie, 
          a_2, a_2_comment, a_2_engie, 
          a_3, a_3_comment, a_3_engie, 
          a_4, a_4_comment, a_4_engie } = this.a_rules
        
        if(!a_1 || !a_2 || !a_3 || !a_4 ) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(a_1_comment.length > 300 || a_2_comment.length > 300 || a_3_comment.length > 300 || a_4_comment.length > 300
          || a_1_engie.length > 300 || a_2_engie.length > 300 || a_3_engie.length > 300 || a_4_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          return true;
        }
        else {
          this.edit_a_rules(a_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
