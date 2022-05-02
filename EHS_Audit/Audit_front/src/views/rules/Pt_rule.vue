<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="handleSubmit">

      <label for="pt_rules_1">
        <select
          id="pt_rules_1" 
          placeholder="EHS doit être en mesure de réaliser des audits organisationnels sur le périmètre du service fourni à EHS" 
          v-model="formData.pt_1" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>EHS doit être en mesure de réaliser des audits organisationnels sur le périmètre du service fourni à EHS</span>
      </label>
      <label for="pt_rules_1_comment">
        <input type="text" 
          id="pt_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.pt_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="pt_rules_1_impact">
        <select
          id="pt_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.pt_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="pt_rules_1_engie">
        <input type="text" 
          id="pt_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.pt_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="pt_rules_2">
        <select
          id="pt_rules_2" 
          placeholder="EHS doit être en mesure de réaliser des audits techniques (test d'intrusion, scan de vulnérabilité, audit de code, audit d'infrastructure) sur le périmètre du service fourni à EHS" 
          v-model="formData.pt_2" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>EHS doit être en mesure de réaliser des audits techniques (test d'intrusion, scan de vulnérabilité, audit de code, audit d'infrastructure) sur le périmètre du service fourni à EHS</span>
      </label>
      <label for="pt_rules_2_comment">
        <input type="text" 
          id="pt_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.pt_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="pt_rules_2_impact">
        <select
          id="pt_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.pt_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="pt_rules_2_engie">
        <input type="text" 
          id="pt_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.pt_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="pt_rules_3">
        <select
          id="pt_rules_3" 
          placeholder="EHS doit être en mesure de réaliser des audits organisationnels sur le périmètre du service fourni à EHS" 
          v-model="formData.pt_3" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>EHS doit être en mesure de réaliser des audits de la sécurité physique sur le périmètre du service fourni à EHS</span>
      </label>
      <label for="pt_rules_3_comment">
        <input type="text" 
          id="pt_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.pt_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="pt_rules_3_impact">
        <select
          id="pt_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.pt_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="pt_rules_3_engie">
        <input type="text" 
          id="pt_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.pt_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="pt_rules_4">
        <select
          id="pt_rules_4" 
          placeholder="Le partenaire doit régulièrement évaluer le niveau de sécurité de ses périmètres sensibles ou exposés par le biais de tests d'intrusion et de scan de vulnérabilités et corriger les vulnérabilités découvertes" 
          v-model="formData.pt_4" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit régulièrement évaluer le niveau de sécurité de ses périmètres sensibles ou exposés par le biais de tests d'intrusion et de scan de vulnérabilités et corriger les vulnérabilités découvertes</span>
      </label>
      <label for="pt_rules_4_comment">
        <input type="text" 
          id="pt_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.pt_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="pt_rules_4_impact">
        <select
          id="pt_rules_4_impact" 
          placeholder="Impact" 
          v-model="formData.pt_4_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="pt_rules_4_engie">
        <input type="text" 
          id="pt_rules_4_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.pt_4_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="pt_rules_5">
        <select
          id="pt_rules_5" 
          placeholder="Le partenaire doit corriger les éventuelles vulnérabilités qui lui sont imputables (tierces parties incluses), selon un planning qui sera défini en collaboration avec EHS" 
          v-model="formData.pt_5" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit corriger les éventuelles vulnérabilités qui lui sont imputables (tierces parties incluses), selon un planning qui sera défini en collaboration avec EHS</span>
      </label>
      <label for="pt_rules_5_comment">
        <input type="text" 
          id="pt_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.pt_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="pt_rules_5_impact">
        <select
          id="pt_rules_5_impact" 
          placeholder="Impact" 
          v-model="formData.pt_5_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="pt_rules_5_engie">
        <input type="text" 
          id="pt_rules_5_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.pt_5_engie" />
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
      ...mapState("pt_rules", ["pt_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("pt_rules", ["edit_pt_rules"]),
      handleSubmit() {
        const payload = {
          company: this.pt_rules.company,
          data: {
            company: this.pt_rules.company,
            pt_1: this.formData.pt_1,
            pt_1_comment: this.formData.pt_1_comment,
            pt_1_impact: this.formData.pt_1_impact,
            pt_1_engie: this.formData.pt_1_engie,
            pt_2: this.formData.pt_2,
            pt_2_comment: this.formData.pt_2_comment,
            pt_2_impact: this.formData.pt_2_impact,
            pt_2_engie: this.formData.pt_2_engie,
            pt_3: this.formData.pt_3,
            pt_3_comment: this.formData.pt_3_comment,
            pt_3_impact: this.formData.pt_3_impact,
            pt_3_engie: this.formData.pt_3_engie,
            pt_4: this.formData.pt_4,
            pt_4_comment: this.formData.pt_4_comment,
            pt_4_impact: this.formData.pt_4_impact,
            pt_4_engie: this.formData.pt_4_engie,
            pt_5: this.formData.pt_5,
            pt_5_comment: this.formData.pt_5_comment,
            pt_5_impact: this.formData.pt_5_impact,
            pt_5_engie: this.formData.pt_5_engie,
            partnerId: this.pt_rules.partnerId,
          },
        };
        this.edit_pt_rules(payload);
        this.formData = this.pt_rules
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.pt_rules
    }
  }
</script>
