<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Analyse des risques RGPD</h2>

    <form @submit.prevent="verifForm(rgpd_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="rgpd_1">La nature de la prestation et des données justifient l’instruction d’un dossier DPIA</label>
        <select
          id="rgpd_1" 
          :value="active_rgpd_rules.rgpd_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rgpd_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="rgpd_1_comment" 
          :value="active_rgpd_rules.rgpd_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rgpd_1_impact">Impact</label>
        <select
          id="rgpd_1_impact" 
          :value="active_rgpd_rules.rgpd_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rgpd_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="rgpd_1_engie" 
          :value="active_rgpd_rules.rgpd_1_engie" 
          @input="updateLocalContact($event)"/>

      <label for="rgpd_2">La protection des données personnelles est prise en compte dès le début des projets (Privacy By Design) et avec le plus haut niveau de protection possible (Privacy By Default)</label>
        <select
          id="rgpd_2" 
          :value="active_rgpd_rules.rgpd_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rgpd_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="rgpd_2_comment" 
          :value="active_rgpd_rules.rgpd_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rgpd_2_impact">Impact</label>
        <select
          id="rgpd_2_impact" 
          :value="active_rgpd_rules.rgpd_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="rgpd_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="rgpd_2_engie" 
          :value="active_rgpd_rules.rgpd_2_engie"
          @input="updateLocalContact($event)" />
      
      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_rgpd_rules(active_rgpd_rules.company)" value="Reinitialiser" />
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
        rgpd_rules: {},
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
      ...mapGetters("rgpd_rules", ["active_rgpd_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_rgpd_rules: {
        handler(){
          this.rgpd_rules = this.active_rgpd_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("rgpd_rules", ["get_rgpd_rules"]),
      ...mapActions("rgpd_rules", ["edit_rgpd_rules"]),
      updateLocalContact(e) {
        this.$set(this.rgpd_rules, e.target.id, e.target.value);
      },
      verifForm(rgpd_rules) {

        rgpd_rules.rgpd_1_impact = parseInt(rgpd_rules.rgpd_1_impact)
        rgpd_rules.rgpd_2_impact = parseInt(rgpd_rules.rgpd_2_impact)

        this.errors = [];

        const { rgpd_1, rgpd_1_comment, rgpd_1_engie, 
          rgpd_2, rgpd_2_comment, rgpd_2_engie } = this.rgpd_rules
        
        if(!rgpd_1 || !rgpd_2) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(rgpd_1_comment.length > 300 || rgpd_2_comment.length > 300
          || rgpd_1_engie.length > 300 || rgpd_2_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_rgpd_rules(rgpd_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
