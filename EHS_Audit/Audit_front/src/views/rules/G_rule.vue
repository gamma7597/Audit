<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Gouvernance</h2>

    <form @submit.prevent="verifForm(g_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>
      
      <label for="g_1">Le partenaire dispose d'une politique de sécurité pour la gestion de son système d'information</label>
        <select
          id="g_1" 
          :value="active_g_rules.g_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="g_1_comment" 
          :value="active_g_rules.g_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="g_1_impact">Impact</label>
        <select
          id="g_1_impact" 
          :value="active_g_rules.g_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="g_1_engie" 
          :value="active_g_rules.g_1_engie"
          @input="updateLocalContact($event)" />

      <label for="g_2">Les contacts externes sont identifiés : Sécurité / IT / Juridique / Réglementaire</label>
        <select
          id="g_2" 
          :value="active_g_rules.g_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="g_2_comment" 
          :value="active_g_rules.g_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="g_2_impact">Impact</label>
        <select
          id="g_2_impact" 
          :value="active_g_rules.g_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="g_2_engie" 
          :value="active_g_rules.g_2_engie"
          @input="updateLocalContact($event)" />

      <label for="g_3">Des comités de sécurité sont organisés régulièrement entre EHS et le partenaire</label>
        <select
          id="g_3" 
          :value="active_g_rules.g_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="g_3_comment" 
          :value="active_g_rules.g_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="g_3_impact">Impact</label>
        <select
          id="g_3_impact" 
          :value="active_g_rules.g_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="g_3_engie" 
          :value="active_g_rules.g_3_engie"
          @input="updateLocalContact($event)" />


      <label for="g_4">Le partenaire met à disposition d'EHS tous les documents liées à la cybersécurité</label>
        <select
          id="g_4" 
          :value="active_g_rules.g_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="g_4_comment" 
          :value="active_g_rules.g_4_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="g_4_impact">Impact</label>
        <select
          id="g_4_impact" 
          :value="active_g_rules.g_4_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_4_engie">Commentaire EHS</label>
        <input type="text" 
          id="g_4_engie" 
          :value="active_g_rules.g_4_engie"
          @input="updateLocalContact($event)" />

      <label for="g_5">Le partenaire a formalisé un processus de gestion de crise et est en capacité de mettre en place une cellule de crise.</label>
        <select
          id="g_5" 
          :value="active_g_rules.g_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="g_5_comment" 
          :value="active_g_rules.g_5_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="g_5_impact">Impact</label>
        <select
          id="g_5_impact" 
          :value="active_g_rules.g_5_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="g_5_engie">Commentaire EHS</label>
        <input type="text" 
          id="g_5_engie" 
          :value="active_g_rules.g_5_engie"
          @input="updateLocalContact($event)" />
      
      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_g_rules(active_g_rules.company)" value="Reinitialiser" />
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
        g_rules: {},
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
      ...mapGetters("g_rules", ["active_g_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_g_rules: {
        handler(){
          this.g_rules = this.active_g_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("g_rules", ["get_g_rules"]),
      ...mapActions("g_rules", ["edit_g_rules"]),
      updateLocalContact(e) {
        this.$set(this.g_rules, e.target.id, e.target.value);
      },
      verifForm(g_rules) {

        g_rules.g_1_impact = parseInt(g_rules.g_1_impact)
        g_rules.g_2_impact = parseInt(g_rules.g_2_impact)
        g_rules.g_3_impact = parseInt(g_rules.g_3_impact)
        g_rules.g_4_impact = parseInt(g_rules.g_4_impact)
        g_rules.g_5_impact = parseInt(g_rules.g_5_impact)

        this.errors = [];

        const { g_1, g_1_comment, g_1_engie, 
          g_2, g_2_comment, g_2_engie, 
          g_3, g_3_comment, g_3_engie, 
          g_4, g_4_comment, g_4_engie,
          g_5, g_5_comment, g_5_engie } = this.g_rules
        
        if(!g_1 || !g_2 || !g_3 || !g_4 || !g_5) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(g_1_comment.length > 300 || g_2_comment.length > 300 || g_3_comment.length > 300 || g_4_comment.length > 300 || g_5_comment.length > 300
          || g_1_engie.length > 300 || g_2_engie.length > 300 || g_3_engie.length > 300 || g_4_engie.length > 300 || g_5_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_g_rules(g_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
