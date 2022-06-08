<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>
    
    <h2>Audit</h2>

    <form @submit.prevent="verifForm(pt_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="pt_1">EHS est en mesure de réaliser des audits organisationnels sur le périmètre du service fourni</label>
        <select
          id="pt_1" 
          :value="active_pt_rules.pt_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        
      <label for="pt_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="pt_1_comment" 
          :value="active_pt_rules.pt_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="pt_1_impact">Impact</label>
        <select
          id="pt_1_impact" 
          :value="active_pt_rules.pt_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="pt_1_engie" 
          :value="active_pt_rules.pt_1_engie"
          @input="updateLocalContact($event)" />

      <label for="pt_2">EHS est en mesure de réaliser des audits techniques sur le périmètre du service fourni</label>
        <select
          id="pt_2" 
          :value="active_pt_rules.pt_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="pt_2_comment" 
          :value="active_pt_rules.pt_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="pt_2_impact">Impact</label>
        <select
          id="pt_2_impact" 
          :value="active_pt_rules.pt_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="pt_2_engie" 
          :value="active_pt_rules.pt_2_engie"
          @input="updateLocalContact($event)" />

      <label for="pt_3">EHS est en mesure de réaliser des audits de sécurité physique sur le périmètre du service fourni</label>
        <select
          id="pt_3" 
          :value="active_pt_rules.pt_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="pt_3_comment" 
          :value="active_pt_rules.pt_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="pt_3_impact">Impact</label>
        <select
          id="pt_3_impact" 
          :value="active_pt_rules.pt_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="pt_3_engie" 
          :value="active_pt_rules.pt_3_engie"
          @input="updateLocalContact($event)" />

      <label for="pt_4">Le partenaire évalue régulièrement le niveau de sécurité de ses périmètres sensibles ou exposés.</label>
        <select
          id="pt_4" 
          :value="active_pt_rules.pt_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="pt_4_comment" 
          :value="active_pt_rules.pt_4_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="pt_4_impact">Impact</label>
        <select
          id="pt_4_impact" 
          :value="active_pt_rules.pt_4_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_4_engie">Commentaire EHS</label>
        <input type="text" 
          id="pt_4_engie" 
          :value="active_pt_rules.pt_4_engie"
          @input="updateLocalContact($event)" />

      <label for="pt_5">Le partenaire corrige les éventuelles vulnérabilités qui lui sont imputables selon un planning définie</label>
        <select
          id="pt_5" 
          :value="active_pt_rules.pt_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="pt_5_comment" 
          :value="active_pt_rules.pt_5_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="pt_5_impact">Impact</label>
        <select
          id="pt_5_impact" 
          :value="active_pt_rules.pt_5_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="pt_5_engie">Commentaire EHS</label>
        <input type="text" 
          id="pt_5_engie" 
          :value="active_pt_rules.pt_5_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_pt_rules(active_pt_rules.company)" value="Reinitialiser" />
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
        pt_rules: {},
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
      ...mapGetters("pt_rules", ["active_pt_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_pt_rules: {
        handler(){
          this.pt_rules = this.active_pt_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("pt_rules", ["get_pt_rules"]),
      ...mapActions("pt_rules", ["edit_pt_rules"]),
      updateLocalContact(e) {
        this.$set(this.pt_rules, e.target.id, e.target.value);
      },
      verifForm(pt_rules) {

        pt_rules.pt_1_impact = parseInt(pt_rules.pt_1_impact)
        pt_rules.pt_2_impact = parseInt(pt_rules.pt_2_impact)
        pt_rules.pt_3_impact = parseInt(pt_rules.pt_3_impact)
        pt_rules.pt_4_impact = parseInt(pt_rules.pt_4_impact)
        pt_rules.pt_5_impact = parseInt(pt_rules.pt_5_impact)

        this.errors = [];

        const { pt_1, pt_1_comment, pt_1_engie, 
          pt_2, pt_2_comment, pt_2_engie, 
          pt_3, pt_3_comment, pt_3_engie, 
          pt_4, pt_4_comment, pt_4_engie,
          pt_5, pt_5_comment, pt_5_engie } = this.pt_rules
        
        if(!pt_1 || !pt_2 || !pt_3 || !pt_4 || !pt_5) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(pt_1_comment.length > 300 || pt_2_comment.length > 300 || pt_3_comment.length > 300 || pt_4_comment.length > 300 || pt_5_comment.length > 300
          || pt_1_engie.length > 300 || pt_2_engie.length > 300 || pt_3_engie.length > 300 || pt_4_engie.length > 300 || pt_5_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_pt_rules(pt_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
