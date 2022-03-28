<template>
  <div>
    <b-button :to="'/partner/'+partner.company" variant="success">Retour</b-button>
    <Overview/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card title="Connexion" style="max-width: 20rem" class="mb-2">
            <b-card-text>
              Indiquez quel(s) accès avec le SI d'EHS est actuellement utilisé
            </b-card-text>
            <b-button
              :to="`/rules/` + partner.company + `/co_rules`"
              variant="primary"
              >Voir</b-button
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Type de données traitées"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Indiquez quel genre type de données d'EHS est traitées dans le cadre
              de la prestation.
            </b-card-text>
            <b-button
              :to="`/rules/` + partner.company + `/tdt_rules`"
              variant="primary"
              >Voir</b-button
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Gouvernance" style="max-width: 20rem" class="mb-2">
            <b-card-text>
              Il faut s'assurer que le top management comprenne les enjeux liés à
              la cybersécurité.
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/g_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Ressource Humaine" style="max-width: 20rem" class="mb-2">
            <b-card-text>
              Il faut s'assurer que les entreprises et leurs employés comprennent
              les risques, leurs responsabilités et s'engagent sur leur rôle en
              matière de cybersécurité.
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/rh_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card title="Audit" style="max-width: 20rem" class="mb-2">
            <b-card-text>
              S'assurer que le partenaire autorise EHS a effectuer des audits sur
              la partie en rapport avec la prestation.
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/pt_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Actifs" style="max-width: 20rem" class="mb-2">
            <b-card-text>
              S'assurer de la sécurité de l'ensemble des actifs immatériels
              (informations, organisations, procédures, services) et matériels
              (documents papiers ou électroniques, hardware, software).
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/a_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Contôle d'accès" style="max-width: 20rem" class="mb-2">
            <b-card-text>
              S'assurer que les process, les moyens techniques et l'organisation
              permettent une gestion rigoureuse des identités et des droits sur
              les employés du partenaire
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/ca_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Sécurité physique et environnementale"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              S'assurer de la sécurité physique des bâtiments envers les personne
              et les actifs.
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/spe_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card
            title="Accès aux données et flux réseaux"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              S'assurer que les flux et transferts de données sont sécurisés et
              que les accès aux réseaux et au données sont protégés
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/c_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Acquisition, développement et maintenance des SI"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              S'assurer de la sécurité du SI et de la protection des documents de
              développement (code source, données de test, …).
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/adm_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Sécurité liée à l'exploitation"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              S'assurer de la sécurité lors de l'exploitation de la solution
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/se_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Gestion des incidents"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              S'assurer de la sécurité de l'information dans les relations avec les tiers ainsi que de la présence d'une politique de sécurité.
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/rf_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Gestion des incidents"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              S'assurer de la présence d'un processus de gestion des incidents de
              sécurité et d'alerte du RSSI.
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/gi_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card
            title="Gestion de la continuité d'activité"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              S'assurer qu'il existe des mesures mises en place pour assurer la
              continuer d'activité et de garder les données disponibles.
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/gca_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Inventaire des équipements on-prem/cloud"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              S'assurer que les équipements on-prem/cloud utilisés dans le cadre
              de la prestation soient listés dans un inventaire
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/ie_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Analyse des risques RGPD"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Déterminer si la nature des données, leur niveau de confidentialité
              et de sensibilité justifie une étude d'impact GDPR
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/rgpd_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Classification des données"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Identifier les actifs et définir le niveau de protection requis
            </b-card-text>
            <b-button :to="`/rules/`+partner.company+`/cd_rules`" variant="primary">Voir</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
    }
  },
  mounted() {
    this.addRules()
  },
};
</script>
