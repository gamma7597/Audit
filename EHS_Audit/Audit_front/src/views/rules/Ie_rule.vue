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

      <label for="ie_rules_1">
        <select
          id="ie_rules_1" 
          placeholder="Le partenaire maintient un inventaire des postes de travail, serveurs, shares, applicatifs et équipements de sécurité utilisés dans le cadre de la prestation" 
          v-model="formData.ie_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire maintient un inventaire des postes de travail, serveurs, shares, applicatifs et équipements de sécurité utilisés dans le cadre de la prestation</span>
      </label>
      <label for="ie_rules_1_comment">
        <input type="text" 
          id="ie_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ie_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="ie_rules_1_impact">
        <select
          id="ie_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.ie_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="ie_rules_1_engie">
        <input type="text" 
          id="ie_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ie_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ie_rules_2">
        <select
          id="ie_rules_2" 
          placeholder="Le partenaire maintient un inventaire des instances et/ou applicatifs cloud accédés.
Précisez le(s) hébergeur(s) concerné(s)." 
          v-model="formData.ie_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire maintient un inventaire des instances et/ou applicatifs cloud accédés.
Précisez le(s) hébergeur(s) concerné(s).</span>
      </label>
      <label for="ie_rules_2_comment">
        <input type="text" 
          id="ie_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ie_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="ie_rules_2_impact">
        <select
          id="ie_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.ie_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="ie_rules_2_engie">
        <input type="text" 
          id="ie_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ie_2_engie" />
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
      ...mapState("ie_rules", ["ie_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("ie_rules", ["edit_ie_rules"]),
      verifForm() {
        this.errors = [];

        const { ie_1, ie_1_comment, ie_1_engie, 
          ie_2, ie_2_comment, ie_2_engie} = this.formData
        
        if(!ie_1 || !ie_2) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(ie_1_comment.length > 300 || ie_2_comment.length > 300
          || ie_1_engie.length > 300 || ie_2_engie.length > 300) {
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
          company: this.ie_rules.company,
          data: {
            company: this.ie_rules.company,
            ie_1: this.formData.ie_1,
            ie_1_comment: this.formData.ie_1_comment,
            ie_1_impact: this.formData.ie_1_impact,
            ie_1_engie: this.formData.ie_1_engie,
            ie_2: this.formData.ie_2,
            ie_2_comment: this.formData.ie_2_comment,
            ie_2_impact: this.formData.ie_2_impact,
            ie_2_engie: this.formData.ie_2_engie,
            partnerId: this.ie_rules.partnerId,
          },
        };
        this.edit_ie_rules(payload);
        this.formData = this.ie_rules
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.ie_rules
    }
  }
</script>
