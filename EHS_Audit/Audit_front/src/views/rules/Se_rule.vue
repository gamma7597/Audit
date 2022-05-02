<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="handleSubmit">

      <label for="se_rules_1">
        <select
          id="se_rules_1" 
          placeholder="Le partenaire doit appliquer une procédure de durcissement des équipements et des OS (Operating System)" 
          v-model="formData.se_1" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit appliquer une procédure de durcissement des équipements et des OS (Operating System)</span>
      </label>
      <label for="se_rules_1_comment">
        <input type="text" 
          id="se_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.se_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="se_rules_1_impact">
        <select
          id="se_rules_1_impact" 
          placeholder="Impact" 
          v-model="formData.se_1_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="se_rules_1_engie">
        <input type="text" 
          id="se_rules_1_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.se_1_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="se_rules_2">
        <select
          id="se_rules_2" 
          placeholder="Le partenaire doit appliquer une politique antivirale sur tous les composants hébergeant le service fourni à EHS. 
Précisez les antivirus utilisés sur les postes et les serveurs, leurs versions et la fréquences de leur mise à jour" 
          v-model="formData.se_2" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit appliquer une politique antivirale sur tous les composants hébergeant le service fourni à EHS. 
Précisez les antivirus utilisés sur les postes et les serveurs, leurs versions et la fréquences de leur mise à jour</span>
      </label>
      <label for="se_rules_2_comment">
        <input type="text" 
          id="se_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.se_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="se_rules_2_impact">
        <select
          id="se_rules_2_impact" 
          placeholder="Impact" 
          v-model="formData.se_2_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="se_rules_2_engie">
        <input type="text" 
          id="se_rules_2_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.se_2_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="se_rules_3">
        <select
          id="se_rules_3" 
          placeholder="Le partenaire doit appliquer une procédure de patch management lui permettant de déployer rapidement les correctifs recommandés par les fournisseurs de solutions matérielles et logicielles" 
          v-model="formData.se_3" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit appliquer une procédure de patch management lui permettant de déployer rapidement les correctifs recommandés par les fournisseurs de solutions matérielles et logicielles</span>
      </label>
      <label for="se_rules_3_comment">
        <input type="text" 
          id="se_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.se_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="se_rules_3_impact">
        <select
          id="se_rules_3_impact" 
          placeholder="Impact" 
          v-model="formData.se_3_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="se_rules_3_engie">
        <input type="text" 
          id="se_rules_3_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.se_3_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="se_rules_4">
        <select
          id="se_rules_4" 
          placeholder="La prestation doit permettre la journalisation et la centralisation des évènements (techniques et applicatifs) ainsi que la protection de ces logs" 
          v-model="formData.se_4" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>La prestation doit permettre la journalisation et la centralisation des évènements (techniques et applicatifs) ainsi que la protection de ces logs</span>
      </label>
      <label for="se_rules_4_comment">
        <input type="text" 
          id="se_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.se_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="se_rules_4_impact">
        <select
          id="se_rules_4_impact" 
          placeholder="Impact" 
          v-model="formData.se_4_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="se_rules_4_engie">
        <input type="text" 
          id="se_rules_4_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.se_4_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="se_rules_5">
        <select
          id="se_rules_5" 
          placeholder="EHS doit être en mesure d'avoir accès aux journaux des logs ayant eu lieu sur son instance applicative notamment dans le cas de traitement d’incidents" 
          v-model="formData.se_5" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>EHS doit être en mesure d'avoir accès aux journaux des logs ayant eu lieu sur son instance applicative notamment dans le cas de traitement d’incidents</span>
      </label>
      <label for="se_rules_5_comment">
        <input type="text" 
          id="se_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.se_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>
      <label for="se_rules_5_impact">
        <select
          id="se_rules_5_impact" 
          placeholder="Impact" 
          v-model="formData.se_5_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>
      <label for="se_rules_5_engie">
        <input type="text" 
          id="se_rules_5_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.se_5_engie" />
        <span>Commentaire EHS</span>
      </label>

      <label for="se_rules_6">
        <select
          id="se_rules_6" 
          placeholder="Le partenaire doit mettre en place les moyens de sécurité appropriés pour assurer l'intégrité des données" 
          v-model="formData.se_6" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Le partenaire doit mettre en place les moyens de sécurité appropriés pour assurer l'intégrité des données</span>
      </label>
      <label for="se_rules_6_comment">
        <input type="text" 
          id="se_rules_6_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.se_6_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="se_rules_6_impact">
        <select
          id="se_rules_6_impact" 
          placeholder="Impact" 
          v-model="formData.se_6_impact">
          <option v-for="option in options2" :key="option.value">{{option.text}}</option>
        </select>
        <span>Impact</span>
      </label>

      <label for="se_rules_6_engie">
        <input type="text" 
          id="se_rules_6_engie" 
          placeholder="Commentaire EHS" 
          v-model="formData.se_6_engie" />
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
      ...mapState("se_rules", ["se_rules"]),
      ...mapState("partner", ["partner"])
    },
    methods: {
      ...mapActions("se_rules", ["edit_se_rules"]),
      handleSubmit() {
        const payload = {
          company: this.se_rules.company,
          data: {
            company: this.se_rules.company,
            se_1: this.formData.se_1,
            se_1_comment: this.formData.se_1_comment,
            se_1_impact: this.formData.se_1_impact,
            se_1_engie: this.formData.se_1_engie,
            se_2: this.formData.se_2,
            se_2_comment: this.formData.se_2_comment,
            se_2_impact: this.formData.se_2_impact,
            se_2_engie: this.formData.se_2_engie,
            se_3: this.formData.se_3,
            se_3_comment: this.formData.se_3_comment,
            se_3_impact: this.formData.se_3_impact,
            se_3_engie: this.formData.se_3_engie,
            se_4: this.formData.se_4,
            se_4_comment: this.formData.se_4_comment,
            se_4_impact: this.formData.se_4_impact,
            se_4_engie: this.formData.se_4_engie,
            se_5: this.formData.se_5,
            se_5_comment: this.formData.se_5_comment,
            se_5_impact: this.formData.se_5_impact,
            se_5_engie: this.formData.se_5_engie,
            se_6: this.formData.se_6,
            se_6_comment: this.formData.se_6_comment,
            se_6_impact: this.formData.se_6_impact,
            se_6_engie: this.formData.se_6_engie,
            partnerId: this.se_rules.partnerId,
          },
        };
        this.edit_se_rules(payload);
        this.formData = this.se_rules
      },
      goToRules(partner){
        this.$router.push("/rules/" + partner)
      }
    },
    mounted() {
      this.formData = this.se_rules
    }
  }
</script>
