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
      
      <label for="g_rules_1">
        <select
          id="g_rules_1" 
          placeholder="Le partenaire doit disposer d'une politique de sécurité pour la gestion de son système d'information" 
          v-model="formData.g_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit disposer d'une politique de sécurité pour la gestion de son système d'information</span>
      </label>
      <label for="g_rules_1_comment">
        <input type="text" 
          id="g_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.g_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="g_rules_1_impact">
        <select
          id="g_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.g_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="g_rules_1_engie">
        <input type="text" 
          id="g_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.g_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="g_rules_2">
        <select
          id="g_rules_2" 
          placeholder="Les contacts externes sont identifiés : - Sécurité IT - Juridique - Réglementaire" 
          v-model="formData.g_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les contacts externes sont identifiés : - Sécurité IT - Juridique - Réglementaire</span>
      </label>
      <label for="g_rules_2_comment">
        <input type="text" 
          id="g_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.g_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="g_rules_2_impact">
        <select
          id="g_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.g_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="g_rules_2_engie">
        <input type="text" 
          id="g_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.g_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="g_rules_3">
        <select
          id="g_rules_3" 
          placeholder="Des comités de sécurité doivent être organisés régulièrement entre EHS et le partenaire au moins deux fois par an. Le comité doit aborder les sujets ci-dessous :
- Revue des indicateurs de Sécurité et des reportings 
- Revue des traitements des incidents et des évènements 
- Suivi de l’avancement du plan d’actions correctives
- Reporting des audits de sécurité et suivi des plans d’action" 
          v-model="formData.g_3">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Des comités de sécurité doivent être organisés régulièrement entre EHS et le partenaire au moins deux fois par an. Le comité doit aborder les sujets ci-dessous :
- Revue des indicateurs de Sécurité et des reportings 
- Revue des traitements des incidents et des évènements 
- Suivi de l’avancement du plan d’actions correctives
- Reporting des audits de sécurité et suivi des plans d’action</span>
      </label>
      <label for="g_rules_3_comment">
        <input type="text" 
          id="g_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.g_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="g_rules_3_impact">
        <select
          id="g_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.g_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="g_rules_3_engie">
        <input type="text" 
          id="g_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.g_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="g_rules_4">
        <select
          id="g_rules_4" 
          placeholder="Le partenaire doit mettre à disposition d'EHS tous les documents (certification, rapport d’audit, déclaration d’applicabilité, etc.) attestant de ses certifications en matière de sécurité (SAS 70, ISO 27001…) ainsi que de leurs périmètres" 
          v-model="formData.g_4">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit mettre à disposition d'EHS tous les documents (certification, rapport d’audit, déclaration d’applicabilité, etc.) attestant de ses certifications en matière de sécurité (SAS 70, ISO 27001…) ainsi que de leurs périmètres</span>
      </label>
      <label for="g_rules_4_comment">
        <input type="text" 
          id="g_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.g_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="g_rules_4_impact">
        <select
          id="g_rules_4_impact" 
          placeholder="Impact" 
          v-model="formData.g_4_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="g_rules_4_engie">
        <input type="text" 
          id="g_rules_4_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.g_4_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="g_rules_5">
        <select
          id="g_rules_5" 
          placeholder="Le partenaire doit formaliser un processus de gestion de crise (notamment préciser les canaux de communication mis en place avec EHS) et sa capacité à mettre en place une cellule de crise en cas de besoin" 
          v-model="formData.g_5">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit formaliser un processus de gestion de crise (notamment préciser les canaux de communication mis en place avec EHS) et sa capacité à mettre en place une cellule de crise en cas de besoin</span>
      </label>
      <label for="g_rules_5_comment">
        <input type="text" 
          id="g_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.g_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-EHS')" for="g_rules_5_impact">
        <select
          id="g_rules_5_impact" 
          placeholder="Impact" 
          v-model="formData.g_5_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="g_rules_5_engie">
        <input type="text" 
          id="g_rules_5_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.g_5_engie" />
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
      ...mapState("g_rules", ["g_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("g_rules", ["edit_g_rules"]),
      verifForm() {
        this.errors = [];

        const { g_1, g_1_comment, g_1_engie, 
          g_2, g_2_comment, g_2_engie, 
          g_3, g_3_comment, g_3_engie, 
          g_4, g_4_comment, g_4_engie,
          g_5, g_5_comment, g_5_engie } = this.formData
        
        if(!g_1 || !g_2 || !g_3 || !g_4 || !g_5) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(g_1_comment.length > 300 || g_2_comment.length > 300 || g_3_comment.length > 300 || g_4_comment.length > 300 || g_5_comment.length > 300
          || g_1_engie.length > 300 || g_2_engie.length > 300 || g_3_engie.length > 300 || g_4_engie.length > 300 || g_5_engie.length > 300) {
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
          company: this.g_rules.company,
          data: {
            company: this.g_rules.company,
            g_1: this.formData.g_1,
            g_1_comment: this.formData.g_1_comment,
            g_1_impact: this.formData.g_1_impact,
            g_1_engie: this.formData.g_1_engie,
            g_2: this.formData.g_2,
            g_2_comment: this.formData.g_2_comment,
            g_2_impact: this.formData.g_2_impact,
            g_2_engie: this.formData.g_2_engie,
            g_3: this.formData.g_3,
            g_3_comment: this.formData.g_3_comment,
            g_3_impact: this.formData.g_3_impact,
            g_3_engie: this.formData.g_3_engie,
            g_4: this.formData.g_4,
            g_4_comment: this.formData.g_4_comment,
            g_4_impact: this.formData.g_4_impact,
            g_4_engie: this.formData.g_4_engie,
            g_5: this.formData.g_5,
            g_5_comment: this.formData.g_5_comment,
            g_5_impact: this.formData.g_5_impact,
            g_5_engie: this.formData.g_5_engie,
            partnerId: this.g_rules.partnerId,
          },
        };
        this.edit_g_rules(payload);
        this.formData = this.g_rules
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.g_rules
    }
  }
</script>
