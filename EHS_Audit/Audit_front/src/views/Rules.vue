<template>
  <div>

    <button class="button_blue" @click="goToPartner(partner.company)">Retour</button>
    <Overview />

    <ul v-if="!groups.includes('OKTA-CONFORMITE-PROD-METIER')" class="cards">
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
            Indiquez quel types de données d'EHS sont traitées dans le cadre de la prestation.
          </p>
          <button class="button_blue" @click="goToTdt(partner.company)">Voir</button>
        </div>
      </li>
    </ul>
    <ul v-if="!groups.includes('OKTA-CONFORMITE-PROD-METIER')" class="cards">
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Gouvernance</div>
          <p class="card_text">
            Permet de s'assurer que le top management comprend les enjeux liés à la cybersécurité.
          </p>
          <button class="button_blue" @click="goToG(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Audit</div>
          <p class="card_text">
            Permet de s'assurer que le partenaire autorise EHS a effectuer des audits sur la partie en rapport avec la prestation.
          </p>
          <button class="button_blue" @click="goToPt(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Ressource Humaine</div>
          <p class="card_text">
            Permet de s'assurer que les entreprises et leurs employés comprennent les risques, leurs responsabilités et s'engagent sur leur rôle en matière de cybersécurité.
          </p>
          <button class="button_blue" @click="goToRh(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Gestion de la continuité d'activité</div>
          <p class="card_text">
            Permet de s'assurer qu'il existe des mesures mises en place pour assurer la continuité d'activité tout en gardant les données disponibles.
          </p>
          <button class="button_blue" @click="goToGca(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Gestion des incidents</div>
          <p class="card_text">
            Permet de s'assurer de la présence d'un processus de gestion des incidents de cybersécurité et d'alerte du RSSI.
          </p>
          <button class="button_blue" @click="goToGi(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Analyse des risques RGPD</div>
          <p class="card_text">
            Permet de déterminer si la nature des données, leur niveau de confidentialité et de sensibilité justifie une étude d'impact RGPD.
          </p>
          <button class="button_blue" @click="goToRgpd(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Classification des données</div>
          <p class="card_text">
            Permet d'identifier les actifs et de définir le niveau de protection requis.
          </p>
          <button class="button_blue" @click="goToCd(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Relation avec les fournisseurs</div>
          <p class="card_text">
            Permet de s'assurer de la sécurité de l'information dans les relations avec les tiers.
          </p>
          <button class="button_blue" @click="goToRf(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Contôle d'accès</div>
          <p class="card_text">
            Permet de s'assurer que la gestion des identités et des droits des employés du partenaire sont correctement gérés.
          </p>
          <button class="button_blue" @click="goToCa(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Sécurité physique et environnementale</div>
          <p class="card_text">
            Permet de s'assurer que la sécurité des bâtiments, des actifs et des personnes est correctement mise en place.
          </p>
          <button class="button_blue" @click="goToSpe(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Actifs</div>
          <p class="card_text">
            Permet de s'assurer de la sécurité des actifs immatériels (informations, procédures, ...) et matériels (hardware, software, ...).
          </p>
          <button class="button_blue" @click="goToA(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Inventaire des équipements on-prem/cloud</div>
          <p class="card_text">
            Permet de s'assurer que les équipements on-prem/cloud utilisés dans le cadre de la prestation sont inventoriés.
          </p>
          <button class="button_blue" @click="goToIe(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Sécurité liée à l'exploitation</div>
          <p class="card_text">
            Permet de s'assurer de la sécurité lors de l'exploitation de la solution.
          </p>
          <button class="button_blue" @click="goToSe(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Accès aux données et flux réseaux</div>
          <p class="card_text">
            Permet de s'assurer que les flux et les transferts de données sont sécurisés et
            que les accès aux réseaux et au données sont protégés
          </p>
          <button class="button_blue" @click="goToC(partner.company)">Voir</button>
        </div>
      </li>
      <li class="card_item">
        <div class="card_content">
          <div class="card_title">Acquisition, développement et maintenance des SI</div>
          <p class="card_text">
            Permet de s'assurer que la sécurité du SI et la protection des documents de
            développement (code source, données de test, …) sont protégés.
          </p>
          <button class="button_blue" @click="goToAdm(partner.company)">Voir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Overview from '../components/Overview.vue'
export default {
  components: {
    Overview
  },
  computed: {
    ...mapState("user", ["groups"]),
    ...mapState("partner", ["partner"]),
  },
  methods: {
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
};
</script>
