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

      <label for="cd_rules_1">
        <select
          id="cd_rules_1" 
          placeholder="L'inventaire des données EHS traitées par le partenaire est maintenu à jour" label-for="cd_rules_1-select" 
          v-model="formData.cd_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>L'inventaire des données EHS traitées par le partenaire est maintenu à jour" label-for="cd_rules_1-select</span>
      </label>
      <label for="cd_rules_1_comment">
        <input type="text" 
          id="cd_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.cd_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="cd_rules_1_impact">
        <select
          id="cd_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.cd_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="cd_rules_1_engie">
        <input type="text" 
          id="cd_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.cd_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="cd_rules_2">
        <select
          id="cd_rules_2" 
          placeholder="Le partenaire dispose d'une échelle de classification des données et l'applique sur les documents en rapport avec la prestation." 
          v-model="formData.cd_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire dispose d'une échelle de classification des données et l'applique sur les documents en rapport avec la prestation.</span>
      </label>
      <label for="cd_rules_2_comment">
        <input type="text" 
          id="cd_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.cd_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="cd_rules_2_impact">
        <select
          id="cd_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.cd_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="cd_rules_2_engie">
        <input type="text" 
          id="cd_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.cd_2_engie"/>
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
      ...mapState("cd_rules", ["cd_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("cd_rules", ["edit_cd_rules"]),
      verifForm() {
        this.errors = [];

        const { cd_1, cd_1_comment, cd_1_engie, 
          cd_2, cd_2_comment, cd_2_engie } = this.formData
        
        if(!cd_1 || !cd_2) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(cd_1_comment.length > 300 || cd_2_comment.length > 300
          || cd_1_engie.length > 300 || cd_2_engie.length > 300) {
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
          company: this.cd_rules.company,
          data: {
            company: this.cd_rules.company,
            cd_1: this.formData.cd_1,
            cd_1_comment: this.formData.cd_1_comment,
            cd_1_impact: this.formData.cd_1_impact,
            cd_1_engie: this.formData.cd_1_engie,
            cd_2: this.formData.cd_2,
            cd_2_comment: this.formData.cd_2_comment,
            cd_2_impact: this.formData.cd_2_impact,
            cd_2_engie: this.formData.cd_2_engie,
            partnerId: this.cd_rules.partnerId,
          },
        };
        this.edit_cd_rules(payload);
        this.formData = this.cd_rules
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.cd_rules
    }
  }
</script>
