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

      <label for="rgpd_rules_1">
        <select
          id="rgpd_rules_1" 
          placeholder="La nature de la prestation (finalité du traitement) et des données justifient l’instruction d’un dossier DPIA" 
          v-model="formData.rgpd_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>La nature de la prestation (finalité du traitement) et des données justifient l’instruction d’un dossier DPIA</span>
      </label>
      <label for="rgpd_rules_1_comment">
        <input type="text" 
          id="rgpd_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.rgpd_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="rgpd_rules_1_impact">
        <select
          id="rgpd_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.rgpd_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="rgpd_rules_1_engie">
        <input type="text" 
          id="rgpd_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.rgpd_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="rgpd_rules_2">
        <select
          id="rgpd_rules_2" 
          placeholder="La protection des données personnelles est prise en compte dès le début des projets (Privacy By Design) et avec le plus haut niveau de protection possible (Privacy By Default)" 
          v-model="formData.rgpd_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>La protection des données personnelles est prise en compte dès le début des projets (Privacy By Design) et avec le plus haut niveau de protection possible (Privacy By Default)</span>
      </label>
      <label for="rgpd_rules_2_comment">
        <input type="text" 
          id="rgpd_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.rgpd_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="rgpd_rules_2_impact">
        <select
          id="rgpd_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.rgpd_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="rgpd_rules_2_engie">
        <input type="text" 
          id="rgpd_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.rgpd_2_engie" />
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
      ...mapState("rgpd_rules", ["rgpd_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("rgpd_rules", ["edit_rgpd_rules"]),
      verifForm() {
        this.errors = [];

        const { rgpd_1, rgpd_1_comment, rgpd_1_engie, 
          rgpd_2, rgpd_2_comment, rgpd_2_engie } = this.formData
        
        if(!rgpd_1 || !rgpd_2) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(rgpd_1_comment.length > 300 || rgpd_2_comment.length > 300
          || rgpd_1_engie.length > 300 || rgpd_2_engie.length > 300) {
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
          company: this.rgpd_rules.company,
          data: {
            company: this.rgpd_rules.company,
            rgpd_1: this.formData.rgpd_1,
            rgpd_1_comment: this.formData.rgpd_1_comment,
            rgpd_1_impact: this.formData.rgpd_1_impact,
            rgpd_1_engie: this.formData.rgpd_1_engie,
            rgpd_2: this.formData.rgpd_2,
            rgpd_2_comment: this.formData.rgpd_2_comment,
            rgpd_2_impact: this.formData.rgpd_2_impact,
            rgpd_2_engie: this.formData.rgpd_2_engie,
            partnerId: this.rgpd_rules.partnerId,
          },
        };
        this.edit_rgpd_rules(payload);
        this.formData = this.rgpd_rules
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.rgpd_rules
    }
  }
</script>
