import { url } from '../store/modules/axiosUrl'
import Axios from 'axios'
import Vue from 'vue'

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var partner = null;
var contacts = null;
var maturite = null;
var rules_a = null;
var rules_adm = null;
var rules_c = null;
var rules_ca = null;
var rules_cd = null;
var rules_co = null;
var rules_g = null;
var rules_gca = null;
var rules_gi = null;
var rules_ie = null;
var rules_pt = null;
var rules_rf = null;
var rules_rgpd = null;
var rules_rh = null;
var rules_se = null;
var rules_spe = null;
var rules_tdt = null;
var maturite_a = null;
var maturite_adm = null;
var maturite_c = null;
var maturite_ca = null;
var maturite_cd = null;
var maturite_g = null;
var maturite_gca = null;
var maturite_gi = null;
var maturite_ie = null;
var maturite_pt = null;
var maturite_rf = null;
var maturite_rgpd = null;
var maturite_rh = null;
var maturite_se = null;
var maturite_spe = null;


function create() {

  var date = new Date();
  date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

  var docDefinition = {
    info: {
      title: 'Extract_' + partner.company + '_' + date
    },
    content: [
      { text: 'Application Conformite', link: 'https://conformite.engie-homeservices.fr' },
      {text: 'Informations du partenaire ' + partner.company, style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*', '*' ],
          body: [
            [ 'Partenaire', 'N° de contrat', 'Localisation', 'Description', 'Début de la prestation', 'Fin de la prestation' ],
            [ partner.company, partner.contract_number, partner.location, partner.description, partner.start_service, partner.end_service ]
          ]
        }
      },
      {text: 'Contacts du partenaire ' + partner.company, style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*', '*' ],
          body: [
            [ 'Partenaire', 'Nom', 'Prénom', 'Mail', 'Téléphone de la prestation', 'Fonction' ],
            ...contacts.map( val =>
              [ val.company, val.last_name, val.first_name, val.mail, val.phone, val.job]
            )
          ]
        }
      },
      {text: 'Maturite du partenaire ' + partner.company, style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*' ],
          body: [
            [ "Item", 'Maturite', 'Impact' ],
            [ "Général", maturite.maturite, maturite.impact ],
            [ "Actifs", maturite_a[0], maturite_a[1] ],
            [ "Acquisition, développement et maintenance des SI", maturite_adm[0], maturite_adm[1] ],
            [ "Accès aux données et flux réseaux", maturite_c[0], maturite_c[1] ],
            [ "Contrôle d'accès", maturite_ca[0], maturite_ca[1] ],
            [ "Classification des données", maturite_cd[0], maturite_cd[1] ],
            [ "Gouvernance", maturite_g[0], maturite_g[1] ],
            [ "Continuite d'activite", maturite_gca[0], maturite_gca[1] ],
            [ "Gestion des incidents", maturite_gi[0], maturite_gi[1] ],
            [ "Inventaire des équipements on-prem / cloud", maturite_ie[0], maturite_ie[1] ],
            [ "Audits", maturite_pt[0], maturite_pt[1] ],
            [ "Relation avec les fournisseurs", maturite_rf[0], maturite_rf[1] ],
            [ "Analyse des risques rgpd", maturite_rgpd[0], maturite_rgpd[1] ],
            [ "Ressources humaines", maturite_rh[0], maturite_rh[1] ],
            [ "Sécurité liée à l'exploitation", maturite_se[0], maturite_se[1] ],
            [ "Sécurité physique et environnementale", maturite_spe[0], maturite_spe[1] ],
          ]
        }
      }
    ]
  };

  pdfMake.createPdf(docDefinition).download('Extract_' + partner.company + '_' + date);
}

