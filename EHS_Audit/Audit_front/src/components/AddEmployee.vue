<template>
  <div class="addEmployee">
    <button class="button_blue" @click="toggleEmployeeForm">Ajouter un employe</button>
    <form @submit.prevent="handleSubmit" v-if="showEmployeeForm">

      <label for="last_nameInput">
        <input type="text" 
          id="last_nameInput" 
          placeholder="Nom de l'employe" 
          v-model="formData.last_name" 
          required />
        <span>Nom de l'employe</span>
      </label>

      <label for="first_nameInput">
        <input type="text" 
          id="first_nameInput" 
          placeholder="Prenom de l'employe" 
          v-model="formData.first_name" 
          required />
        <span>Prenom de l'employe</span>
      </label>

      <label for="jobInput">
        <input type="text" 
          id="jobInput" 
          placeholder="Fonction de l'employe" 
          v-model="formData.job" 
          required />
        <span>Fonction de l'employe</span>
      </label>

      <label for="mailInput">
        <input type="text" 
          id="mailInput" 
          placeholder="Mail de l'employe" 
          v-model="formData.mail" 
          required />
        <span>Mail de l'employe</span>
      </label>

      <label for="phoneInput">
        <input type="number" 
          id="phoneInput" 
          placeholder="Telephone de l'employe" 
          v-model="formData.phone" 
          required />
        <span>Telephone de l'employe</span>
      </label>

      <label for="work_placeInput">
        <input type="text" 
          id="work_placeInput" 
          placeholder="Lieu de travail de l'employe" 
          v-model="formData.work_place" 
          required />
        <span>Lieu de travail de l'employe</span>
      </label>

      <label for="start_dateInput">
        <input type="date" 
          id="start_dateInput" 
          placeholder="Date d'entrée de l'employe" 
          v-model="formData.start_date" 
          required />
        <span>Date d'entrée de l'employe</span>
      </label>

      <label for="end_dateInput">
        <input type="date" 
          id="end_dateInput" 
          placeholder="Date de sortie de l'employe" 
          v-model="formData.end_date" 
          required />
        <span>Date de sortie de l'employe</span>
      </label>

      <label for="laptopInput">
        <input type="text" 
          id="laptopInput" 
          placeholder="Ordinateur portable" 
          v-model="formData.laptop" 
          required />
        <span>Ordinateur portable</span>
      </label>

      <label for="desktopInput">
        <input type="text" 
          id="desktopInput" 
          placeholder="Ordinateur de bureau" 
          v-model="formData.desktop" 
          required />
        <span>Ordinateur de bureau</span>
      </label>

      <label for="checkbox-1">
        <input type="checkbox" 
          id="checkbox-1" 
          v-model="formData.office_admin_user" 
          value= 1
          unchecked-value= 0 />
        <span>Office Admin User</span>
      </label>

      <label for="gidInput">
        <input type="number" 
          id="gidInput" 
          placeholder="GID de l'employe" 
          v-model="formData.gid" 
          required />
        <span>GID de l'employe</span>
      </label>

      <label for="checkbox-1">
        <input type="checkbox" 
          id="checkbox-1" 
          v-model="formData.office_account_d79" 
          value= 1
          unchecked-value= 0 />
        <span>Office Account D79</span>
      </label>

      <label for="checkbox-1">
        <input type="checkbox" 
          id="checkbox-1" 
          v-model="formData.functional_access" 
          value= 1
          unchecked-value= 0 />
        <span>Accès fonctionnel</span>
      </label>

      <label for="checkbox-1">
        <input type="checkbox" 
          id="checkbox-1" 
          v-model="formData.technical_access" 
          value= 1
          unchecked-value= 0 />
        <span>Accès technique</span>
      </label>

      <label for="checkbox-1">
        <input type="checkbox" 
          id="checkbox-1" 
          v-model="formData.salesforce_access" 
          value= 1
          unchecked-value= 0 />
        <span>Accès SalesForce</span>
      </label>

      <label for="checkbox-1">
        <input type="checkbox" 
          id="checkbox-1" 
          v-model="formData.gazelle_erp_access" 
          value= 1
          unchecked-value= 0 />
        <span>Accès Gazelle ERP</span>
      </label>

      <label for="other_accessInput">
        <input type="text" 
          id="other_accessInput" 
          placeholder="Autres accès de l'employe" 
          v-model="formData.other_access" 
          required />
        <span>Autres accès de l'employe</span>
      </label>

      <label for="commentInput">
        <input type="text" 
          id="commentInput" 
          placeholder="Commentaire" 
          v-model="formData.comment" 
          required />
        <span>Commentaire</span>
      </label>

      <label for="vpn_accessInput">
        <input type="text" 
          id="vpn_accessInput" 
          placeholder="Accès VPN" 
          v-model="formData.vpn_access" 
          required />
        <span>Accès VPN</span>
      </label>

      <label for="checkbox-1">
        <input type="checkbox" 
          id="checkbox-1" 
          v-model="formData.okta_mfa_access"
          unchecked 
          value= 1
          unchecked-value= 0 />
        <span>Accès Okta MFA</span>
      </label>

      <button class="button_form" type="submit">Ajouter</button>
      <button class="button_form" type="reset">Réinitialiser le formulaire</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "AddEmployee",
  data() {
    return {
      showEmployeeForm: false,
      formData: {
        last_name: "",
        first_name: "",
        job: "",
        mail: "",
        phone: null,
        work_place: "",
        start_date: "",
        end_date: "",
        laptop: "",
        desktop: "",
        office_admin_user: "0",
        gid: null,
        office_account_d79: "0",
        functional_access: "0",
        technical_access: "0",
        salesforce_access: "0",
        gazelle_erp_access: "0",
        other_access: "",
        comment: "",
        vpn_access: "",
        okta_mfa_access: "0",
      },
    };
  },
  computed: {
    ...mapState("partner", ["partner"]),
  },
  methods: {
    ...mapActions("employee", ["addEmployee"]),
    toggleEmployeeForm() {
      this.showEmployeeForm = !this.showEmployeeForm;
    },
    handleSubmit() {
      const {
        last_name,
        first_name,
        job,
        mail,
        phone,
        work_place,
        start_date,
        end_date,
        laptop,
        desktop,
        office_admin_user,
        gid,
        office_account_d79,
        functional_access,
        technical_access,
        salesforce_access,
        gazelle_erp_access,
        other_access,
        comment,
        vpn_access,
        okta_mfa_access,
      } = this.formData;
      const payload = {
        company: this.partner.company,
        data: {
          company: this.partner.company,
          last_name,
          first_name,
          job,
          mail,
          phone,
          work_place,
          start_date,
          end_date,
          laptop,
          desktop,
          office_admin_user,
          gid,
          office_account_d79,
          functional_access,
          technical_access,
          salesforce_access,
          gazelle_erp_access,
          other_access,
          comment,
          vpn_access,
          okta_mfa_access,
          partnerId: this.partner.id,
        }
      }
      this.addEmployee(payload);
      this.formData = {
        last_name: "",
        first_name: "",
        job: "",
        mail: "",
        phone: null,
        work_place: "",
        start_date: "",
        end_date: "",
        laptop: "",
        desktop: "",
        office_admin_user: "0",
        gid: null,
        office_account_d79: "0",
        functional_access: "0",
        technical_access: "0",
        salesforce_access: "0",
        gazelle_erp_access: "0",
        other_access: "",
        comment: "",
        vpn_access: "",
        okta_mfa_access: "0"
      };
      this.toggleEmployeeForm();
    },
  },
};
</script>
