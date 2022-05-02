<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="handleSubmit">

      <label for="gca_rules_1">
        <select
          id="gca_rules_1" 
          placeholder="Présence d'un PCA [Plan de Continuité d'Activité] maintenu et testé" 
          v-model="formData.gca_1" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Présence d'un PCA [Plan de Continuité d'Activité] maintenu et testé</span>
      </label>
      <label for="gca_rules_1_comment">
        <input type="text" 
          id="gca_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.gca_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="gca_rules_1_impact">
        <select
          id="gca_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.gca_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="gca_rules_1_engie">
        <input type="text" 
          id="gca_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.gca_1_engie"/>
        <span>Commentaire EHS</span>
      </label>

      <label for="gca_rules_2">
        <select
          id="gca_rules_2" 
          placeholder="Présence d'un PRA [Plan de Reprise d'Activité] maintenu et testé" 
          v-model="formData.gca_2" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Présence d'un PRA [Plan de Reprise d'Activité] maintenu et testé</span>
      </label>
      <label for="gca_rules_2_comment">
        <input type="text" 
          id="gca_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.gca_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="gca_rules_2_impact">
        <select
          id="gca_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.gca_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="gca_rules_2_engie">
        <input type="text" 
          id="gca_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.gca_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="gca_rules_3">
        <select
          id="gca_rules_3" 
          placeholder="Présence d'un PSR [Plan de Sauvegarde et Restitution] maintenu et testé" 
          v-model="formData.gca_3" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Présence d'un PSR [Plan de Sauvegarde et Restitution] maintenu et testé</span>
      </label>
      <label for="gca_rules_3_comment">
        <input type="text" 
          id="gca_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.gca_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="gca_rules_3_impact">
        <select
          id="gca_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.gca_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="gca_rules_3_engie">
        <input type="text" 
          id="gca_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.gca_3_engie" />
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
      ...mapState("gca_rules", ["gca_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("gca_rules", ["edit_gca_rules"]),
      handleSubmit() {
        const payload = {
          company: this.gca_rules.company,
          data: {
            company: this.gca_rules.company,
            gca_1: this.formData.gca_1,
            gca_1_comment: this.formData.gca_1_comment,
            gca_1_impact: this.formData.gca_1_impact,
            gca_1_engie: this.formData.gca_1_engie,
            gca_2: this.formData.gca_2,
            gca_2_comment: this.formData.gca_2_comment,
            gca_2_impact: this.formData.gca_2_impact,
            gca_2_engie: this.formData.gca_2_engie,
            gca_3: this.formData.gca_3,
            gca_3_comment: this.formData.gca_3_comment,
            gca_3_impact: this.formData.gca_3_impact,
            gca_3_engie: this.formData.gca_3_engie,
            partnerId: this.gca_rules.partnerId,
          },
        };
        this.edit_gca_rules(payload);
        this.formData = this.gca_rules
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.gca_rules
    }
  }
</script>