function createBig() {

  var date = new Date();
  date = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

  var docDefinition = {
    info: {
      title: 'Extract_All_' + partner.company + '_' + date
    },
    content: [
      {text: 'Informations du partenaire ' + partner.company, style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*', '*' ],
          body: [
            [ 'Partenaire', 'N° de contrat', 'Localisation', 'Description', 'Début de la prestation', 'Fin de la prestation' ],
            [ partner.company, partner.contract_number, partner.location, partner.description, partner.start_service, partner.end_service ]
          ]
        }
      },
      {text: 'Contacts du partenaire ' + partner.company, style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*', '*' ],
          body: [
            [ 'Partenaire', 'Nom', 'Prénom', 'Mail', 'Téléphone de la prestation', 'Fonction' ],
            ...contacts.map( val =>
              [ val.company, val.last_name, val.first_name, val.mail, val.phone, val.job]
            )
          ]
        }
      },
      {text: 'Maturite du partenaire ' + partner.company, style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*' ],
          body: [
            [ "Item", 'Maturite', 'Impact' ],
            [ "Général", maturite.maturite, maturite.impact ],
            [ "Actifs", maturite_a[0], maturite_a[1] ],
            [ "Acquisition, développement et maintenance des SI", maturite_adm[0], maturite_adm[1] ],
            [ "Accès aux données et flux réseaux", maturite_c[0], maturite_c[1] ],
            [ "Contrôle d'accès", maturite_ca[0], maturite_ca[1] ],
            [ "Classification des données", maturite_cd[0], maturite_cd[1] ],
            [ "Gouvernance", maturite_g[0], maturite_g[1] ],
            [ "Continuite d'activite", maturite_gca[0], maturite_gca[1] ],
            [ "Gestion des incidents", maturite_gi[0], maturite_gi[1] ],
            [ "Inventaire des équipements on-prem / cloud", maturite_ie[0], maturite_ie[1] ],
            [ "Audits", maturite_pt[0], maturite_pt[1] ],
            [ "Relation avec les fournisseurs", maturite_rf[0], maturite_rf[1] ],
            [ "Analyse des risques rgpd", maturite_rgpd[0], maturite_rgpd[1] ],
            [ "Ressources humaines", maturite_rh[0], maturite_rh[1] ],
            [ "Sécurité liée à l'exploitation", maturite_se[0], maturite_se[1] ],
            [ "Sécurité physique et environnementale", maturite_spe[0], maturite_spe[1] ],
          ]
        }
      },
      {text: 'Actifs', style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Les données d'EHS stockées par le partenaire sont chiffrées", rules_a.a_1, rules_a.a_1_comment, rules_a.a_1_engie, rules_a.a_1_impact ],
            [ "Le partenaire assure la réversibilité en fin de contrat ou suite à l’activation de la clause de réversibilité", rules_a.a_2, rules_a.a_2_comment, rules_a.a_2_engie, rules_a.a_2_impact ],
            [ "Il existe une procédure permettant de prouver la restitution ou la destruction des actifs", rules_a.a_3, rules_a.a_3_comment, rules_a.a_3_engie, rules_a.a_3_impact ],
            [ "Le partenaire envoie a EHS une preuve de blanchissement des serveurs si le contrat le prévoit", rules_a.a_4, rules_a.a_4_comment, rules_a.a_4_engie, rules_a.a_4_impact ],
          ]
        }
      },
      {text: 'Acquisition, développement et maintenance des SI', style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Le code source de l'application fait l'objet de revues de sécurité", rules_adm.adm_1, rules_adm.adm_1_comment, rules_adm.adm_1_engie, rules_adm.adm_1_impact ],
            [ "Le partenaire utilise des algorithmes et des protocoles de chiffrement non obsolètes", rules_adm.adm_2, rules_adm.adm_2_comment, rules_adm.adm_2_engie, rules_adm.adm_2_impact ],
            [ "Le partenaire protège les clés de chiffrement", rules_adm.adm_3, rules_adm.adm_3_comment, rules_adm.adm_3_engie, rules_adm.adm_3_impact ],
            [ "L'environnement de développement est sécurisé", rules_adm.adm_4, rules_adm.adm_4_comment, rules_adm.adm_4_engie, rules_adm.adm_4_impact ],
            [ "Le partenaire sécurise les API", rules_adm.adm_5, rules_adm.adm_5_comment, rules_adm.adm_5_engie, rules_adm.adm_5_impact ],
            [ "Les développeurs sont sensibilisés aux bonnes pratiques de développement", rules_adm.adm_6, rules_adm.adm_6_comment, rules_adm.adm_6_engie, rules_adm.adm_6_impact ],
            [ "Les données de production sont utilisées seulement sur des environnements de production", rules_adm.adm_7, rules_adm.adm_7_comment, rules_adm.adm_7_engie, rules_adm.adm_7_impact ],
          ]
        }
      },
      {text: 'Accès aux données et flux réseaux', style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Le partenaire met à disposition d'EHS une architecture sécurisée", rules_c.c_1, rules_c.c_1_comment, rules_c.c_1_engie, rules_c.c_1_impact ],
            [ "Le partenaire assure le chiffrement des données d'EHS en transmission", rules_c.c_2, rules_c.c_2_comment, rules_c.c_2_engie, rules_c.c_2_impact ],
            [ "Présence d'une matrice de flux à jour", rules_c.c_3, rules_c.c_3_comment, rules_c.c_3_engie, rules_c.c_3_impact ],
            [ "Le partenaire met en œuvre des composants de détection, de prévention et de monitoring sur tous les flux entrants", rules_c.c_4, rules_c.c_4_comment, rules_c.c_4_engie, rules_c.c_4_impact ],
            [ "Le partenaire met en œuvre des composants spécifiques de filtrage", rules_c.c_5, rules_c.c_5_comment, rules_c.c_5_engie, rules_c.c_5_impact ],
            [ "Le partenaire sécurise les accès distants par VPN et les flux Wi-Fi", rules_c.c_6, rules_c.c_6_comment, rules_c.c_6_engie, rules_c.c_6_impact ],
            [ "Le partenaire met en place un outil permettant la détection de fuite de données sensibles", rules_c.c_7, rules_c.c_7_comment, rules_c.c_7_engie, rules_c.c_7_impact ],
            [ "Une protection contre les attaques de type déni de service est en œuvre pour protéger le service fourni à EHS", rules_c.c_8, rules_c.c_8_comment, rules_c.c_8_engie, rules_c.c_8_impact ]
          ]
        }
      },
      {text: "Contrôle d'accès", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Le partenaire effectue une revue régulière des accès et des habilitations de ses employés", rules_ca.ca_1, rules_ca.ca_1_comment, rules_ca.ca_1_engie, rules_ca.ca_1_impact ],
            [ "La liste des employés du partenaire qui accèdent aux données d'EHS est maintenue et à jour", rules_ca.ca_2, rules_ca.ca_2_comment, rules_ca.ca_2_engie, rules_ca.ca_2_impact ],
            [ "Le partenaire applique les principes du moindre privilège et de la séparation des tâches pour ses employés", rules_ca.ca_3, rules_ca.ca_3_comment, rules_ca.ca_3_engie, rules_ca.ca_3_impact ],
            [ "Les employés du partenaire possèdent un identifiant unique", rules_ca.ca_4, rules_ca.ca_4_comment, rules_ca.ca_4_engie, rules_ca.ca_4_impact ],
            [ "Le partenaire propose une authentification multi facteurs à minima pour les administrateurs", rules_ca.ca_5, rules_ca.ca_5_comment, rules_ca.ca_5_engie, rules_ca.ca_5_impact ],
            [ "Le partenaire précise les moyens de sécurité supplémentaires dédiées à la gestion de ses comptes administrateurs", rules_ca.ca_6, rules_ca.ca_6_comment, rules_ca.ca_6_engie, rules_ca.ca_6_impact ],
            [ "Le management standard des mots de passe chez le partenaire est bien défini", rules_ca.ca_7, rules_ca.ca_7_comment, rules_ca.ca_7_engie, rules_ca.ca_7_impact ],
            [ "Le partenaire journalise les logs de connexions réussies et échouées", rules_ca.ca_8, rules_ca.ca_8_comment, rules_ca.ca_8_engie, rules_ca.ca_8_impact ],
            [ "Le partenaire met en œuvre des moyens pour protéger la confidentialité des données d'authentification", rules_ca.ca_9, rules_ca.ca_9_comment, rules_ca.ca_9_engie, rules_ca.ca_9_impact ],
            [ "L’ensemble des actions utilisateurs et administrateurs sur les données EHS sont tracées et rendues disponibles", rules_ca.ca_10, rules_ca.ca_10_comment, rules_ca.ca_10_engie, rules_ca.ca_10_impact ]
          ]
        }
      },
      {text: "Classification des données", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "L'inventaire des données EHS traitées par le partenaire est maintenu à jour", rules_cd.cd_1, rules_cd.cd_1_comment, rules_cd.cd_1_engie, rules_cd.cd_1_impact ],
            [ "Le partenaire dispose d'une échelle de classification des données et l'applique sur les documents en rapport avec la prestation", rules_cd.cd_2, rules_cd.cd_2_comment, rules_cd.cd_2_engie, rules_cd.cd_2_impact ],
          ]
        }
      },
      {text: "Connexion", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire' ],
            [ "Accès applicatif (ex : filtrage applicatif)", rules_co.co_1, rules_co.co_1_comment ],
            [ "Accès VPN (Global Protect) / Firewall", rules_co.co_2, rules_co.co_2_comment ],
            [ "Accès ZPA", rules_co.co_3, rules_co.co_3_comment ],
            [ "Accès lien réseau Wan dédié (MPLS)", rules_co.co_4, rules_co.co_4_comment ],
            [ "Accès depuis un réseau externe en SSO ENGIE avec OKTA", rules_co.co_5, rules_co.co_5_comment ],
            [ "Accès depuis un réseau externe en MFA avec OKTA", rules_co.co_6, rules_co.co_6_comment ],
          ]
        }
      },
      {text: "Gouvernance", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Le partenaire dispose d'une politique de sécurité pour la gestion de son système d'information", rules_g.g_1, rules_g.g_1_comment, rules_g.g_1_engie, rules_g.g_1_impact ],
            [ "Les contacts externes sont identifiés : Sécurité / IT / Juridique / Réglementaire", rules_g.g_2, rules_g.g_2_comment, rules_g.g_2_engie, rules_g.g_2_impact ],
            [ "Des comités de sécurité sont organisés régulièrement entre EHS et le partenaire", rules_g.g_3, rules_g.g_3_comment, rules_g.g_3_engie, rules_g.g_3_impact ],
            [ "Le partenaire met à disposition d'EHS tous les documents liées à la cybersécurité", rules_g.g_4, rules_g.g_4_comment, rules_g.g_4_engie, rules_g.g_4_impact ],
            [ "Le partenaire a formalisé un processus de gestion de crise et est en capacité de mettre en place une cellule de crise.", rules_g.g_5, rules_g.g_5_comment, rules_g.g_5_engie, rules_g.g_5_impact ],
          ]
        }
      },
      {text: "Gestion de la continuité d'activité", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Présence d'un PCA [Plan de Continuité d'Activité] maintenu et testé", rules_gca.gca_1, rules_gca.gca_1_comment, rules_gca.gca_1_engie, rules_gca.gca_1_impact ],
            [ "Présence d'un PRA [Plan de Reprise d'Activité] maintenu et testé", rules_gca.gca_2, rules_gca.gca_2_comment, rules_gca.gca_2_engie, rules_gca.gca_2_impact ],
            [ "Présence d'un PSR [Plan de Sauvegarde et Restitution] maintenu et testé", rules_gca.gca_3, rules_gca.gca_3_comment, rules_gca.gca_3_engie, rules_gca.gca_3_impact ],
          ]
        }
      },
      {text: "Gestion des incidents", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Un processus de surveillance et d'alerte en cas d'incident de sécurité est présent", rules_gi.gi_1, rules_gi.gi_1_comment, rules_gi.gi_1_engie, rules_gi.gi_1_impact ],
            [ "Un processus de résolution d'incident est présent", rules_gi.gi_2, rules_gi.gi_2_comment, rules_gi.gi_2_engie, rules_gi.gi_2_impact ],
            [ "Un processus pour alerter EHS rapidement en cas d'incident impactant le service du partenaire est présent", rules_gi.gi_3, rules_gi.gi_3_comment, rules_gi.gi_3_engie, rules_gi.gi_3_impact ],
          ]
        }
      },
      {text: "Inventaire des équipements on-prem / cloud", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Le partenaire maintient un inventaire des actifs utilisés dans le cadre de la prestation", rules_ie.ie_1, rules_ie.ie_1_comment, rules_ie.ie_1_engie, rules_ie.ie_1_impact ],
            [ "Le partenaire maintient un inventaire des instances et/ou applicatifs cloud accédés", rules_ie.ie_2, rules_ie.ie_2_comment, rules_ie.ie_2_engie, rules_ie.ie_2_impact ],
          ]
        }
      },
      {text: "Audits", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "EHS est en mesure de réaliser des audits organisationnels sur le périmètre du service fourni", rules_pt.pt_1, rules_pt.pt_1_comment, rules_pt.pt_1_engie, rules_pt.pt_1_impact ],
            [ "EHS est en mesure de réaliser des audits techniques sur le périmètre du service fourni", rules_pt.pt_2, rules_pt.pt_2_comment, rules_pt.pt_2_engie, rules_pt.pt_2_impact ],
            [ "EHS est en mesure de réaliser des audits de sécurité physique sur le périmètre du service fourni", rules_pt.pt_3, rules_pt.pt_3_comment, rules_pt.pt_3_engie, rules_pt.pt_3_impact ],
            [ "Le partenaire évalue régulièrement le niveau de sécurité de ses périmètres sensibles ou exposés.", rules_pt.pt_4, rules_pt.pt_4_comment, rules_pt.pt_4_engie, rules_pt.pt_4_impact ],
            [ "Le partenaire corrige les éventuelles vulnérabilités qui lui sont imputables selon un planning définie", rules_pt.pt_5, rules_pt.pt_5_comment, rules_pt.pt_5_engie, rules_pt.pt_5_impact ],
          ]
        }
      },
      {text: "Relation avec les fournisseurs", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Le partenaire déclare l’existence de sous-traitants en lien avec la prestation et la nature des relations avec ces derniers sur le plan des responsabilités", rules_rf.rf_1, rules_rf.rf_1_comment, rules_rf.rf_1_engie, rules_rf.rf_1_impact ],
            [ "Le partenaire maitrise la sécurité de ses sous-traitants", rules_rf.rf_2, rules_rf.rf_2_comment, rules_rf.rf_2_engie, rules_rf.rf_2_impact ],
            [ "Les sous-traitants signent une clause de confidentialité", rules_rf.rf_3, rules_rf.rf_3_comment, rules_rf.rf_3_engie, rules_rf.rf_3_impact ],
          ]
        }
      },
      {text: "Analyse des risques RGPD", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "La nature de la prestation et des données justifient l’instruction d’un dossier DPIA", rules_rgpd.rgpd_1, rules_rgpd.rgpd_1_comment, rules_rgpd.rgpd_1_engie, rules_rgpd.rgpd_1_impact ],
            [ "La protection des données personnelles est prise en compte dès le début des projets (Privacy By Design) et avec le plus haut niveau de protection possible (Privacy By Default)", rules_rgpd.rgpd_2, rules_rgpd.rgpd_2_comment, rules_rgpd.rgpd_2_engie, rules_rgpd.rgpd_2_impact ],
          ]
        }
      },
      {text: "Ressources humaines", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Une procédure de sensibilisation et de formation à la sécurité existe, est appliquée et est à jour", rules_rh.rh_1, rules_rh.rh_1_comment, rules_rh.rh_1_engie, rules_rh.rh_1_impact ],
            [ "Les exigences en matière de non divulgation et de protection des informations sont identifiées et documentées [signature d'un NDA]", rules_rh.rh_2, rules_rh.rh_2_comment, rules_rh.rh_2_engie, rules_rh.rh_2_impact ],
          ]
        }
      },
      {text: "Sécurité liée à l'exploitation", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Le partenaire applique une procédure de durcissement des équipements et des OS", rules_se.se_1, rules_se.se_1_comment, rules_se.se_1_engie, rules_se.se_1_impact ],
            [ "Le partenaire applique une politique antivirale sur tous les composants hébergeant le service fourni à EHS", rules_se.se_2, rules_se.se_2_comment, rules_se.se_2_engie, rules_se.se_2_impact ],
            [ "Le partenaire applique une procédure de patch management lui permettant de déployer rapidement les correctifs recommandés", rules_se.se_3, rules_se.se_3_comment, rules_se.se_3_engie, rules_se.se_3_impact ],
            [ "La prestation permet la journalisation et la centralisation des évènements ainsi que la protection de ces logs", rules_se.se_4, rules_se.se_4_comment, rules_se.se_4_engie, rules_se.se_4_impact ],
            [ "EHS est en mesure d'avoir accès aux journaux des logs ayant eu lieu sur son instance applicative", rules_se.se_5, rules_se.se_5_comment, rules_se.se_5_engie, rules_se.se_5_impact ],
            [ "Le partenaire met en place les moyens de sécurité appropriés pour assurer l'intégrité des données", rules_se.se_6, rules_se.se_6_comment, rules_se.se_6_engie, rules_se.se_6_impact ],
          ]
        }
      },
      {text: "Sécurité physique et environnementale", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire', 'Commentaire EHS', 'Impact' ],
            [ "Le partenaire garentie le cloisonnement des environnements, des réseaux et des données.", rules_spe.spe_1, rules_spe.spe_1_comment, rules_spe.spe_1_engie, rules_spe.spe_1_impact ],
            [ "Les données EHS ne sont pas partagées avec d'autres tiers", rules_spe.spe_2, rules_spe.spe_2_comment, rules_spe.spe_2_engie, rules_spe.spe_2_impact ],
            [ "Le partenaire précise la liste de tous les lieux de stockage des données de EHS", rules_spe.spe_3, rules_spe.spe_3_comment, rules_spe.spe_3_engie, rules_spe.spe_3_impact ],
            [ "Les visiteurs sont identifiés et escortés durant leur visite", rules_spe.spe_4, rules_spe.spe_4_comment, rules_spe.spe_4_engie, rules_spe.spe_4_impact ],
            [ "Les lieux d’hébergement des actifs EHS doivent satisfaire les exigences de sécurité physique", rules_spe.spe_5, rules_spe.spe_5_comment, rules_spe.spe_5_engie, rules_spe.spe_5_impact ],
          ]
        }
      },
      {text: "Type de donées traitées", style: 'header'},
      {
        table: {
          headerRows: 1,
          widths: [ '*', '*', '*' ],
          body: [
            [ "Question", 'Réponse partenaire', 'Commentaire partenaire' ],
            [ "Informations Commercialement Sensibles (ICS)", rules_tdt.tdt_1, rules_tdt.tdt_1_comment ],
            [ "Données à Caractère Personnel (DCP) (employés et/ou client EHS)", rules_tdt.tdt_2, rules_tdt.tdt_2_comment ],
            [ "Informations concernant des méthodes, outils de travail et/ou stratégies d'EHS", rules_tdt.tdt_3, rules_tdt.tdt_3_comment ],
            [ "Informations bancaire/financière", rules_tdt.tdt_4, rules_tdt.tdt_4_comment ],
            [ "Données B2C", rules_tdt.tdt_5, rules_tdt.tdt_5_comment ],
          ]
        }
      }
    ]
  };

  pdfMake.createPdf(docDefinition).download('Extract_All_' + partner.company + '_' + date);
}

