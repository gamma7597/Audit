<template>
  <div class="addEmployee">
    <button @click="toggleEmployeeForm" class="btn btn-primary">
      Add New Employee
    </button>
    <b-form @submit.prevent="handleSubmit" v-if="showEmployeeForm">
      <b-form-group
        id="exampleInputGroup"
        label="Last name : "
        label-for="last_nameInput"
      >
        <b-form-input
          id="last_nameInput"
          type="text"
          v-model="formData.last_name"
          required
          placeholder="Enter last name"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="First name : "
        label-for="first_nameInput"
      >
        <b-form-input
          id="first_nameInput"
          type="text"
          v-model="formData.first_name"
          required
          placeholder="Enter first name"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup" label="Job : " label-for="jobInput">
        <b-form-input
          id="jobInput"
          type="text"
          v-model="formData.job"
          required
          placeholder="Enter job"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="Mail : "
        label-for="mailInput"
      >
        <b-form-input
          id="mailInput"
          type="text"
          v-model="formData.mail"
          required
          placeholder="Enter mail"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="Phone : "
        label-for="phoneInput"
      >
        <b-form-input
          id="phoneInput"
          type="number"
          v-model="formData.phone"
          required
          placeholder="Enter phone"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="Work place : "
        label-for="work_placeInput"
      >
        <b-form-input
          id="work_placeInput"
          type="text"
          v-model="formData.work_place"
          required
          placeholder="Enter work place"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="Start date : "
        label-for="start_dateInput"
      >
        <b-form-input
          id="start_dateInput"
          type="date"
          v-model="formData.start_date"
          required
          placeholder="Enter start date"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="End date : "
        label-for="end_dateInput"
      >
        <b-form-input
          id="end_dateInput"
          type="date"
          v-model="formData.end_date"
          required
          placeholder="Enter end date"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="Laptop : "
        label-for="laptopInput"
      >
        <b-form-input
          id="laptopInput"
          type="text"
          v-model="formData.laptop"
          required
          placeholder="Enter laptop"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="Desktop : "
        label-for="desktopInput"
      >
        <b-form-input
          id="desktopInput"
          type="text"
          v-model="formData.desktop"
          required
          placeholder="Enter desktop"
        />
      </b-form-group>

      <b-form-checkbox
        id="checkbox-1"
        v-model="formData.office_admin_user"
        name="checkbox-1"
        value= 1
        unchecked-value= 0
      >
        office_admin_user
      </b-form-checkbox>

      <b-form-group
        id="exampleInputGroup"
        label="GID : "
        label-for="gidInput"
      >
        <b-form-input
          id="gidInput"
          type="number"
          v-model="formData.gid"
          required
          placeholder="Enter gid"
        />
      </b-form-group>

      <b-form-checkbox
        id="checkbox-1"
        v-model="formData.office_account_d79"
        name="checkbox-1"
        value= 1
        unchecked-value= 0
      >
        office_account_d79
      </b-form-checkbox>

      <b-form-checkbox
        id="checkbox-1"
        v-model="formData.functional_access"
        name="checkbox-1"
        value= 1
        unchecked-value= 0
      >
        functional_access
      </b-form-checkbox>

      <b-form-checkbox
        id="checkbox-1"
        v-model="formData.technical_access"
        name="checkbox-1"
        value= 1
        unchecked-value= 0
      >
        technical_access
      </b-form-checkbox>

      <b-form-checkbox
        id="checkbox-1"
        v-model="formData.salesforce_access"
        name="checkbox-1"
        value= 1
        unchecked-value= 0
      >
        salesforce_access
      </b-form-checkbox>

      <b-form-checkbox
        id="checkbox-1"
        v-model="formData.gazelle_erp_access"
        name="checkbox-1"
        value= 1
        unchecked-value= 0
      >
        gazelle_erp_access
      </b-form-checkbox>

      <b-form-group
        id="exampleInputGroup"
        label="Other access : "
        label-for="other_accessInput"
      >
        <b-form-input
          id="other_accessInput"
          type="text"
          v-model="formData.other_access"
          required
          placeholder="Enter other access"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="Comment : "
        label-for="commentInput"
      >
        <b-form-input
          id="commentInput"
          type="text"
          v-model="formData.comment"
          required
          placeholder="Enter comment"
        />
      </b-form-group>

      <b-form-group
        id="exampleInputGroup"
        label="Vpn access : "
        label-for="vpn_accessInput"
      >
        <b-form-input
          id="vpn_accessInput"
          type="text"
          v-model="formData.vpn_access"
          required
          placeholder="Enter vpn access"
        />
      </b-form-group>

      <b-form-checkbox
        id="checkbox-1"
        v-model="formData.okta_mfa_access"
        name="checkbox-1"
        value= 1
        unchecked-value= 0
      >
        okta_mfa_access
      </b-form-checkbox>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
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
