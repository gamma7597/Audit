<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <h2>Sécurité physique et environnementale</h2>

    <form @submit.prevent="verifForm(spe_rules)">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="spe_1">Le partenaire garentie le cloisonnement des environnements, des réseaux et des données.</label>
        <select
          id="spe_1" 
          :value="active_spe_rules.spe_1"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_1_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="spe_1_comment" 
          :value="active_spe_rules.spe_1_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_1_impact">Impact</label>
        <select
          id="spe_1_impact" 
          :value="active_spe_rules.spe_1_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_1_engie">Commentaire EHS</label>
        <input type="text" 
          id="spe_1_engie" 
          :value="active_spe_rules.spe_1_engie"
          @input="updateLocalContact($event)" />

      <label for="spe_2">Les données EHS ne sont pas partagées avec d'autres tiers</label>
        <select
          id="spe_2" 
          :value="active_spe_rules.spe_2"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_2_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="spe_2_comment" 
          :value="active_spe_rules.spe_2_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_2_impact">Impact</label>
        <select
          id="spe_2_impact" 
          :value="active_spe_rules.spe_2_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_2_engie">Commentaire EHS</label>
        <input type="text" 
          id="spe_2_engie" 
          :value="active_spe_rules.spe_2_engie"
          @input="updateLocalContact($event)" />

      <label for="spe_3">Le partenaire précise la liste de tous les lieux de stockage des données de EHS</label>
        <select
          id="spe_3" 
          :value="active_spe_rules.spe_3"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_3_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="spe_3_comment" 
          :value="active_spe_rules.spe_3_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_3_impact">Impact</label>
        <select
          id="spe_3_impact" 
          :value="active_spe_rules.spe_3_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_3_engie">Commentaire EHS</label>
        <input type="text" 
          id="spe_3_engie" 
          :value="active_spe_rules.spe_3_engie"
          @input="updateLocalContact($event)" />

      <label for="spe_4">Les visiteurs sont identifiés et escortés durant leur visite</label>
        <select
          id="spe_4" 
          :value="active_spe_rules.spe_4"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_4_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="spe_4_comment" 
          :value="active_spe_rules.spe_4_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_4_impact">Impact</label>
        <select
          id="spe_4_impact" 
          :value="active_spe_rules.spe_4_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_4_engie">Commentaire EHS</label>
        <input type="text" 
          id="spe_4_engie" 
          :value="active_spe_rules.spe_4_engie"
          @input="updateLocalContact($event)" />

      <label for="spe_5">Les lieux d’hébergement des actifs EHS doivent satisfaire les exigences de sécurité physique</label>
        <select
          id="spe_5" 
          :value="active_spe_rules.spe_5"
          @input="updateLocalContact($event)">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_5_comment">Commentaire du partenaire</label>
        <input type="text" 
          id="spe_5_comment" 
          :value="active_spe_rules.spe_5_comment"
          @input="updateLocalContact($event)" />

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_5_impact">Impact</label>
        <select
          id="spe_5_impact" 
          :value="active_spe_rules.spe_5_impact"
          @input="updateLocalContact($event)">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>

      <label for="spe_5_engie">Commentaire EHS</label>
        <input type="text" 
          id="spe_5_engie" 
          :value="active_spe_rules.spe_5_engie"
          @input="updateLocalContact($event)" />

      <div>
        <input class="button_form" type="submit" value="Modifier" />
        <input class="button_form" type="button" @click="get_spe_rules(active_spe_rules.company)" value="Reinitialiser" />
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
        spe_rules: {},
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
      ...mapGetters("spe_rules", ["active_spe_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    watch: {
      active_spe_rules: {
        handler(){
          this.spe_rules = this.active_spe_rules
        },
      immediate: true
      }
    },
    methods: {
      ...mapActions("spe_rules", ["get_spe_rules"]),
      ...mapActions("spe_rules", ["edit_spe_rules"]),
      updateLocalContact(e) {
        this.$set(this.spe_rules, e.target.id, e.target.value);
      },
      verifForm(spe_rules) {

        spe_rules.spe_1_impact = parseInt(spe_rules.spe_1_impact)
        spe_rules.spe_2_impact = parseInt(spe_rules.spe_2_impact)
        spe_rules.spe_3_impact = parseInt(spe_rules.spe_3_impact)
        spe_rules.spe_4_impact = parseInt(spe_rules.spe_4_impact)
        spe_rules.spe_5_impact = parseInt(spe_rules.spe_5_impact)

        this.errors = [];

        const { spe_1, spe_1_comment, spe_1_engie, 
          spe_2, spe_2_comment, spe_2_engie, 
          spe_3, spe_3_comment, spe_3_engie, 
          spe_4, spe_4_comment, spe_4_engie,
          spe_5, spe_5_comment, spe_5_engie } = this.spe_rules
        
        if(!spe_1 || !spe_2 || !spe_3 || !spe_4 || !spe_5) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(spe_1_comment.length > 300 || spe_2_comment.length > 300 || spe_3_comment.length > 300 || spe_4_comment.length > 300 || spe_5_comment.length > 300
          || spe_1_engie.length > 300 || spe_2_engie.length > 300 || spe_3_engie.length > 300 || spe_4_engie.length > 300 || spe_5_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          
          return true;
        }
        else {
          this.edit_spe_rules(spe_rules);
          this.goToRules(this.partner.company)
        }
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    }
  }
</script>