class ExtractPDF {

  async getJSON(company, type) {
    partner = await this.getPartnerInfo(company);
    contacts = await this.getContactsInfo(company);
    maturite = await this.getMaturiteInfo(company);
    rules_a = await this.getRules_aInfo(company);
    rules_adm = await this.getRules_admInfo(company);
    rules_c = await this.getRules_cInfo(company);
    rules_ca = await this.getRules_caInfo(company);
    rules_cd = await this.getRules_cdInfo(company);
    rules_co = await this.getRules_coInfo(company);
    rules_g = await this.getRules_gInfo(company);
    rules_gca = await this.getRules_gcaInfo(company);
    rules_gi = await this.getRules_giInfo(company);
    rules_ie = await this.getRules_ieInfo(company);
    rules_pt = await this.getRules_ptInfo(company);
    rules_rf = await this.getRules_rfInfo(company);
    rules_rgpd = await this.getRules_rgpdInfo(company);
    rules_rh = await this.getRules_rhInfo(company);
    rules_se = await this.getRules_seInfo(company);
    rules_spe = await this.getRules_speInfo(company);
    rules_tdt = await this.getRules_tdtInfo(company);
    maturite_a = await this.getMaturite_aInfo();
    maturite_adm = await this.getMaturite_admInfo();
    maturite_c = await this.getMaturite_cInfo();
    maturite_ca = await this.getMaturite_caInfo();
    maturite_cd = await this.getMaturite_cdInfo();
    maturite_g = await this.getMaturite_gInfo();
    maturite_gca = await this.getMaturite_gcaInfo();
    maturite_gi = await this.getMaturite_giInfo();
    maturite_ie = await this.getMaturite_ieInfo();
    maturite_pt = await this.getMaturite_ptInfo();
    maturite_rf = await this.getMaturite_rfInfo();
    maturite_rgpd = await this.getMaturite_rgpdInfo();
    maturite_rh = await this.getMaturite_rhInfo();
    maturite_se = await this.getMaturite_seInfo();
    maturite_spe = await this.getMaturite_speInfo();
    if (type == 0) {create()}
    else if (type == 1) {createBig()}
    
  }

