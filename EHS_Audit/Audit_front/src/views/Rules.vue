<template>
  <div>

    <button class="button_blue" @click="goToPartner(partner.company)">Retour</button>

    <Overview/>

    <ul v-if="!groups.includes('GG-USR-APPCONFORMITE-METIER')" class="cards">
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Connexion</div>
          <p class="card_text">
            Indiquez quel(s) accès avec le SI d'EHS est actuellement utilisé.
          </p>
          <button class="button_blue" @click="goToCo(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Type de données traitées</div>
          <p class="card_text">
            Indiquez quel genre type de données d'EHS est traitées dans le cadre de la prestation.
          </p>
          <button class="button_blue" @click="goToTdt(partner.company)">Voir</button>
        </div>
      </li>
    </ul>
    <ul v-if="!groups.includes('GG-USR-APPCONFORMITE-METIER')" class="cards">
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Gouvernance</div>
          <p class="card_text">
            Il faut s'assurer que le top management comprenne les enjeux liés à la cybersécurité.
          </p>
          <button class="button_blue" @click="goToG(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Audit</div>
          <p class="card_text">
            S'assurer que le partenaire autorise EHS a effectuer des audits sur
            la partie en rapport avec la prestation.
          </p>
          <button class="button_blue" @click="goToPt(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Ressource Humaine</div>
          <p class="card_text">
            Il faut s'assurer que les entreprises et leurs employés comprennent les risques, 
            leurs responsabilités et s'engagent sur leur rôle en matière de cybersécurité.
          </p>
          <button class="button_blue" @click="goToRh(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Gestion de la continuité d'activité</div>
          <p class="card_text">
            S'assurer qu'il existe des mesures mises en place pour assurer la
            continuer d'activité et de garder les données disponibles.
          </p>
          <button class="button_blue" @click="goToGca(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Gestion des incidents</div>
          <p class="card_text">
            S'assurer de la présence d'un processus de gestion des incidents de
            sécurité et d'alerte du RSSI.
          </p>
          <button class="button_blue" @click="goToGi(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Analyse des risques RGPD</div>
          <p class="card_text">
            Déterminer si la nature des données, leur niveau de confidentialité
            et de sensibilité justifie une étude d'impact GDPR
          </p>
          <button class="button_blue" @click="goToRgpd(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Classification des données</div>
          <p class="card_text">
            Identifier les actifs et définir le niveau de protection requis
          </p>
          <button class="button_blue" @click="goToCd(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Relation avec les fournisseurs</div>
          <p class="card_text">
            S'assurer de la sécurité de l'information dans les relations
            avec les tiers ainsi que de la présence d'une politique de sécurité.
          </p>
          <button class="button_blue" @click="goToRf(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Contôle d'accès</div>
          <p class="card_text">
            S'assurer que les process, les moyens techniques et l'organisation
            permettent une gestion rigoureuse des identités et des droits sur
            les employés du partenaire
          </p>
          <button class="button_blue" @click="goToCa(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Sécurité physique et environnementale</div>
          <p class="card_text">
            S'assurer de la sécurité physique des bâtiments envers les personne
            et les actifs.
          </p>
          <button class="button_blue" @click="goToSpe(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Actifs</div>
          <p class="card_text">
            S'assurer de la sécurité de l'ensemble des actifs immatériels
            (informations, organisations, procédures, services) et matériels
            (documents papiers ou électroniques, hardware, software).
          </p>
          <button class="button_blue" @click="goToA(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Inventaire des équipements on-prem/cloud</div>
          <p class="card_text">
            S'assurer que les équipements on-prem/cloud utilisés dans le cadre
            de la prestation soient listés dans un inventaire
          </p>
          <button class="button_blue" @click="goToIe(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Sécurité liée à l'exploitation</div>
          <p class="card_text">
            S'assurer de la sécurité lors de l'exploitation de la solution
          </p>
          <button class="button_blue" @click="goToSe(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Accès aux données et flux réseaux</div>
          <p class="card_text">
            S'assurer que les flux et transferts de données sont sécurisés et
            que les accès aux réseaux et au données sont protégés
          </p>
          <button class="button_blue" @click="goToC(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Acquisition, développement et maintenance des SI</div>
          <p class="card_text">
            S'assurer de la sécurité du SI et de la protection des documents de
            développement (code source, données de test, …).
          </p>
          <button class="button_blue" @click="goToAdm(partner.company)">Voir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Overview from '../components/Overview.vue'
