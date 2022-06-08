<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Controle d'accès</h2>

    <form @submit.prevent="verifForm(ca_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="ca_1">Le partenaire effectue une revue régulière des accès et des habilitations de ses employés</label>
        <select
          id="ca_1" 
          :value="active_ca_rules.ca_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
 
      <label for="ca_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_1_comment" 
          :value="active_ca_rules.ca_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_1_impact">Impact</label>
        <select
          id="ca_1_impact" 
          :value="active_ca_rules.ca_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_1_engie" 
          :value="active_ca_rules.ca_1_engie"
          @input="updateLocalContact($event)"/>

      <label for="ca_2">La liste des employés du partenaire qui accèdent aux données d'EHS est maintenue et à jour</label>
        <select
          id="ca_2" 
          :value="active_ca_rules.ca_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_2_comment" 
          :value="active_ca_rules.ca_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_2_impact">Impact</label>
        <select
          id="ca_2_impact" 
          :value="active_ca_rules.ca_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_2_engie" 
          :value="active_ca_rules.ca_2_engie"
          @input="updateLocalContact($event)" />

      <label for="ca_3">Le partenaire applique les principes du moindre privilège et de la séparation des tâches pour ses employés</label>
        <select
          id="ca_3" 
          :value="active_ca_rules.ca_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_3_comment" 
          :value="active_ca_rules.ca_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_3_impact">Impact</label>
        <select
          id="ca_3_impact" 
          :value="active_ca_rules.ca_3_impact"
          @input="updateLocalContact($event)" >
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_3_engie" 
          :value="active_ca_rules.ca_3_engie"
          @input="updateLocalContact($event)" />

      <label for="ca_4">Les employés du partenaire possèdent un identifiant unique</label>
        <select
          id="ca_4" 
          :value="active_ca_rules.ca_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_4_comment" 
          :value="active_ca_rules.ca_4_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_4_impact">Impact</label>
        <select
          id="ca_4_impact" 
          :value="active_ca_rules.ca_4_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_4_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_4_engie" 
          :value="active_ca_rules.ca_4_engie"
          @input="updateLocalContact($event)" />

      <label for="ca_5">Le partenaire propose une authentification multi facteurs à minima pour les administrateurs</label>
        <select
          id="ca_5" 
          :value="active_ca_rules.ca_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_5_comment" 
          :value="active_ca_rules.ca_5_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_5_impact">Impact</label>
        <select
          id="ca_5_impact" 
          :value="active_ca_rules.ca_5_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_5_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_5_engie" 
          :value="active_ca_rules.ca_5_engie"
          @input="updateLocalContact($event)" />

      <label for="ca_6">Le partenaire précise les moyens de sécurité supplémentaires dédiées à la gestion de ses comptes administrateurs</label>
        <select
          id="ca_6" 
          :value="active_ca_rules.ca_6"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_6_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_6_comment" 
          :value="active_ca_rules.ca_6_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_6_impact">Impact</label>
        <select
          id="ca_6_impact" 
          :value="active_ca_rules.ca_6_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_6_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_6_engie" 
          :value="active_ca_rules.ca_6_engie"
          @input="updateLocalContact($event)" />

      <label for="ca_7">Le management standard des mots de passe chez le partenaire est bien défini</label>
        <select
          id="ca_7" 
          :value="active_ca_rules.ca_7"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_7_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_7_comment" 
          :value="active_ca_rules.ca_7_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_7_impact">Impact</label>
        <select
          id="ca_7_impact" 
          :value="active_ca_rules.ca_7_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_7_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_7_engie" 
          :value="active_ca_rules.ca_7_engie"
          @input="updateLocalContact($event)" />

      <label for="ca_8">Le partenaire journalise les logs de connexions réussies et échouées</label>
        <select
          id="ca_8" 
          :value="active_ca_rules.ca_8"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_8_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_8_comment" 
          :value="active_ca_rules.ca_8_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_8_impact">Impact</label>
        <select
          id="ca_8_impact" 
          :value="active_ca_rules.ca_8_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_8_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_8_engie" 
          :value="active_ca_rules.ca_8_engie"
          @input="updateLocalContact($event)" />

      <label for="ca_9">Le partenaire met en œuvre des moyens pour protéger la confidentialité des données d'authentification.</label>
        <select
          id="ca_9" 
          :value="active_ca_rules.ca_9"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_9_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_9_comment" 
          :value="active_ca_rules.ca_9_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_9_impact">Impact</label>
        <select
          id="ca_9_impact" 
          :value="active_ca_rules.ca_9_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_9_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_9_engie" 
          :value="active_ca_rules.ca_9_engie"
          @input="updateLocalContact($event)" />

      <label for="ca_10">L’ensemble des actions utilisateurs et administrateurs sur les données EHS sont tracées et rendues disponibles</label>
        <select
          id="ca_10" 
          :value="active_ca_rules.ca_10"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_10_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="ca_10_comment" 
          :value="active_ca_rules.ca_10_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_10_impact">Impact</label>
        <select
          id="ca_10_impact" 
          :value="active_ca_rules.ca_10_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="ca_10_engie">Commentaire EHS</label>
        <input type="text" 
          id="ca_10_engie" 
          :value="active_ca_rules.ca_10_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_ca_rules(active_ca_rules.company)" value="Reinitialiser" />
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
        ca_rules: {},
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
      ...mapGetters("ca_rules", ["active_ca_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_ca_rules: {
        handler(){
          this.ca_rules = this.active_ca_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("ca_rules", ["get_ca_rules"]),
      ...mapActions("ca_rules", ["edit_ca_rules"]),
      updateLocalContact(e) {
        this.$set(this.ca_rules, e.target.id, e.target.value);
      },
      verifForm(ca_rules) {

        ca_rules.ca_1_impact = parseInt(ca_rules.ca_1_impact)
        ca_rules.ca_2_impact = parseInt(ca_rules.ca_2_impact)
        ca_rules.ca_3_impact = parseInt(ca_rules.ca_3_impact)
        ca_rules.ca_4_impact = parseInt(ca_rules.ca_4_impact)
        ca_rules.ca_5_impact = parseInt(ca_rules.ca_5_impact)
        ca_rules.ca_6_impact = parseInt(ca_rules.ca_6_impact)
        ca_rules.ca_7_impact = parseInt(ca_rules.ca_7_impact)
        ca_rules.ca_8_impact = parseInt(ca_rules.ca_8_impact)
        ca_rules.ca_9_impact = parseInt(ca_rules.ca_9_impact)
        ca_rules.ca_10_impact = parseInt(ca_rules.ca_10_impact)

        this.errors = [];

        const { ca_1, ca_1_comment, ca_1_engie, 
          ca_2, ca_2_comment, ca_2_engie, 
          ca_3, ca_3_comment, ca_3_engie, 
          ca_4, ca_4_comment, ca_4_engie,
          ca_5, ca_5_comment, ca_5_engie,
          ca_6, ca_6_comment, ca_6_engie,
          ca_7, ca_7_comment, ca_7_engie,
          ca_8, ca_8_comment, ca_8_engie,
          ca_9, ca_9_comment, ca_9_engie,
          ca_10, ca_10_comment, ca_10_engie } = this.ca_rules
        
        if(!ca_1 || !ca_2 || !ca_3 || !ca_4 || !ca_5 || !ca_6 || !ca_7 || !ca_8 || !ca_9 || !ca_10) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(ca_1_comment.length > 300 || ca_2_comment.length > 300 || ca_3_comment.length > 300 || ca_4_comment.length > 300 || ca_5_comment.length > 300 || ca_6_comment.length > 300 || ca_7_comment.length > 300 || ca_8_comment.length > 300 || ca_9_comment.length > 300 || ca_10_comment.length > 300
          || ca_1_engie.length > 300 || ca_2_engie.length > 300 || ca_3_engie.length > 300 || ca_4_engie.length > 300 || ca_5_engie.length > 300 || ca_6_engie.length > 300 || ca_7_engie.length > 300 || ca_8_engie.length > 300 || ca_9_engie.length > 300 || ca_10_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_ca_rules(ca_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
