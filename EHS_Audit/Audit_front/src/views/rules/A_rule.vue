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

      <label for="a_rules_1">
        <select
          id="a_rules_1" 
          placeholder="Les données d'EHS stockées par le partenaire sont chiffrées" 
          v-model="formData.a_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les données d'EHS stockées par le partenaire sont chiffrées</span>
      </label>
      <label for="a_rules_1_comment">
        <input type="text" 
          id="a_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.a_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="a_rules_1_impact">
        <select
          id="a_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.a_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="a_rules_1_engie">
        <input type="text" 
          id="a_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.a_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="a_rules_2">
        <select
          id="a_rules_2" 
          placeholder="Le partenaire doit assurer la réversibilité en fin de contrat ou suite à l’activation de la clause de réversibilité" 
          v-model="formData.a_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit assurer la réversibilité en fin de contrat ou suite à l’activation de la clause de réversibilité</span>
      </label>
      <label for="a_rules_2_comment">
        <input type="text" 
          id="a_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.a_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="a_rules_2_impact">
        <select
          id="a_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.a_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="a_rules_2_engie">
        <input type="text" 
          id="a_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.a_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="a_rules_3">
        <select
          id="a_rules_3" 
          placeholder="Il existe une procédure permettant de prouver la restitution ou la destruction des actifs (données et support) sur les environnement du partenaire et ses sous-traitants" 
          v-model="formData.a_3">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Il existe une procédure permettant de prouver la restitution ou la destruction des actifs (données et support) sur les environnement du partenaire et ses sous-traitants</span>
      </label>
      <label for="a_rules_3_comment">
        <input type="text" 
          id="a_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.a_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="a_rules_3_impact">
        <select
          id="a_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.a_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="a_rules_3_engie">
        <input type="text" 
          id="a_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.a_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="a_rules_4">
        <select
          id="a_rules_4" 
          placeholder="Le partenaire doit envoyer a EHS une preuve de blanchissement des serveurs si le contrat le prévoit" 
          v-model="formData.a_4">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit envoyer a EHS une preuve de blanchissement des serveurs si le contrat le prévoit</span>
      </label>
      <label for="a_rules_4_comment">
        <input type="text" 
          id="a_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.a_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="a_rules_4_impact">
        <select
          id="a_rules_4_impact" 
          placeholder="Impact" 
          v-model="formData.a_4_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="a_rules_4_engie">
        <input type="text" 
          id="a_rules_4_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.a_4_engie" />
        <span>Commentaire EHS</span>
      </label>

      <button class="button_blue" type="submit">Envoyer</button>
      <button class="button_blue" type="reset">Reinitialiser</button>
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
      ...mapState("a_rules", ["a_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("a_rules", ["edit_a_rules"]),
      verifForm() {
        this.errors = [];

        const { a_1, a_1_comment, a_1_engie, 
          a_2, a_2_comment, a_2_engie, 
          a_3, a_3_comment, a_3_engie, 
          a_4, a_4_comment, a_4_engie } = this.formData
        
        if(!a_1 || !a_2 || !a_3 || !a_4 ) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(a_1_comment.length > 300 || a_2_comment.length > 300 || a_3_comment.length > 300 || a_4_comment.length > 300
          || a_1_engie.length > 300 || a_2_engie.length > 300 || a_3_engie.length > 300 || a_4_engie.length > 300) {
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
          company: this.a_rules.company,
          data: {
            company: this.a_rules.company,
            a_1: this.formData.a_1,
            a_1_comment: this.formData.a_1_comment,
            a_1_impact: this.formData.a_1_impact,
            a_1_engie: this.formData.a_1_engie,
            a_2: this.formData.a_2,
            a_2_comment: this.formData.a_2_comment,
            a_2_impact: this.formData.a_2_impact,
            a_2_engie: this.formData.a_2_engie,
            a_3: this.formData.a_3,
            a_3_comment: this.formData.a_3_comment,
            a_3_impact: this.formData.a_3_impact,
            a_3_engie: this.formData.a_3_engie,
            a_4: this.formData.a_4,
            a_4_comment: this.formData.a_4_comment,
            a_4_impact: this.formData.a_4_impact,
            a_4_engie: this.formData.a_4_engie,
            partnerId: this.a_rules.partnerId,
          },
        };
        this.edit_a_rules(payload);
        this.formData = this.a_rules;
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.a_rules
    }
  }
</script>
