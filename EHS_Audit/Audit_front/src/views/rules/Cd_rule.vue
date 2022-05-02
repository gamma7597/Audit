<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="handleSubmit">

      <label for="cd_rules_1">
        <select
          id="cd_rules_1" 
          placeholder="L'inventaire des données EHS traitées par le partenaire est maintenu à jour" label-for="cd_rules_1-select" 
          v-model="formData.cd_1" 
          required>
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

      <label for="cd_rules_1_impact">
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
          v-model="formData.cd_2" 
          required>
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
      <label for="cd_rules_2_impact">
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
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("cd_rules", ["edit_cd_rules"]),
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
