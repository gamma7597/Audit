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

      <label for="c_rules_1">
        <select
          id="c_rules_1" 
          placeholder="Le partenaire doit proposer une architecture sécurisée (Réseau, Endpoint, Serveur, etc.). 
Le partenaire doit envoyer à EHS le schéma d'architecture sécurité de la solution proposée" 
          v-model="formData.c_1">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit proposer une architecture sécurisée (Réseau, Endpoint, Serveur, etc.). 
Le partenaire doit envoyer à EHS le schéma d'architecture sécurité de la solution proposée</span>
      </label>
      <label for="c_rules_1_comment">
        <input type="text" 
          id="c_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.c_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_rules_1_impact">
        <select
          id="c_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.c_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="c_rules_1_engie">
        <input type="text" 
          id="c_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.c_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="c_rules_2">
        <select
          id="c_rules_2" 
          placeholder="Le partenaire doit assurer le chiffrement des données d'EHS en transmission" 
          v-model="formData.c_2">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit assurer le chiffrement des données d'EHS en transmission</span>
      </label>
      <label for="c_rules_2_comment">
        <input type="text" 
          id="c_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.c_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_rules_2_impact">
        <select
          id="c_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.c_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="c_rules_2_engie">
        <input type="text" 
          id="c_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.c_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="c_rules_3">
        <select
          id="c_rules_3" 
          placeholder="Présence d'une matrice de flux à jour : le partenaire doit envoyer à EHS la matrice de flux listant tous les flux utilisés pour la réalisation de la prestation." 
          v-model="formData.c_3">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Présence d'une matrice de flux à jour : le partenaire doit envoyer à EHS la matrice de flux listant tous les flux utilisés pour la réalisation de la prestation.</span>
      </label>
      <label for="c_rules_3_comment">
        <input type="text" 
          id="c_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.c_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_rules_3_impact">
        <select
          id="c_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.c_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="c_rules_3_engie">
        <input type="text" 
          id="c_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.c_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="c_rules_4">
        <select
          id="c_rules_4" 
          placeholder="Le partenaire doit mettre en œuvre des composants de détection, de prévention et de monitoring (IDS,IPS) sur tous les flux entrants" 
          v-model="formData.c_4">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit mettre en œuvre des composants de détection, de prévention et de monitoring (IDS,IPS) sur tous les flux entrants</span>
      </label>
      <label for="c_rules_4_comment">
        <input type="text" 
          id="c_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.c_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_rules_4_impact">
        <select
          id="c_rules_4_impact" 
          placeholder="Impact" 
          v-model="formData.c_4_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="c_rules_4_engie">
        <input type="text" 
          id="c_rules_4_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.c_4_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="c_rules_5">
        <select
          id="c_rules_5" 
          placeholder="Le partenaire doit mettre en œuvre des composants spécifiques de filtrage" 
          v-model="formData.c_5">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit mettre en œuvre des composants spécifiques de filtrage</span>
      </label>
      <label for="c_rules_5_comment">
        <input type="text" 
          id="c_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.c_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_rules_5_impact">
        <select
          id="c_rules_5_impact" 
          placeholder="Impact" 
          v-model="formData.c_5_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="c_rules_5_engie">
        <input type="text" 
          id="c_rules_5_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.c_5_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="c_rules_6">
        <select
          id="c_rules_6" 
          placeholder="Le partenaire doit sécuriser les accès distants par VPN et les flux Wi-Fi à minima par protocole WPA2 ou WPA2-PSK" 
          v-model="formData.c_6">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit sécuriser les accès distants par VPN et les flux Wi-Fi à minima par protocole WPA2 ou WPA2-PSK</span>
      </label>
      <label for="c_rules_6_comment">
        <input type="text" 
          id="c_rules_6_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.c_6_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_rules_6_impact">
        <select
          id="c_rules_6_impact" 
          placeholder="Impact" 
          v-model="formData.c_6_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="c_rules_6_engie">
        <input type="text" 
          id="c_rules_6_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.c_6_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="c_rules_7">
        <select
          id="c_rules_7" 
          placeholder="Le partenaire doit mettre en place un outil permettant la détection de fuite de données sensibles" 
          v-model="formData.c_7">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit mettre en place un outil permettant la détection de fuite de données sensibles</span>
      </label>
      <label for="c_rules_7_comment">
        <input type="text" 
          id="c_rules_7_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.c_7_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_rules_7_impact">
        <select
          id="c_rules_7_impact" 
          placeholder="Impact" 
          v-model="formData.c_7_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="c_rules_7_engie">
        <input type="text" 
          id="c_rules_7_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.c_7_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="c_rules_8">
        <select
          id="c_rules_8" 
          placeholder="Une protection contre les attaques de type déni de service doit être mise en œuvre pour protéger le service fourni à EHS" 
          v-model="formData.c_8">
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Une protection contre les attaques de type déni de service doit être mise en œuvre pour protéger le service fourni à EHS</span>
      </label>
      <label for="c_rules_8_comment">
        <input type="text" 
          id="c_rules_8_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.c_8_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label v-if="groups.includes('GG-USR-APPCONFORMITE-ADMIN')" for="c_rules_8_impact">
        <select
          id="c_rules_8_impact" 
          placeholder="Impact" 
          v-model="formData.c_8_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="c_rules_8_engie">
        <input type="text" 
          id="c_rules_8_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.c_8_engie" />
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
      ...mapState("c_rules", ["c_rules"]),
      ...mapState("partner", ["partner"]),
      ...mapState("user", ["groups"])
    },
    methods: {
      ...mapActions("c_rules", ["edit_c_rules"]),
      verifForm() {
        this.errors = [];

        const { c_1, c_1_comment, c_1_engie, 
          c_2, c_2_comment, c_2_engie, 
          c_3, c_3_comment, c_3_engie, 
          c_4, c_4_comment, c_4_engie,
          c_5, c_5_comment, c_5_engie,
          c_6, c_6_comment, c_6_engie,
          c_7, c_7_comment, c_7_engie,
          c_8, c_8_comment, c_8_engie } = this.formData
        
        if(!c_1 || !c_2 || !c_3 || !c_4 || !c_5 || !c_6 || !c_7 || !c_8) {
          this.errors.push("Vous devez repondre à toutes les questions !");
        }

        if(c_1_comment.length > 300 || c_2_comment.length > 300 || c_3_comment.length > 300 || c_4_comment.length > 300 || c_5_comment.length > 300 || c_6_comment.length > 300 || c_7_comment.length > 300 || c_8_comment.length > 300
          || c_1_engie.length > 300 || c_2_engie.length > 300 || c_3_engie.length > 300 || c_4_engie.length > 300 || c_5_engie.length > 300 || c_6_engie.length > 300 || c_7_engie.length > 300 || c_8_engie.length > 300) {
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
          company: this.c_rules.company,
          data: {
            company: this.c_rules.company,
            c_1: this.formData.c_1,
            c_1_comment: this.formData.c_1_comment,
            c_1_impact: this.formData.c_1_impact,
            c_1_engie: this.formData.c_1_engie,
            c_2: this.formData.c_2,
            c_2_comment: this.formData.c_2_comment,
            c_2_impact: this.formData.c_2_impact,
            c_2_engie: this.formData.c_2_engie,
            c_3: this.formData.c_3,
            c_3_comment: this.formData.c_3_comment,
            c_3_impact: this.formData.c_3_impact,
            c_3_engie: this.formData.c_3_engie,
            c_4: this.formData.c_4,
            c_4_comment: this.formData.c_4_comment,
            c_4_impact: this.formData.c_4_impact,
            c_4_engie: this.formData.c_4_engie,
            c_5: this.formData.c_5,
            c_5_comment: this.formData.c_5_comment,
            c_5_impact: this.formData.c_5_impact,
            c_5_engie: this.formData.c_5_engie,
            c_6: this.formData.c_6,
            c_6_comment: this.formData.c_6_comment,
            c_6_impact: this.formData.c_6_impact,
            c_6_engie: this.formData.c_6_engie,
            c_7: this.formData.c_7,
            c_7_comment: this.formData.c_7_comment,
            c_7_impact: this.formData.c_7_impact,
            c_7_engie: this.formData.c_7_engie,
            c_8: this.formData.c_8,
            c_8_comment: this.formData.c_8_comment,
            c_8_impact: this.formData.c_8_impact,
            c_8_engie: this.formData.c_8_engie,
            partnerId: this.c_rules.partnerId,
          },
        };
        this.edit_c_rules(payload);
        this.formData = this.c_rules;
        this.goToRules(this.partner.company)
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
     mounted() {
      this.formData = this.c_rules
    }
  }
</script>
