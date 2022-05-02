<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="handleSubmit">

      <label for="adm_rules_1">
        <select
          id="adm_rules_1" 
          placeholder="Le code source de l'application doit faire l'objet de revues de sécurité (manuelle ou via un outil automatisé)" 
          v-model="formData.adm_1" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le code source de l'application doit faire l'objet de revues de sécurité (manuelle ou via un outil automatisé)</span>
      </label>
      <label for="adm_rules_1_comment">
        <input type="text" 
          id="adm_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.adm_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="adm_rules_1_impact">
        <select
          id="adm_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.adm_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="adm_rules_1_engie">
        <input type="text" 
          id="adm_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.adm_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="adm_rules_2">
        <select
          id="adm_rules_2" 
          placeholder="Le partenaire doit utiliser des algorithmes et des protocoles de chiffrement non obsolètes. 
Préciser lesquelles" 
          v-model="formData.adm_2" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit utiliser des algorithmes et des protocoles de chiffrement non obsolètes. 
Préciser lesquelles</span>
      </label>
      <label for="adm_rules_2_comment">
        <input type="text" 
          id="adm_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.adm_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="adm_rules_2_impact">
        <select
          id="adm_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.adm_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="adm_rules_2_engie">
        <input type="text" 
          id="adm_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.adm_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="adm_rules_3">
        <select
          id="adm_rules_3" 
          placeholder="Le partenaire doit protéger les clés de chiffrement (Ex: utilisation d'un coffre fort)" 
          v-model="formData.adm_3" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit protéger les clés de chiffrement (Ex: utilisation d'un coffre fort)</span>
      </label>
      <label for="adm_rules_3_comment">
        <input type="text" 
          id="adm_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.adm_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="adm_rules_3_impact">
        <select
          id="adm_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.adm_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="adm_rules_3_engie">
        <input type="text" 
          id="adm_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.adm_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="adm_rules_4">
        <select
          id="adm_rules_4" 
          placeholder="L'environnement de développement (données de test, code source) doit être sécurisé (contrôle des accès, traçabilité..)" 
          v-model="formData.adm_4" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>L'environnement de développement (données de test, code source) doit être sécurisé (contrôle des accès, traçabilité..)</span>
      </label>
      <label for="adm_rules_4_comment">
        <input type="text" 
          id="adm_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.adm_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="adm_rules_4_impact">
        <select
          id="adm_rules_4_impact" 
          placeholder="Impact" 
          v-model="formData.adm_4_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="adm_rules_4_engie">
        <input type="text" 
          id="adm_rules_4_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.adm_4_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="adm_rules_5">
        <select
          id="adm_rules_5" 
          placeholder="Le partenaire doit sécuriser les API" 
          v-model="formData.adm_5" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit sécuriser les API</span>
      </label>
      <label for="adm_rules_5_comment">
        <input type="text" 
          id="adm_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.adm_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="adm_rules_5_impact">
        <select
          id="adm_rules_5_impact" 
          placeholder="Impact" 
          v-model="formData.adm_5_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="adm_rules_5_engie">
        <input type="text" 
          id="adm_rules_5_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.adm_5_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="adm_rules_6">
        <select
          id="adm_rules_6" 
          placeholder="Présence de règles de développement :
les développeurs doivent être sensibilisés aux bonnes pratiques de développement telles que la configuration des web application headers ou les principales menaces telles que décrites dans l'OWASP
https://owasp.org/www-project-top-ten/" 
          v-model="formData.adm_6" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Présence de règles de développement :
les développeurs doivent être sensibilisés aux bonnes pratiques de développement telles que la configuration des web application headers ou les principales menaces telles que décrites dans l'OWASP
https://owasp.org/www-project-top-ten/</span>
      </label>
      <label for="adm_rules_6_comment">
        <input type="text" 
          id="adm_rules_6_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.adm_6_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="adm_rules_6_impact">
        <select
          id="adm_rules_6_impact" 
          placeholder="Impact" 
          v-model="formData.adm_6_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="adm_rules_6_engie">
        <input type="text" 
          id="adm_rules_6_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.adm_6_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="adm_rules_7">
        <select
          id="adm_rules_7" 
          placeholder="Les données de production doivent être utilisées seulement sur des environnements de production" 
          v-model="formData.adm_7" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les données de production doivent être utilisées seulement sur des environnements de production</span>
      </label>
      <label for="adm_rules_7_comment">
        <input type="text" 
          id="adm_rules_7_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.adm_7_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="adm_rules_7_impact">
        <select
          id="adm_rules_7_impact" 
          placeholder="Impact" 
          v-model="formData.adm_7_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="adm_rules_7_engie">
        <input type="text" 
          id="adm_rules_7_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.adm_7_engie" />
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
      ...mapState("adm_rules", ["adm_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("adm_rules", ["edit_adm_rules"]),
      handleSubmit() {
        const payload = {
          company: this.adm_rules.company,
          data: {
            company: this.adm_rules.company,
            adm_1: this.formData.adm_1,
            adm_1_comment: this.formData.adm_1_comment,
            adm_1_impact: this.formData.adm_1_impact,
            adm_1_engie: this.formData.adm_1_engie,
            adm_2: this.formData.adm_2,
            adm_2_comment: this.formData.adm_2_comment,
            adm_2_impact: this.formData.adm_2_impact,
            adm_2_engie: this.formData.adm_2_engie,
            adm_3: this.formData.adm_3,
            adm_3_comment: this.formData.adm_3_comment,
            adm_3_impact: this.formData.adm_3_impact,
            adm_3_engie: this.formData.adm_3_engie,
            adm_4: this.formData.adm_4,
            adm_4_comment: this.formData.adm_4_comment,
            adm_4_impact: this.formData.adm_4_impact,
            adm_4_engie: this.formData.adm_4_engie,
            adm_5: this.formData.adm_5,
            adm_5_comment: this.formData.adm_5_comment,
            adm_5_impact: this.formData.adm_5_impact,
            adm_5_engie: this.formData.adm_5_engie,
            adm_6: this.formData.adm_6,
            adm_6_comment: this.formData.adm_6_comment,
            adm_6_impact: this.formData.adm_6_impact,
            adm_6_engie: this.formData.adm_6_engie,
            adm_7: this.formData.adm_7,
            adm_7_comment: this.formData.adm_7_comment,
            adm_7_impact: this.formData.adm_7_impact,
            adm_7_engie: this.formData.adm_7_engie,
            partnerId: this.adm_rules.partnerId,
          },
        };
        this.edit_adm_rules(payload);
        this.formData = this.adm_rules;
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.adm_rules
    }
  }
</script>
