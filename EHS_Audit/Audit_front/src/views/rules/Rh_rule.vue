<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <b-form @submit.prevent="verifForm">

      <p v-if="errors.length">
        <b>Veuillez corriger les erreurs :</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </p>

      <label for="rh_rules_1">
        <select
          id="rh_rules_1" 
          placeholder="Une procédure de sensibilisation et de formation à la sécurité existe, est appliquée et est à jour" 
          v-model="formData.rh_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Une procédure de sensibilisation et de formation à la sécurité existe, est appliquée et est à jour</span>
      </label>
      <label for="rh_rules_1_comment">
        <input type="text" 
          id="rh_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.rh_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="rh_rules_1_impact">
        <select
          id="rh_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.rh_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="rh_rules_1_engie">
        <input type="text" 
          id="rh_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.rh_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="rh_rules_2">
        <select
          id="rh_rules_2" 
          placeholder="Les exigences en matière de non divulgation reflétant les besoins en matière de protection des informations sont identifiées et documentées [signature d'un NDA]" 
          v-model="formData.rh_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les exigences en matière de non divulgation reflétant les besoins en matière de protection des informations sont identifiées et documentées [signature d'un NDA]</span>
      </label>
      <label for="rh_rules_2_comment">
        <input type="text" 
          id="rh_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.rh_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="rh_rules_2_impact">
        <select
          id="rh_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.rh_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="rh_rules_2_engie">
        <input type="text" 
          id="rh_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.rh_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <button class="button_blue" type="submit">Envoyer</button>
      <button class="button_blue" type="reset">Reinitialiser</button>
    </b-form>

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
      ...mapState("rh_rules", ["rh_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("rh_rules", ["edit_rh_rules"]),
      verifForm() {
        this.errors = [];

        const { rh_1, rh_1_comment, rh_1_engie, 
          rh_2, rh_2_comment, rh_2_engie } = this.formData
        
        if(!rh_1 || !rh_2) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(rh_1_comment.length > 300 || rh_2_comment.length > 300
          || rh_1_engie.length > 300 || rh_2_engie.length > 300) {
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
          company: this.rh_rules.company,
          data: {
            company: this.rh_rules.company,
            rh_1: this.formData.rh_1,
            rh_1_comment: this.formData.rh_1_comment,
            rh_1_impact: this.formData.rh_1_impact,
            rh_1_engie: this.formData.rh_1_engie,
            rh_2: this.formData.rh_2,
            rh_2_comment: this.formData.rh_2_comment,
            rh_2_impact: this.formData.rh_2_impact,
            rh_2_engie: this.formData.rh_2_engie,
            partnerId: this.rh_rules.partnerId,
          },
        };
        this.edit_rh_rules(payload);
        this.formData = this.rh_rules
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.rh_rules
    }
  }
</script>