export default {
  components: {
    Overview
  },
  computed: {
    ...mapState("user", ["groups"]),
    ...mapState("co_rules", ["co_rules", "co_longueur"]),
    ...mapState("a_rules", ["a_rules", "a_longueur"]),
    ...mapState("adm_rules", ["adm_rules", "adm_longueur"]),
    ...mapState("c_rules", ["c_rules", "c_longueur"]),
    ...mapState("ca_rules", ["ca_rules", "ca_longueur"]),
    ...mapState("cd_rules", ["cd_rules", "cd_longueur"]),
    ...mapState("gca_rules", ["gca_rules", "gca_longueur"]),
    ...mapState("g_rules", ["g_rules", "g_longueur"]),
    ...mapState("gi_rules", ["gi_rules", "gi_longueur"]),
    ...mapState("ie_rules", ["ie_rules", "ie_longueur"]),
    ...mapState("pt_rules", ["pt_rules", "pt_longueur"]),
    ...mapState("rf_rules", ["rf_rules", "rf_longueur"]),
    ...mapState("rgpd_rules", ["rgpd_rules", "rgpd_longueur"]),
    ...mapState("tdt_rules", ["tdt_rules", "tdt_longueur"]),
    ...mapState("rh_rules", ["rh_rules", "rh_longueur"]),
    ...mapState("se_rules", ["se_rules", "se_longueur"]),
    ...mapState("spe_rules", ["spe_rules", "spe_longueur"]),
    ...mapState("partner", ["partner"]),
  },
  methods: {
    ...mapActions("co_rules", ["add_co_rules"]),
    ...mapActions("a_rules", ["add_a_rules"]),
    ...mapActions("adm_rules", ["add_adm_rules"]),
    ...mapActions("c_rules", ["add_c_rules"]),
    ...mapActions("ca_rules", ["add_ca_rules"]),
    ...mapActions("gca_rules", ["add_gca_rules"]),
    ...mapActions("cd_rules", ["add_cd_rules"]),
    ...mapActions("g_rules", ["add_g_rules"]),
    ...mapActions("gi_rules", ["add_gi_rules"]),
    ...mapActions("ie_rules", ["add_ie_rules"]),
    ...mapActions("pt_rules", ["add_pt_rules"]),
    ...mapActions("rf_rules", ["add_rf_rules"]),
    ...mapActions("rgpd_rules", ["add_rgpd_rules"]),
    ...mapActions("tdt_rules", ["add_tdt_rules"]),
    ...mapActions("rh_rules", ["add_rh_rules"]),
    ...mapActions("se_rules", ["add_se_rules"]),
    ...mapActions("spe_rules", ["add_spe_rules"]),
    addRules() {
      const payload = {
        company: this.partner.company,
        data: {
          partnerId: this.partner.id,
        },
      };
      if (this.co_longueur === 0) {
        this.add_co_rules(payload);
      }
      if (this.a_longueur === 0) {
        this.add_a_rules(payload);
      }
      if (this.adm_longueur === 0) {
        this.add_adm_rules(payload);
      }
      if (this.c_longueur === 0) {
        this.add_c_rules(payload);
      }
      if (this.ca_longueur === 0) {
        this.add_ca_rules(payload);
      }
      if (this.gca_longueur === 0) {
        this.add_gca_rules(payload);
      }
      if (this.cd_longueur === 0) {
        this.add_cd_rules(payload);
      }
      if (this.g_longueur === 0) {
        this.add_g_rules(payload);
      }
      if (this.gi_longueur === 0) {
        this.add_gi_rules(payload);
      }
      if (this.ie_longueur === 0) {
        this.add_ie_rules(payload);
      }
      if (this.pt_longueur === 0) {
        this.add_pt_rules(payload);
      }
      if (this.rf_longueur === 0) {
        this.add_rf_rules(payload);
      }
      if (this.rgpd_longueur === 0) {
        this.add_rgpd_rules(payload);
      }
      if (this.tdt_longueur === 0) {
        this.add_tdt_rules(payload);
      }
      if (this.rh_longueur === 0) {
        this.add_rh_rules(payload);
      }
      if (this.se_longueur === 0) {
        this.add_se_rules(payload);
      }
      if (this.spe_longueur === 0) {
        this.add_spe_rules(payload);
      }
    },
    goToPartner(partner){
      this.$router.push("/partner/" + partner)
    },
    goToCo(company){
      this.$router.push("/rules/" + company + "/co_rules")
    },
    goToTdt(company){
      this.$router.push("/rules/" + company + "/tdt_rules")
    },
    goToG(company){
      this.$router.push("/rules/" + company + "/g_rules")
    },
    goToRh(company){
      this.$router.push("/rules/" + company + "/rh_rules")
    },
    goToPt(company){
      this.$router.push("/rules/" + company + "/pt_rules")
    },
    goToA(company){
      this.$router.push("/rules/" + company + "/a_rules")
    },
    goToCa(company){
      this.$router.push("/rules/" + company + "/ca_rules")
    },
    goToSpe(company){
      this.$router.push("/rules/" + company + "/spe_rules")
    },
    goToC(company){
      this.$router.push("/rules/" + company + "/c_rules")
    },
    goToAdm(company){
      this.$router.push("/rules/" + company + "/adm_rules")
    },
    goToSe(company){
      this.$router.push("/rules/" + company + "/se_rules")
    },
    goToRf(company){
      this.$router.push("/rules/" + company + "/rf_rules")
    },
    goToGi(company){
      this.$router.push("/rules/" + company + "/gi_rules")
    },
    goToGca(company){
      this.$router.push("/rules/" + company + "/gca_rules")
    },
    goToIe(company){
      this.$router.push("/rules/" + company + "/ie_rules")
    },
    goToRgpd(company){
      this.$router.push("/rules/" + company + "/rgpd_rules")
    },
    goToCd(company){
      this.$router.push("/rules/" + company + "/cd_rules")
    },
  },
  mounted() {
    this.addRules()
  },
};
</script>
