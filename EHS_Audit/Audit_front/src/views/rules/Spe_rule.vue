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

      <label for="spe_rules_1">
        <select
          id="spe_rules_1" 
          placeholder="Le partenaire doit garantir le cloisonnement : 
- Des environnements (Préproduction, test, production, etc.) 
- Des réseaux 
- Des données EHS vis-à-vis des données des autres clients" 
          v-model="formData.spe_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit garantir le cloisonnement : 
- Des environnements (Préproduction, test, production, etc.) 
- Des réseaux 
- Des données EHS vis-à-vis des données des autres clients</span>
      </label>
      <label for="spe_rules_1_comment">
        <input type="text" 
          id="spe_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.spe_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_rules_1_impact">
        <select
          id="spe_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.spe_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="spe_rules_1_engie">
        <input type="text" 
          id="spe_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.spe_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="spe_rules_2">
        <select
          id="spe_rules_2" 
          placeholder="Les données EHS ne sont pas partagées avec d'autres tiers (sous-traitant ultérieur)
Dans le cas contraire, indiquez quelles données et quel(s) tier(s) sont concernés" 
          v-model="formData.spe_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les données EHS ne sont pas partagées avec d'autres tiers (sous-traitant ultérieur)
Dans le cas contraire, indiquez quelles données et quel(s) tier(s) sont concernés</span>
      </label>
      <label for="spe_rules_2_comment">
        <input type="text" 
          id="spe_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.spe_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_rules_2_impact">
        <select
          id="spe_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.spe_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="spe_rules_2_engie">
        <input type="text" 
          id="spe_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.spe_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="spe_rules_3">
        <select
          id="spe_rules_3" 
          placeholder="Le partenaire doit préciser la liste de tous les lieux de stockage des données de EHS (site d’hébergement principal, sites de secours, etc.) et s’engager à tenir informé EHS en cas de changement de localisation des données" 
          v-model="formData.spe_3">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit préciser la liste de tous les lieux de stockage des données de EHS (site d’hébergement principal, sites de secours, etc.) et s’engager à tenir informé EHS en cas de changement de localisation des données</span>
      </label>
      <label for="spe_rules_3_comment">
        <input type="text" 
          id="spe_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.spe_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_rules_3_impact">
        <select
          id="spe_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.spe_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="spe_rules_3_engie">
        <input type="text" 
          id="spe_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.spe_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="spe_rules_4">
        <select
          id="spe_rules_4" 
          placeholder="Les visiteurs sont identifiés et escortés durant leur visite" 
          v-model="formData.spe_4">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les visiteurs sont identifiés et escortés durant leur visite</span>
      </label>
      <label for="spe_rules_4_comment">
        <input type="text" 
          id="spe_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.spe_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_rules_4_impact">
        <select
          id="spe_rules_4_impact" 
          placeholder="Impact" 
          v-model="formData.spe_4_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="spe_rules_4_engie">
        <input type="text" 
          id="spe_rules_4_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.spe_4_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="spe_rules_5">
        <select
          id="spe_rules_5" 
          placeholder="Les lieux d’hébergement des actifs EHS doivent satisfaire les exigences de sécurité physique (contrôles des accès physiques, alarme anti-intrusion, dispositif anti-incendie, protection contre les dégâts des eaux, etc.)" 
          v-model="formData.spe_5">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Les lieux d’hébergement des actifs EHS doivent satisfaire les exigences de sécurité physique (contrôles des accès physiques, alarme anti-intrusion, dispositif anti-incendie, protection contre les dégâts des eaux, etc.)</span>
      </label>
      <label for="spe_rules_5_comment">
        <input type="text" 
          id="spe_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.spe_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="spe_rules_5_impact">
        <select
          id="spe_rules_5_impact" 
          placeholder="Impact" 
          v-model="formData.spe_5_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="spe_rules_5_engie">
        <input type="text" 
          id="spe_rules_5_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.spe_5_engie" />
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
      ...mapState("spe_rules", ["spe_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("spe_rules", ["edit_spe_rules"]),
      verifForm() {
        this.errors = [];

        const { spe_1, spe_1_comment, spe_1_engie, 
          spe_2, spe_2_comment, spe_2_engie, 
          spe_3, spe_3_comment, spe_3_engie, 
          spe_4, spe_4_comment, spe_4_engie,
          spe_5, spe_5_comment, spe_5_engie } = this.formData
        
        if(!spe_1 || !spe_2 || !spe_3 || !spe_4 || !spe_5) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(spe_1_comment.length > 300 || spe_2_comment.length > 300 || spe_3_comment.length > 300 || spe_4_comment.length > 300 || spe_5_comment.length > 300
          || spe_1_engie.length > 300 || spe_2_engie.length > 300 || spe_3_engie.length > 300 || spe_4_engie.length > 300 || spe_5_engie.length > 300) {
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
          company: this.spe_rules.company,
          data: {
            company: this.spe_rules.company,
            spe_1: this.formData.spe_1,
            spe_1_comment: this.formData.spe_1_comment,
            spe_1_impact: this.formData.spe_1_impact,
            spe_1_engie: this.formData.spe_1_engie,
            spe_2: this.formData.spe_2,
            spe_2_comment: this.formData.spe_2_comment,
            spe_2_impact: this.formData.spe_2_impact,
            spe_2_engie: this.formData.spe_2_engie,
            spe_3: this.formData.spe_3,
            spe_3_comment: this.formData.spe_3_comment,
            spe_3_impact: this.formData.spe_3_impact,
            spe_3_engie: this.formData.spe_3_engie,
            spe_4: this.formData.spe_4,
            spe_4_comment: this.formData.spe_4_comment,
            spe_4_impact: this.formData.spe_4_impact,
            spe_4_engie: this.formData.spe_4_engie,
            spe_5: this.formData.spe_5,
            spe_5_comment: this.formData.spe_5_comment,
            spe_5_impact: this.formData.spe_5_impact,
            spe_5_engie: this.formData.spe_5_engie,
            partnerId: this.spe_rules.partnerId,
          },
        };
        this.edit_spe_rules(payload);
        this.formData = this.spe_rules
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.spe_rules
    }
  }
</script>
