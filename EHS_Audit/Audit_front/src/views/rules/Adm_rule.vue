<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Acquisition, développement et maintenance des SI</h2>

    <form @submit.prevent="verifForm(adm_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="adm_1">Le code source de l'application fait l'objet de revues de sécurité</label>
        <select
          id="adm_1" 
          :value="active_adm_rules.adm_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="adm_1_comment" 
          :value="active_adm_rules.adm_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="adm_1_impact">Impact</label>
        <select
          id="adm_1_impact" 
          :value="active_adm_rules.adm_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="adm_1_engie" 
          :value="active_adm_rules.adm_1_engie"
          @input="updateLocalContact($event)" />

      <label for="adm_2">Le partenaire utilise des algorithmes et des protocoles de chiffrement non obsolètes</label>
        <select
          id="adm_2" 
          :value="active_adm_rules.adm_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="adm_2_comment" 
          :value="active_adm_rules.adm_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="adm_2_impact">Impact</label>
        <select
          id="adm_2_impact" 
          :value="active_adm_rules.adm_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="adm_2_engie" 
          :value="active_adm_rules.adm_2_engie"
          @input="updateLocalContact($event)" />

      <label for="adm_3">Le partenaire protège les clés de chiffrement</label>
        <select
          id="adm_3" 
          :value="active_adm_rules.adm_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="adm_3_comment" 
          :value="active_adm_rules.adm_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="adm_3_impact">Impact</label>
        <select
          id="adm_3_impact" 
          :value="active_adm_rules.adm_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="adm_3_engie" 
          :value="active_adm_rules.adm_3_engie"
          @input="updateLocalContact($event)" />

      <label for="adm_4">L'environnement de développement est sécurisé</label>
        <select
          id="adm_4" 
          :value="active_adm_rules.adm_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="adm_4_comment" 
          :value="active_adm_rules.adm_4_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="adm_4_impact">Impact</label>
        <select
          id="adm_4_impact" 
          :value="active_adm_rules.adm_4_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_4_engie">Commentaire EHS</label>
        <input type="text" 
          id="adm_4_engie" 
          :value="active_adm_rules.adm_4_engie"
          @input="updateLocalContact($event)" />

      <label for="adm_5">Le partenaire sécurise les API</label>
        <select
          id="adm_5" 
          :value="active_adm_rules.adm_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="adm_5_comment" 
          :value="active_adm_rules.adm_5_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="adm_5_impact">Impact</label>
        <select
          id="adm_5_impact" 
          :value="active_adm_rules.adm_5_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_5_engie">Commentaire EHS</label>
        <input type="text" 
          id="adm_5_engie" 
          :value="active_adm_rules.adm_5_engie"
          @input="updateLocalContact($event)" />

      <label for="adm_6">Les développeurs sont sensibilisés aux bonnes pratiques de développement</label>
        <select
          id="adm_6" 
          :value="active_adm_rules.adm_6"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_6_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="adm_6_comment" 
          :value="active_adm_rules.adm_6_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="adm_6_impact">Impact</label>
        <select
          id="adm_6_impact" 
          :value="active_adm_rules.adm_6_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_6_engie">Commentaire EHS</label>
        <input type="text" 
          id="adm_6_engie" 
          :value="active_adm_rules.adm_6_engie"
          @input="updateLocalContact($event)" />

      <label for="adm_7">Les données de production sont utilisées seulement sur des environnements de production</label>
        <select
          id="adm_7" 
          :value="active_adm_rules.adm_7"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_7_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="adm_7_comment"  
          :value="active_adm_rules.adm_7_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="adm_7_impact">Impact</label>
        <select
          id="adm_7_impact" 
          :value="active_adm_rules.adm_7_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="adm_7_engie">Commentaire EHS</label>
        <input type="text" 
          id="adm_7_engie" 
          :value="active_adm_rules.adm_7_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_adm_rules(active_adm_rules.company)" value="Reinitialiser" />
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
        adm_rules: {},
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
      ...mapGetters('adm_rules', [ 'active_adm_rules' ]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_adm_rules: {
        handler(){
          this.adm_rules = this.active_adm_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("adm_rules", ["get_adm_rules"]),
      ...mapActions("adm_rules", ["edit_adm_rules"]),
      updateLocalContact(e) {
        this.$set(this.adm_rules, e.target.id, e.target.value);
      },
      verifForm(adm_rules) {

        adm_rules.adm_1_impact = parseInt(adm_rules.adm_1_impact)
        adm_rules.adm_2_impact = parseInt(adm_rules.adm_2_impact)
        adm_rules.adm_3_impact = parseInt(adm_rules.adm_3_impact)
        adm_rules.adm_4_impact = parseInt(adm_rules.adm_4_impact)
        adm_rules.adm_5_impact = parseInt(adm_rules.adm_5_impact)
        adm_rules.adm_6_impact = parseInt(adm_rules.adm_6_impact)
        adm_rules.adm_7_impact = parseInt(adm_rules.adm_7_impact)

        this.errors = [];

        const { adm_1, adm_1_comment, adm_1_engie, 
          adm_2, adm_2_comment, adm_2_engie, 
          adm_3, adm_3_comment, adm_3_engie, 
          adm_4, adm_4_comment, adm_4_engie,
          adm_5, adm_5_comment, adm_5_engie,
          adm_6, adm_6_comment, adm_6_engie,
          adm_7, adm_7_comment, adm_7_engie } = this.adm_rules
        
        if(!adm_1 || !adm_2 || !adm_3 || !adm_4 || !adm_5 || !adm_6 || !adm_7) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(adm_1_comment.length > 300 || adm_2_comment.length > 300 || adm_3_comment.length > 300 || adm_4_comment.length > 300 || adm_5_comment.length > 300 || adm_6_comment.length > 300 || adm_7_comment.length > 300
          || adm_1_engie.length > 300 || adm_2_engie.length > 300 || adm_3_engie.length > 300 || adm_4_engie.length > 300 || adm_5_engie.length > 300 || adm_6_engie.length > 300 || adm_7_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          return true;
        }
        else {
          this.edit_adm_rules(adm_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
