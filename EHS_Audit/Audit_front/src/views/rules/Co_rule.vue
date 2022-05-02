<template>
  <div>
    <button class="button_blue" @click="goToRules(partner.company)">Retour</button>

    <form @submit.prevent="handleSubmit">

      <label for="co_rules_1">
        <select
          id="co_rules_1" 
          placeholder="Accès applicatif (ex : filtrage applicatif)" 
          v-model="formData.co_1" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Accès applicatif (ex : filtrage applicatif)</span>
      </label>

      <label for="co_rules_1_comment">
        <input type="text" 
          id="co_rules_1_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.co_1_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="co_rules_2">
        <select
          id="co_rules_2" 
          placeholder="Accès VPN (Global Protect) / Firewall" 
          v-model="formData.co_2" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Accès VPN (Global Protect) / Firewall</span>
      </label>

      <label for="co_rules_2_comment">
        <input type="text" 
          id="co_rules_2_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.co_2_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="co_rules_3">
        <select
          id="co_rules_3" 
          placeholder="Accès ZPA" 
          v-model="formData.co_3" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Accès ZPA</span>
      </label>

      <label for="co_rules_3_comment">
        <input type="text" 
          id="co_rules_3_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.co_3_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="co_rules_4">
        <select
          id="co_rules_4" 
          placeholder="Accès lien réseau Wan dédié (MPLS)" 
          v-model="formData.co_4" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Accès lien réseau Wan dédié (MPLS)</span>
      </label>

      <label for="co_rules_4_comment">
        <input type="text" 
          id="co_rules_4_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.co_4_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="co_rules_5">
        <select
          id="co_rules_5" 
          placeholder="Depuis un réseau externe en SSO ENGIE avec OKTA" 
          v-model="formData.co_5" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Depuis un réseau externe en SSO ENGIE avec OKTA</span>
      </label>

      <label for="co_rules_5_comment">
        <input type="text" 
          id="co_rules_5_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.co_5_comment" />
        <span>Commentaire du partenaire</span>
      </label>

      <label for="co_rules_6">
        <select
          id="co_rules_6" 
          placeholder="Depuis un réseau externe en MFA avec OKTA" 
          v-model="formData.co_6" 
          required>
          <option v-for="option in options" :key="option.value">{{option.text}}</option>
        </select>
        <span>Depuis un réseau externe en MFA avec OKTA</span>
      </label>

      <label for="co_rules_6_comment">
        <input type="text" 
          id="co_rules_6_comment" 
          placeholder="Commentaire du partenaire" 
          v-model="formData.co_6_comment" />
        <span>Commentaire du partenaire</span>
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
        { value: "Oui", text: "Oui" },
        { value: "Non", text: "Non" },
      ],
    };
  },
  computed: {
    ...mapState("co_rules", ["co_rules"]),
    ...mapState("partner", ["partner"]),
  },
  methods: {
    ...mapActions("co_rules", ["edit_co_rules"]),
    handleSubmit() {
      console.log(this.co_rules);
      const payload = {
        company: this.co_rules.company,
        data: {
          company: this.co_rules.company,
          co_1: this.formData.co_1,
          co_1_comment: this.formData.co_1_comment,
          co_2: this.formData.co_2,
          co_2_comment: this.formData.co_2_comment,
          co_3: this.formData.co_3,
          co_3_comment: this.formData.co_3_comment,
          co_4: this.formData.co_4,
          co_4_comment: this.formData.co_4_comment,
          co_5: this.formData.co_5,
          co_5_comment: this.formData.co_5_comment,
          co_6: this.formData.co_6,
          co_6_comment: this.formData.co_6_comment,
          partnerId: this.co_rules.partnerId,
        },
      };
      this.edit_co_rules(payload);
      this.formData = this.co_rules;
    },
    goToRules(partner){
      this.$router.push("/rules/" + partner)
    }
  },
  mounted() {
    this.formData = this.co_rules;
  },
};
</script>