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

      <label for="ca_rules_1">
        <select
          id="ca_rules_1" 
          placeholder="Le partenaire doit effectuer une revue régulière (au moins une fois par an) des accès et des habilitations de ses employés" 
          v-model="formData.ca_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit effectuer une revue régulière (au moins une fois par an) des accès et des habilitations de ses employés</span>
      </label>
      <label for="ca_rules_1_comment">
        <input type="text" 
          id="ca_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_1_impact">
        <select
          id="ca_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.ca_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="ca_rules_1_engie">
        <input type="text" 
          id="ca_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_1_engie"/>
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_2">
        <select
          id="ca_rules_2" 
          placeholder="Liste des employés du partenaire qui accèdent aux données d'EHS maintenue et à jour" 
          v-model="formData.ca_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Liste des employés du partenaire qui accèdent aux données d'EHS maintenue et à jour</span>
      </label>
      <label for="ca_rules_2_comment">
        <input type="text" 
          id="ca_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_2_impact">
        <select
          id="ca_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.ca_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="ca_rules_2_engie">
        <input type="text" 
          id="ca_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_3">
        <select
          id="ca_rules_3" 
          placeholder="Le partenaire doit appliquer les principes du moindre privilège et de la séparation des tâches pour ses employés" 
          v-model="formData.ca_3">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit appliquer les principes du moindre privilège et de la séparation des tâches pour ses employés</span>
      </label>
      <label for="ca_rules_3_comment">
        <input type="text" 
          id="ca_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_3_impact">
        <select
          id="ca_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.ca_3_impact" >
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="ca_rules_3_engie">
        <input type="text" 
          id="ca_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_4">
        <select
          id="ca_rules_4" 
          placeholder="Les employés du partenaire possèdent un identifiant unique. Dans le cas échéant, les comptes génériques doivent être bien identifiés et référencés" 
          v-model="formData.ca_4">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les employés du partenaire possèdent un identifiant unique. Dans le cas échéant, les comptes génériques doivent être bien identifiés et référencés</span>
      </label>
      <label for="ca_rules_4_comment">
        <input type="text" 
          id="ca_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_4_impact">
        <select
          id="ca_rules_4_impact" 
          placeholder="Impact" 
          v-model="formData.ca_4_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="ca_rules_4_engie">
        <input type="text" 
          id="ca_rules_4_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_4_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_5">
        <select
          id="ca_rules_5" 
          placeholder="Le partenaire doit pouvoir proposer une authentification multi facteurs pour les administrateurs et pour les utilisateurs si applicable" 
          v-model="formData.ca_5">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit pouvoir proposer une authentification multi facteurs pour les administrateurs et pour les utilisateurs si applicable</span>
      </label>
      <label for="ca_rules_5_comment">
        <input type="text" 
          id="ca_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_5_impact">
        <select
          id="ca_rules_5_impact" 
          placeholder="Impact" 
          v-model="formData.ca_5_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="ca_rules_5_engie">
        <input type="text" 
          id="ca_rules_5_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_5_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_6">
        <select
          id="ca_rules_6" 
          placeholder="Le partenaire doit préciser les moyens de sécurité supplémentaires dédiées à la gestion de ses comptes administrateurs (la procédure d'habilitation, de révocation, la revue des comptes et des habilitations)" 
          v-model="formData.ca_6">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit préciser les moyens de sécurité supplémentaires dédiées à la gestion de ses comptes administrateurs (la procédure d'habilitation, de révocation, la revue des comptes et des habilitations)</span>
      </label>
      <label for="ca_rules_6_comment">
        <input type="text" 
          id="ca_rules_6_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_6_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_6_impact">
        <select
          id="ca_rules_6_impact" 
          placeholder="Impact" 
          v-model="formData.ca_6_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="ca_rules_6_engie">
        <input type="text" 
          id="ca_rules_6_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_6_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_7">
        <select
          id="ca_rules_7" 
          placeholder="Le management standard des mots de passe chez le partenaire est défini au minimum par :
- Longueur / complexité
- Une période de validité
- Le nombre de tentatives d'authentification avant blocage du compte" 
          v-model="formData.ca_7">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le management standard des mots de passe chez le partenaire est défini au minimum par :
- Longueur / complexité
- Une période de validité
- Le nombre de tentatives d'authentification avant blocage du compte</span>
      </label>
      <label for="ca_rules_7_comment">
        <input type="text" 
          id="ca_rules_7_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_7_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_7_impact">
        <select
          id="ca_rules_7_impact" 
          placeholder="Impact" 
          v-model="formData.ca_7_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="ca_rules_7_engie">
        <input type="text" 
          id="ca_rules_7_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_7_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_8">
        <select
          id="ca_rules_8" 
          placeholder="Le partenaire doit pouvoir journaliser les logs de connexions réussies et échouées" 
          v-model="formData.ca_8">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit pouvoir journaliser les logs de connexions réussies et échouées</span>
      </label>
      <label for="ca_rules_8_comment">
        <input type="text" 
          id="ca_rules_8_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_8_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_8_impact">
        <select
          id="ca_rules_8_impact" 
          placeholder="Impact" 
          v-model="formData.ca_8_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="ca_rules_8_engie">
        <input type="text" 
          id="ca_rules_8_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_8_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_9">
        <select
          id="ca_rules_9" 
          placeholder="Le partenaire doit mettre en œuvre des moyens pour protéger la confidentialité des données d'authentification.
En particulier, chiffrer les mots de passes en stockage et en transmission" 
          v-model="formData.ca_9">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit mettre en œuvre des moyens pour protéger la confidentialité des données d'authentification.
En particulier, chiffrer les mots de passes en stockage et en transmission</span>
      </label>
      <label for="ca_rules_9_comment">
        <input type="text" 
          id="ca_rules_9_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_9_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_9_impact">
        <select
          id="ca_rules_9_impact" 
          placeholder="Impact" 
          v-model="formData.ca_9_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="ca_rules_9_engie">
        <input type="text" 
          id="ca_rules_9_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_9_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="ca_rules_10">
        <select
          id="ca_rules_10" 
          placeholder="L’ensemble des actions utilisateurs et administrateurs sur les données EHS doivent être tracées et doivent être rendues disponibles, soit directement dans l’interface utilisateur de l’outil, soit dans l’interface administrateur, soit via une demande explicite de EHS. (Fourniture des traces demandées sous 2 jours ouvrés, en particulier dans le cadre du traitement d’incidents)" 
          v-model="formData.ca_10">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>L’ensemble des actions utilisateurs et administrateurs sur les données EHS doivent être tracées et doivent être rendues disponibles, soit directement dans l’interface utilisateur de l’outil, soit dans l’interface administrateur, soit via une demande explicite de EHS. (Fourniture des traces demandées sous 2 jours ouvrés, en particulier dans le cadre du traitement d’incidents)</span>
      </label>
      <label for="ca_rules_10_comment">
        <input type="text" 
          id="ca_rules_10_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.ca_10_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="ca_rules_10_impact">
        <select
          id="ca_rules_10_impact" 
          placeholder="Impact" 
          v-model="formData.ca_10_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="ca_rules_10_engie">
        <input type="text" 
          id="ca_rules_10_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.ca_10_engie" />
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
      ...mapState("ca_rules", ["ca_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("ca_rules", ["edit_ca_rules"]),
      verifForm() {
        this.errors = [];

        const { ca_1, ca_1_comment, ca_1_engie, 
          ca_2, ca_2_comment, ca_2_engie, 
          ca_3, ca_3_comment, ca_3_engie, 
          ca_4, ca_4_comment, ca_4_engie,
          ca_5, ca_5_comment, ca_5_engie,
          ca_6, ca_6_comment, ca_6_engie,
          ca_7, ca_7_comment, ca_7_engie,
          ca_8, ca_8_comment, ca_8_engie,
          ca_9, ca_9_comment, ca_9_engie,
          ca_10, ca_10_comment, ca_10_engie } = this.formData
        
        if(!ca_1 || !ca_2 || !ca_3 || !ca_4 || !ca_5 || !ca_6 || !ca_7 || !ca_8 || !ca_9 || !ca_10) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(ca_1_comment.length > 300 || ca_2_comment.length > 300 || ca_3_comment.length > 300 || ca_4_comment.length > 300 || ca_5_comment.length > 300 || ca_6_comment.length > 300 || ca_7_comment.length > 300 || ca_8_comment.length > 300 || ca_9_comment.length > 300 || ca_10_comment.length > 300
          || ca_1_engie.length > 300 || ca_2_engie.length > 300 || ca_3_engie.length > 300 || ca_4_engie.length > 300 || ca_5_engie.length > 300 || ca_6_engie.length > 300 || ca_7_engie.length > 300 || ca_8_engie.length > 300 || ca_9_engie.length > 300 || ca_10_engie.length > 300) {
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
          company: this.ca_rules.company,
          data: {
            company: this.ca_rules.company,
            ca_1: this.formData.ca_1,
            ca_1_comment: this.formData.ca_1_comment,
            ca_1_impact: this.formData.ca_1_impact,
            ca_1_engie: this.formData.ca_1_engie,
            ca_2: this.formData.ca_2,
            ca_2_comment: this.formData.ca_2_comment,
            ca_2_impact: this.formData.ca_2_impact,
            ca_2_engie: this.formData.ca_2_engie,
            ca_3: this.formData.ca_3,
            ca_3_comment: this.formData.ca_3_comment,
            ca_3_impact: this.formData.ca_3_impact,
            ca_3_engie: this.formData.ca_3_engie,
            ca_4: this.formData.ca_4,
            ca_4_comment: this.formData.ca_4_comment,
            ca_4_impact: this.formData.ca_4_impact,
            ca_4_engie: this.formData.ca_4_engie,
            ca_5: this.formData.ca_5,
            ca_5_comment: this.formData.ca_5_comment,
            ca_5_impact: this.formData.ca_5_impact,
            ca_5_engie: this.formData.ca_5_engie,
            ca_6: this.formData.ca_6,
            ca_6_comment: this.formData.ca_6_comment,
            ca_6_impact: this.formData.ca_6_impact,
            ca_6_engie: this.formData.ca_6_engie,
            ca_7: this.formData.ca_7,
            ca_7_comment: this.formData.ca_7_comment,
            ca_7_impact: this.formData.ca_7_impact,
            ca_7_engie: this.formData.ca_7_engie,
            ca_8: this.formData.ca_8,
            ca_8_comment: this.formData.ca_8_comment,
            ca_8_impact: this.formData.ca_8_impact,
            ca_8_engie: this.formData.ca_8_engie,
            ca_9: this.formData.ca_9,
            ca_9_comment: this.formData.ca_9_comment,
            ca_9_impact: this.formData.ca_9_impact,
            ca_9_engie: this.formData.ca_9_engie,
            ca_10: this.formData.ca_10,
            ca_10_comment: this.formData.ca_10_comment,
            ca_10_impact: this.formData.ca_10_impact,
            ca_10_engie: this.formData.ca_10_engie,
            partnerId: this.ca_rules.partnerId,
          },
        };
        this.edit_ca_rules(payload);
        this.formData = this.ca_rules
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.ca_rules
    }
  }
</script>
