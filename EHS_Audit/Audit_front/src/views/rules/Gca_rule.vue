<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Gestion de la continuité d'activité</h2>

    <form @submit.prevent="verifForm(gca_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="gca_1">Présence d'un PCA [Plan de Continuité d'Activité] maintenu et testé</label>
        <select
          id="gca_1" 
          :value="active_gca_rules.gca_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gca_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="gca_1_comment" 
          :value="active_gca_rules.gca_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="gca_1_impact">Impact</label>
        <select
          id="gca_1_impact" 
          :value="active_gca_rules.gca_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gca_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="gca_1_engie" 
          :value="active_gca_rules.gca_1_engie"
          @input="updateLocalContact($event)"/>

      <label for="gca_2">Présence d'un PRA [Plan de Reprise d'Activité] maintenu et testé</label>
        <select
          id="gca_2" 
          :value="active_gca_rules.gca_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gca_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="gca_2_comment" 
          :value="active_gca_rules.gca_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="gca_2_impact">Impact</label>
        <select
          id="gca_2_impact" 
          :value="active_gca_rules.gca_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gca_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="gca_2_engie" 
          :value="active_gca_rules.gca_2_engie"
          @input="updateLocalContact($event)" />

      <label for="gca_3">Présence d'un PSR [Plan de Sauvegarde et Restitution] maintenu et testé</label>
        <select
          id="gca_3" 
          :value="active_gca_rules.gca_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gca_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="gca_3_comment" 
          :value="active_gca_rules.gca_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="gca_3_impact">Impact</label>
        <select
          id="gca_3_impact" 
          :value="active_gca_rules.gca_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="gca_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="gca_3_engie" 
          :value="active_gca_rules.gca_3_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_gca_rules(active_gca_rules.company)" value="Reinitialiser" />
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
        gca_rules: {},
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
      ...mapGetters("gca_rules", ["active_gca_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_gca_rules: {
        handler(){
          this.gca_rules = this.active_gca_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("gca_rules", ["get_gca_rules"]),
      ...mapActions("gca_rules", ["edit_gca_rules"]),
      updateLocalContact(e) {
        this.$set(this.gca_rules, e.target.id, e.target.value);
      },
      verifForm(gca_rules) {

        gca_rules.gca_1_impact = parseInt(gca_rules.gca_1_impact)
        gca_rules.gca_2_impact = parseInt(gca_rules.gca_2_impact)
        gca_rules.gca_3_impact = parseInt(gca_rules.gca_3_impact)

        this.errors = [];

        const { gca_1, gca_1_comment, gca_1_engie, 
          gca_2, gca_2_comment, gca_2_engie,
          gca_3, gca_3_comment, gca_3_engie } = this.gca_rules
        
        if(!gca_1 || !gca_2 || !gca_3) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(gca_1_comment.length > 300 || gca_2_comment.length > 300 || gca_3_comment.length > 300
          || gca_1_engie.length > 300 || gca_2_engie.length > 300 || gca_3_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_gca_rules(gca_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
