<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Sécurité liée à l'exploitation</h2>

    <form @submit.prevent="verifForm(se_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="se_1">Le partenaire applique une procédure de durcissement des équipements et des OS</label>
        <select
          id="se_1" 
          :value="active_se_rules.se_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="se_1_comment" 
          :value="active_se_rules.se_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="se_1_impact">Impact</label>
        <select
          id="se_1_impact" 
          :value="active_se_rules.se_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="se_1_engie" 
          :value="active_se_rules.se_1_engie"
          @input="updateLocalContact($event)" />

      <label for="se_2">Le partenaire applique une politique antivirale sur tous les composants hébergeant le service fourni à EHS</label>
        <select
          id="se_2" 
          :value="active_se_rules.se_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="se_2_comment" 
          :value="active_se_rules.se_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="se_2_impact">Impact</label>
        <select
          id="se_2_impact" 
          :value="active_se_rules.se_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="se_2_engie" 
          :value="active_se_rules.se_2_engie"
          @input="updateLocalContact($event)" />

      <label for="se_3">Le partenaire applique une procédure de patch management lui permettant de déployer rapidement les correctifs recommandés</label>
        <select
          id="se_3" 
          :value="active_se_rules.se_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="se_3_comment" 
          :value="active_se_rules.se_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="se_3_impact">Impact</label>
        <select
          id="se_3_impact" 
          :value="active_se_rules.se_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="se_3_engie" 
          :value="active_se_rules.se_3_engie"
          @input="updateLocalContact($event)" />

      <label for="se_4">La prestation permet la journalisation et la centralisation des évènements ainsi que la protection de ces logs</label>
        <select
          id="se_4" 
          :value="active_se_rules.se_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="se_4_comment" 
          :value="active_se_rules.se_4_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="se_4_impact">Impact</label>
        <select
          id="se_4_impact" 
          :value="active_se_rules.se_4_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_4_engie">Commentaire EHS</label>
        <input type="text" 
          id="se_4_engie" 
          :value="active_se_rules.se_4_engie"
          @input="updateLocalContact($event)" />

      <label for="se_5">EHS est en mesure d'avoir accès aux journaux des logs ayant eu lieu sur son instance applicative</label>
        <select
          id="se_5" 
          :value="active_se_rules.se_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="se_5_comment" 
          :value="active_se_rules.se_5_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="se_5_impact">Impact</label>
        <select
          id="se_5_impact" 
          :value="active_se_rules.se_5_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_5_engie">Commentaire EHS</label>
        <input type="text" 
          id="se_5_engie" 
          :value="active_se_rules.se_5_engie"
          @input="updateLocalContact($event)" />

      <label for="se_6">Le partenaire met en place les moyens de sécurité appropriés pour assurer l'intégrité des données</label>
        <select
          id="se_6" 
          :value="active_se_rules.se_6"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_6_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="se_6_comment" 
          :value="active_se_rules.se_6_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="se_6_impact">Impact</label>
        <select
          id="se_6_impact" 
          :value="active_se_rules.se_6_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="se_6_engie">Commentaire EHS</label>
        <input type="text" 
          id="se_6_engie" 
          :value="active_se_rules.se_6_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_se_rules(active_se_rules.company)" value="Reinitialiser" />
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
        se_rules: {},
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
      ...mapGetters("se_rules", ["active_se_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_se_rules: {
        handler(){
          this.se_rules = this.active_se_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("se_rules", ["get_se_rules"]),
      ...mapActions("se_rules", ["edit_se_rules"]),
      updateLocalContact(e) {
        this.$set(this.se_rules, e.target.id, e.target.value);
      },
      verifForm(se_rules) {

        se_rules.se_1_impact = parseInt(se_rules.se_1_impact)
        se_rules.se_2_impact = parseInt(se_rules.se_2_impact)
        se_rules.se_3_impact = parseInt(se_rules.se_3_impact)
        se_rules.se_4_impact = parseInt(se_rules.se_4_impact)
        se_rules.se_5_impact = parseInt(se_rules.se_5_impact)
        se_rules.se_6_impact = parseInt(se_rules.se_6_impact)

        this.errors = [];

        const { se_1, se_1_comment, se_1_engie, 
          se_2, se_2_comment, se_2_engie, 
          se_3, se_3_comment, se_3_engie, 
          se_4, se_4_comment, se_4_engie,
          se_5, se_5_comment, se_5_engie,
          se_6, se_6_comment, se_6_engie } = this.se_rules
        
        if(!se_1 || !se_2 || !se_3 || !se_4 || !se_5 || !se_6) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(se_1_comment.length > 300 || se_2_comment.length > 300 || se_3_comment.length > 300 || se_4_comment.length > 300 || se_5_comment.length > 300 || se_6_comment.length > 300
          || se_1_engie.length > 300 || se_2_engie.length > 300 || se_3_engie.length > 300 || se_4_engie.length > 300 || se_5_engie.length > 300 || se_6_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_se_rules(se_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
