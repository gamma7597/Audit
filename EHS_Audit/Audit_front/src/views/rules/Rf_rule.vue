<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="verifForm">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="rf_rules_1">
        <select
          id="rf_rules_1" 
          placeholder="Le partenaire doit déclarer l’existence de sous-traitants en lien avec la prestation et la nature des relations avec ces derniers sur le plan des responsabilités" 
          v-model="formData.rf_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit déclarer l’existence de sous-traitants en lien avec la prestation et la nature des relations avec ces derniers sur le plan des responsabilités</span>
      </label>
      <label for="rf_rules_1_comment">
        <input type="text" 
          id="rf_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.rf_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rf_rules_1_impact">
        <select
          id="rf_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.rf_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="rf_rules_1_engie">
        <input type="text" 
          id="rf_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.rf_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="rf_rules_2">
        <select
          id="rf_rules_2" 
          placeholder="Le partenaire doit maitriser la sécurité de ses sous-traitants" 
          v-model="formData.rf_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit maitriser la sécurité de ses sous-traitants</span>
      </label>
      <label for="rf_rules_2_comment">
        <input type="text" 
          id="rf_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.rf_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rf_rules_2_impact">
        <select
          id="rf_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.rf_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="rf_rules_2_engie">
        <input type="text" 
          id="rf_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.rf_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="rf_rules_3">
        <select
          id="rf_rules_3" 
          placeholder="Les fournisseurs signent une clause de confidentialité" 
          v-model="formData.rf_3">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les fournisseurs signent une clause de confidentialité</span>
      </label>
      <label for="rf_rules_3_comment">
        <input type="text" 
          id="rf_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.rf_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="rf_rules_3_impact">
        <select
          id="rf_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.rf_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="rf_rules_3_engie">
        <input type="text" 
          id="rf_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.rf_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <button class="button_blue" type="submit">Envoyer</button>
      <button class="button_blue" type="reset" >Reinitialiser</button>
    </form>

  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  export default {
    data() {
      return {
        errors: [],
        formData: {},
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
      ...mapState("rf_rules", ["rf_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("rf_rules", ["edit_rf_rules"]),
      verifForm() {
        this.errors = [];

        const { rf_1, rf_1_comment, rf_1_engie, 
          rf_2, rf_2_comment, rf_2_engie,
          rf_3, rf_3_comment, rf_3_engie } = this.formData
        
        if(!rf_1 || !rf_2 || !rf_3) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(rf_1_comment.length > 300 || rf_2_comment.length > 300 || rf_3_comment.length > 300
          || rf_1_engie.length > 300 || rf_2_engie.length > 300 || rf_3_engie.length > 300) {
          this.errors.push("Les commentaires doivent faire maximum 300 caractères !");
        }

        if (this.errors.length != 0)
        {
          console.log(this.errors.length)
          return true;
        }
        else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        const payload = {
          company: this.rf_rules.company,
          data: {
            company: this.rf_rules.company,
            rf_1: this.formData.rf_1,
            rf_1_comment: this.formData.rf_1_comment,
            rf_1_impact: this.formData.rf_1_impact,
            rf_1_engie: this.formData.rf_1_engie,
            rf_2: this.formData.rf_2,
            rf_2_comment: this.formData.rf_2_comment,
            rf_2_impact: this.formData.rf_2_impact,
            rf_2_engie: this.formData.rf_2_engie,
            rf_3: this.formData.rf_3,
            rf_3_comment: this.formData.rf_3_comment,
            rf_3_impact: this.formData.rf_3_impact,
            rf_3_engie: this.formData.rf_3_engie,
            partnerId: this.rf_rules.partnerId,
          },
        };
        this.edit_rf_rules(payload);
        this.formData = this.rf_rules
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.rf_rules
    }
  }
</script>
