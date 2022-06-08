<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Accès aux données et flux réseaux</h2>

    <form @submit.prevent="verifForm(c_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="c_1">Le partenaire met à disposition d'EHS une architecture sécurisée</label>
        <select
          id="c_1" 
          :value="active_c_rules.c_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="c_1_comment" 
          :value="active_c_rules.c_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_1_impact">Impact</label>
        <select
          id="c_1_impact" 
          :value="active_c_rules.c_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="c_1_engie" 
          :value="active_c_rules.c_1_engie"
          @input="updateLocalContact($event)" />

      <label for="c_2">Le partenaire assure le chiffrement des données d'EHS en transmission</label>
        <select
          id="c_2" 
          :value="active_c_rules.c_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="c_2_comment"  
          :value="active_c_rules.c_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_2_impact">Impact</label>
        <select
          id="c_2_impact" 
          :value="active_c_rules.c_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="c_2_engie" 
          :value="active_c_rules.c_2_engie"
          @input="updateLocalContact($event)" />

      <label for="c_3">Présence d'une matrice de flux à jour</label>
        <select
          id="c_3" 
          :value="active_c_rules.c_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="c_3_comment" 
          :value="active_c_rules.c_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_3_impact">Impact</label>
        <select
          id="c_3_impact" 
          :value="active_c_rules.c_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="c_3_engie" 
          :value="active_c_rules.c_3_engie"
          @input="updateLocalContact($event)" />

      <label for="c_4">Le partenaire met en œuvre des composants de détection, de prévention et de monitoring sur tous les flux entrants</label>
        <select
          id="c_4" 
          :value="active_c_rules.c_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="c_4_comment" 
          :value="active_c_rules.c_4_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_4_impact">Impact</label>
        <select
          id="c_4_impact" 
          :value="active_c_rules.c_4_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_4_engie">Commentaire EHS</label>
        <input type="text" 
          id="c_4_engie" 
          :value="active_c_rules.c_4_engie"
          @input="updateLocalContact($event)" />

      <label for="c_5">Le partenaire met en œuvre des composants spécifiques de filtrage</label>
        <select
          id="c_5" 
          :value="active_c_rules.c_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="c_5_comment" 
          :value="active_c_rules.c_5_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_5_impact">Impact</label>
        <select
          id="c_5_impact" 
          :value="active_c_rules.c_5_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_5_engie">Commentaire EHS</label>
        <input type="text" 
          id="c_5_engie" 
          :value="active_c_rules.c_5_engie"
          @input="updateLocalContact($event)" />

      <label for="c_6">Le partenaire sécurise les accès distants par VPN et les flux Wi-Fi</label>
        <select
          id="c_6" 
          :value="active_c_rules.c_6"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_6_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="c_6_comment"  
          :value="active_c_rules.c_6_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_6_impact">Impact</label>
        <select
          id="c_6_impact" 
          :value="active_c_rules.c_6_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_6_engie">Commentaire EHS</label>
        <input type="text" 
          id="c_6_engie" 
          :value="active_c_rules.c_6_engie"
          @input="updateLocalContact($event)" />

      <label for="c_7">Le partenaire met en place un outil permettant la détection de fuite de données sensibles</label>
        <select
          id="c_7" 
          :value="active_c_rules.c_7"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_7_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="c_7_comment" 
          :value="active_c_rules.c_7_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_7_impact">Impact</label>
        <select
          id="c_7_impact" 
          :value="active_c_rules.c_7_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_7_engie">Commentaire EHS</label>
        <input type="text" 
          id="c_7_engie" 
          :value="active_c_rules.c_7_engie"
          @input="updateLocalContact($event)" />

      <label for="c_8">Une protection contre les attaques de type déni de service est en œuvre pour protéger le service fourni à EHS</label>
        <select
          id="c_8" 
          :value="active_c_rules.c_8"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_8_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="c_8_comment" 
          :value="active_c_rules.c_8_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_8_impact">Impact</label>
        <select
          id="c_8_impact" 
          :value="active_c_rules.c_8_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="c_8_engie">Commentaire EHS</label>
        <input type="text" 
          id="c_8_engie" 
          :value="active_c_rules.c_8_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_c_rules(active_c_rules.company)" value="Reinitialiser" />
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
        c_rules: {},
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
      ...mapGetters("c_rules", ["active_c_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_c_rules: {
        handler(){
          this.c_rules = this.active_c_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("c_rules", ["get_c_rules"]),
      ...mapActions("c_rules", ["edit_c_rules"]),
      updateLocalContact(e) {
        this.$set(this.c_rules, e.target.id, e.target.value);
      },
      verifForm(c_rules) {

        c_rules.c_1_impact = parseInt(c_rules.c_1_impact)
        c_rules.c_2_impact = parseInt(c_rules.c_2_impact)
        c_rules.c_3_impact = parseInt(c_rules.c_3_impact)
        c_rules.c_4_impact = parseInt(c_rules.c_4_impact)
        c_rules.c_5_impact = parseInt(c_rules.c_5_impact)
        c_rules.c_6_impact = parseInt(c_rules.c_6_impact)
        c_rules.c_7_impact = parseInt(c_rules.c_7_impact)
        c_rules.c_8_impact = parseInt(c_rules.c_8_impact)

        this.errors = [];

        const { c_1, c_1_comment, c_1_engie, 
          c_2, c_2_comment, c_2_engie, 
          c_3, c_3_comment, c_3_engie, 
          c_4, c_4_comment, c_4_engie,
          c_5, c_5_comment, c_5_engie,
          c_6, c_6_comment, c_6_engie,
          c_7, c_7_comment, c_7_engie,
          c_8, c_8_comment, c_8_engie } = this.c_rules
        
        if(!c_1 || !c_2 || !c_3 || !c_4 || !c_5 || !c_6 || !c_7 || !c_8) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(c_1_comment.length > 300 || c_2_comment.length > 300 || c_3_comment.length > 300 || c_4_comment.length > 300 || c_5_comment.length > 300 || c_6_comment.length > 300 || c_7_comment.length > 300 || c_8_comment.length > 300
          || c_1_engie.length > 300 || c_2_engie.length > 300 || c_3_engie.length > 300 || c_4_engie.length > 300 || c_5_engie.length > 300 || c_6_engie.length > 300 || c_7_engie.length > 300 || c_8_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          return true;
        }
        else {
          this.edit_c_rules(c_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