  async getPartnerInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var partner = await Axios.get(url + 'api/partners/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return partner.data;
  }

  async getContactsInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var contacts = await Axios.get(url + 'api/contacts/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return contacts.data;
  }

  async getMaturiteInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var maturite = await Axios.get(url + 'api/maturites/', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    maturite = maturite.data;
    for (var i in maturite) {
      var tmp = Object.entries(maturite[i]);
      for (var j in tmp) {
        if (tmp[j][1] == company) {
          maturite = maturite[i]
          return maturite
        }
      }
    }
    return null;
  }

  async getRules_aInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_a = await Axios.get(url + 'api/a_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_a.data[0];
  }

  getMaturite_aInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_a) {
      if (rules_a[i] === "N/A" || rules_a[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_a[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_a[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_a[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_a) {
      if (typeof rules_a[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_a[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_admInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_adm = await Axios.get(url + 'api/adm_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_adm.data[0];
  }

  getMaturite_admInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_adm) {
      if (rules_adm[i] === "N/A" || rules_adm[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_adm[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_adm[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_adm[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_adm) {
      if (typeof rules_adm[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_adm[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_cInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_c = await Axios.get(url + 'api/c_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_c.data[0];
  }

  getMaturite_cInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_c) {
      if (rules_c[i] === "N/A" || rules_c[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_c[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_c[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_c[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_c) {
      if (typeof rules_c[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_c[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_caInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_ca = await Axios.get(url + 'api/ca_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_ca.data[0];
  }

  getMaturite_caInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_ca) {
      if (rules_ca[i] === "N/A" || rules_ca[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_ca[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_ca[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_ca[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_ca) {
      if (typeof rules_ca[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_ca[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_cdInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_cd = await Axios.get(url + 'api/cd_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_cd.data[0];
  }

  getMaturite_cdInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_cd) {
      if (rules_cd[i] === "N/A" || rules_cd[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_cd[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_cd[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_cd[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_cd) {
      if (typeof rules_cd[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_cd[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_coInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_co = await Axios.get(url + 'api/co_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_co.data[0];
  }

  async getRules_gInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_g = await Axios.get(url + 'api/g_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_g.data[0];
  }

  getMaturite_gInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_g) {
      if (rules_g[i] === "N/A" || rules_g[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_g[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_g[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_g[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_g) {
      if (typeof rules_g[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_g[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_gcaInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_gca = await Axios.get(url + 'api/gca_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_gca.data[0];
  }

  getMaturite_gcaInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_gca) {
      if (rules_gca[i] === "N/A" || rules_gca[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_gca[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_gca[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_gca[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_gca) {
      if (typeof rules_gca[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_gca[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_giInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_gi = await Axios.get(url + 'api/gi_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_gi.data[0];
  }

  getMaturite_giInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_gi) {
      if (rules_ca[i] === "N/A" || rules_gi[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_gi[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_gi[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_gi[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_gi) {
      if (typeof rules_gi[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_gi[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_ieInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_ie = await Axios.get(url + 'api/ie_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_ie.data[0];
  }

  getMaturite_ieInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_ca) {
      if (rules_ie[i] === "N/A" || rules_ie[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_ie[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_ie[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_ie[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_ie) {
      if (typeof rules_ie[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_ie[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_ptInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_pt = await Axios.get(url + 'api/pt_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_pt.data[0];
  }

  getMaturite_ptInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_pt) {
      if (rules_pt[i] === "N/A" || rules_pt[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_pt[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_pt[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_pt[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_pt) {
      if (typeof rules_pt[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_pt[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_rfInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_rf = await Axios.get(url + 'api/rf_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_rf.data[0];
  }

  getMaturite_rfInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_rf) {
      if (rules_rf[i] === "N/A" || rules_rf[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_rf[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_rf[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_rf[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_rf) {
      if (typeof rules_rf[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_rf[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_rgpdInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_rgpd = await Axios.get(url + 'api/rgpd_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_rgpd.data[0];
  }

  getMaturite_rgpdInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_rgpd) {
      if (rules_ca[i] === "N/A" || rules_rgpd[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_rgpd[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_rgpd[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_rgpd[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_rgpd) {
      if (typeof rules_rgpd[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_rgpd[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_rhInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_rh = await Axios.get(url + 'api/rh_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_rh.data[0];
  }

  getMaturite_rhInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_rh) {
      if (rules_rh[i] === "N/A" || rules_rh[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_rh[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_rh[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_rh[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_rh) {
      if (typeof rules_rh[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_rh[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_seInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_se = await Axios.get(url + 'api/se_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_se.data[0];
  }

  getMaturite_seInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_se) {
      if (rules_se[i] === "N/A" || rules_se[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_se[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_se[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_se[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_se) {
      if (typeof rules_se[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_se[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_speInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_spe = await Axios.get(url + 'api/spe_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_spe.data[0];
  }

  getMaturite_speInfo(){
    let tab = []
    let score = 0;
    let count = 0;
    for (let i in rules_spe) {
      if (rules_se[i] === "N/A" || rules_spe[i] === "Non") {
        score += 1;
        count++;
      } else if (rules_spe[i] === "Partiel") {
        score += 2;
        count++;
      } else if (rules_spe[i] === "En cours") {
        score += 3;
        count++;
      } else if (rules_spe[i] === "Oui") {
        score += 4;
        count++;
      }
    }
    let res = score / count;
    if(isNaN(res)){
      tab.push(0);
    }
    else {
      tab.push(res);
    }
    let score2 = 0;
    let count2 = 0;
    for (let i in rules_spe) {
      if (typeof rules_spe[i] == "number" && i != "id" && i != "partnerId") {
        score2 += rules_spe[i];
        count2++;      
      }
    }
    res = score2 / count2;
    tab.push(res);
    return tab;
  }

  async getRules_tdtInfo(company){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    var rules_tdt = await Axios.get(url + 'api/tdt_rules/' + company, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return rules_tdt.data[0];
  }

}

export default new ExtractPDF();
