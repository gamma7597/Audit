<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="handleSubmit">

      <label for="gi_rules_1">
        <select
          id="gi_rules_1" 
          placeholder="Un système de surveillance et d'alerte en cas d'incident de sécurité est présent" 
          v-model="formData.gi_1" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Un système de surveillance et d'alerte en cas d'incident de sécurité est présent</span>
      </label>
      <label for="gi_rules_1_comment">
        <input type="text" 
          id="gi_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.gi_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="gi_rules_1_impact">
        <select
          id="gi_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.gi_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="gi_rules_1_engie">
        <input type="text" 
          id="gi_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.gi_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="gi_rules_2">
        <select
          id="gi_rules_2" 
          placeholder="Un système de résolution d'incident est présent" 
          v-model="formData.gi_2" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Un système de résolution d'incident est présent</span>
      </label>
      <label for="gi_rules_2_comment">
        <input type="text" 
          id="gi_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.gi_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="gi_rules_2_impact">
        <select
          id="gi_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.gi_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="gi_rules_2_engie">
        <input type="text" 
          id="gi_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.gi_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="gi_rules_3">
        <select
          id="gi_rules_3" 
          placeholder="Il existe un processus pour alerter EHS rapidement en cas d'incident impactant le service du partenaire. 
Ce processus doit être connu par tous les employés du partenaire.
Préciser les délais de notification." 
          v-model="formData.gi_3" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Il existe un processus pour alerter EHS rapidement en cas d'incident impactant le service du partenaire. 
Ce processus doit être connu par tous les employés du partenaire.
Préciser les délais de notification.</span>
      </label>
      <label for="gi_rules_3_comment">
        <input type="text" 
          id="gi_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.gi_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="gi_rules_3_impact">
        <select
          id="gi_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.gi_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="gi_rules_3_engie">
        <input type="text" 
          id="gi_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.gi_3_engie" />
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
      ...mapState("gi_rules", ["gi_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("gi_rules", ["edit_gi_rules"]),
      handleSubmit() {
        const payload = {
          company: this.gi_rules.company,
          data: {
            company: this.gi_rules.company,
            gi_1: this.formData.gi_1,
            gi_1_comment: this.formData.gi_1_comment,
            gi_1_impact: this.formData.gi_1_impact,
            gi_1_engie: this.formData.gi_1_engie,
            gi_2: this.formData.gi_2,
            gi_2_comment: this.formData.gi_2_comment,
            gi_2_impact: this.formData.gi_2_impact,
            gi_2_engie: this.formData.gi_2_engie,
            gi_3: this.formData.gi_3,
            gi_3_comment: this.formData.gi_3_comment,
            gi_3_impact: this.formData.gi_3_impact,
            gi_3_engie: this.formData.gi_3_engie,
            partnerId: this.gi_rules.partnerId,
          },
        };
        this.edit_gi_rules(payload);
        this.formData = this.gi_rules
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.gi_rules
    }
  }
</script>
