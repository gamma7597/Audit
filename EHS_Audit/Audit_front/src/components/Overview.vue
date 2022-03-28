<template>
  <div>
    <canvas id="radar"></canvas>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Chart from "chart.js";
export default {
  name: 'Overview',
  data() {
    return {
      radarData: {
        type: "radar",
        data: {
          labels: [
            "Gouvernance",
            "Ressource humaine",
            "Audit",
            "Actifs",
            "Contrôle d'accès",
            "Sécurité physique et environnementale",
            "Accès aux données et flux réseaux",
            "Acquisition, développement et maintenance des SI",
            "Sécurité liée à l'exploitation",
            "Relation avec les fournisseurs",
            "Gestion des incidents",
            "Gestion de la continuité d'activité",
            "Inventaire des équipements on-prem/cloud",
            "Analyse des risques RGPD",
            "Classification des données",
          ],
          datasets: [
            {
              label: "Maturité",
              data: [
                this.maturityScore_g,
                this.maturityScore_rh,
                this.maturityScore_pt,
                this.maturityScore_a,
                this.maturityScore_ca,
                this.maturityScore_spe,
                this.maturityScore_c,
                this.maturityScore_adm,
                this.maturityScore_se,
                this.maturityScore_rf,
                this.maturityScore_gi,
                this.maturityScore_gca,
                this.maturityScore_ie,
                this.maturityScore_rgpd,
                this.maturityScore_cd,
              ],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgb(54, 162, 235)",
              borderWidth: 1
            },
            {
              label: "Impact",
              data: [
                this.impactScore_g,
                this.impactScore_rh,
                this.impactScore_pt,
                this.impactScore_a,
                this.impactScore_ca,
                this.impactScore_spe,
                this.impactScore_c,
                this.impactScore_adm,
                this.impactScore_se,
                this.impactScore_rf,
                this.impactScore_gi,
                this.impactScore_gca,
                this.impactScore_ie,
                this.impactScore_rgpd,
                this.impactScore_cd,
              ],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              borderWidth: 1
            }
          ]
        },
        options: {
          scale: {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 4,
              stepSize: 0.5
            }
          }
        }
      },
      maturityScore_a: -1,
      maturityScore_adm: -1,
      maturityScore_c: -1,
      maturityScore_ca: -1,
      maturityScore_cd: -1,
      maturityScore_gca: -1,
      maturityScore_g: -1,
      maturityScore_gi: -1,
      maturityScore_ie: -1,
      maturityScore_pt: -1,
      maturityScore_rf: -1,
      maturityScore_rgpd: -1,
      maturityScore_rh: -1,
      maturityScore_se: -1,
      maturityScore_spe: -1,
      impactScore_a: -1,
      impactScore_adm: -1,
      impactScore_c: -1,
      impactScore_ca: -1,
      impactScore_cd: -1,
      impactScore_gca: -1,
      impactScore_g: -1,
      impactScore_gi: -1,
      impactScore_ie: -1,
      impactScore_pt: -1,
      impactScore_rf: -1,
      impactScore_rgpd: -1,
      impactScore_rh: -1,
      impactScore_se: -1,
      impactScore_spe: -1,
    };
  },
  computed: {
    ...mapState("co_rules", ["co_rules"]),
    ...mapState("a_rules", ["a_rules"]),
    ...mapState("adm_rules", ["adm_rules"]),
    ...mapState("c_rules", ["c_rules"]),
    ...mapState("ca_rules", ["ca_rules"]),
    ...mapState("cd_rules", ["cd_rules"]),
    ...mapState("gca_rules", ["gca_rules"]),
    ...mapState("g_rules", ["g_rules"]),
    ...mapState("gi_rules", ["gi_rules"]),
    ...mapState("ie_rules", ["ie_rules"]),
    ...mapState("pt_rules", ["pt_rules"]),
    ...mapState("rf_rules", ["rf_rules"]),
    ...mapState("rgpd_rules", ["rgpd_rules"]),
    ...mapState("tdt_rules", ["tdt_rules"]),
    ...mapState("rh_rules", ["rh_rules"]),
    ...mapState("se_rules", ["se_rules"]),
    ...mapState("spe_rules", ["spe_rules"]),
    ...mapState("partner", ["partner"]),
  },
  methods: {
    calcMaturityScore() {
      this.calcMaturityScore_g();
      this.calcMaturityScore_rh();
      this.calcMaturityScore_pt();
      this.calcMaturityScore_a();
      this.calcMaturityScore_ca();
      this.calcMaturityScore_spe();
      this.calcMaturityScore_c();
      this.calcMaturityScore_adm();
      this.calcMaturityScore_se();
      this.calcMaturityScore_rf();
      this.calcMaturityScore_gi();
      this.calcMaturityScore_gca();
      this.calcMaturityScore_ie();  
      this.calcMaturityScore_rgpd();
      this.calcMaturityScore_cd(); 
    },
    calcMaturityScore_a() {
      let score = 0;
      let count = 0;
      for (let i in this.a_rules) {
        if (this.a_rules[i] === "N/A" || this.a_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.a_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.a_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.a_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_a = score / count;
      this.radarData.data.datasets[0].data[3] = this.maturityScore_a;
    },
    calcMaturityScore_adm() {
      let score = 0;
      let count = 0;
      for (let i in this.adm_rules) {
        if (this.adm_rules[i] === "N/A" || this.adm_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.adm_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.adm_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.adm_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_adm = score / count;
      this.radarData.data.datasets[0].data[7] = this.maturityScore_adm;
    },
    calcMaturityScore_c() {
      let score = 0;
      let count = 0;
      for (let i in this.c_rules) {
        if (this.c_rules[i] === "N/A" || this.c_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.c_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.c_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.c_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_c = score / count;
      this.radarData.data.datasets[0].data[6] = this.maturityScore_c;
    },
    calcMaturityScore_ca() {
      let score = 0;
      let count = 0;
      for (let i in this.ca_rules) {
        if (this.ca_rules[i] === "N/A" || this.ca_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.ca_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.ca_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.ca_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_ca = score / count;
      this.radarData.data.datasets[0].data[4] = this.maturityScore_ca;
    },
    calcMaturityScore_cd() {
      let score = 0;
      let count = 0;
      for (let i in this.cd_rules) {
        if (this.cd_rules[i] === "N/A" || this.cd_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.cd_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.cd_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.cd_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_cd = score / count;
      this.radarData.data.datasets[0].data[14] = this.maturityScore_cd;
    },
    calcMaturityScore_gca() {
      let score = 0;
      let count = 0;
      for (let i in this.gca_rules) {
        if (this.gca_rules[i] === "N/A" || this.gca_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.gca_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.gca_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.gca_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_gca = score / count;
      this.radarData.data.datasets[0].data[11] = this.maturityScore_gca;
    },
    calcMaturityScore_g() {
      let score = 0;
      let count = 0;
      for (let i in this.g_rules) {
        if (this.g_rules[i] === "N/A" || this.g_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.g_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.g_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.g_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_g = score / count;
      this.radarData.data.datasets[0].data[0] = this.maturityScore_g;
    },
    calcMaturityScore_gi() {
      let score = 0;
      let count = 0;
      for (let i in this.gi_rules) {
        if (this.gi_rules[i] === "N/A" || this.gi_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.gi_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.gi_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.gi_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_gi = score / count;
      this.radarData.data.datasets[0].data[10] = this.maturityScore_gi;
    },
    calcMaturityScore_ie() {
      let score = 0;
      let count = 0;
      for (let i in this.ie_rules) {
        if (this.ie_rules[i] === "N/A" || this.ie_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.ie_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.ie_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.ie_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_ie = score / count;
      this.radarData.data.datasets[0].data[12] = this.maturityScore_ie;
    },
    calcMaturityScore_pt() {
      let score = 0;
      let count = 0;
      for (let i in this.pt_rules) {
        if (this.pt_rules[i] === "N/A" || this.pt_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.pt_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.pt_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.pt_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_pt = score / count;
      this.radarData.data.datasets[0].data[2] = this.maturityScore_pt;
    },
    calcMaturityScore_rf() {
      let score = 0;
      let count = 0;
      for (let i in this.rf_rules) {
        if (this.rf_rules[i] === "N/A" || this.rf_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.rf_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.rf_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.rf_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_rf = score / count;
      this.radarData.data.datasets[0].data[9] = this.maturityScore_rf;
    },
    calcMaturityScore_rgpd() {
      let score = 0;
      let count = 0;
      for (let i in this.rgpd_rules) {
        if (this.rgpd_rules[i] === "N/A" || this.rgpd_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.rgpd_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.rgpd_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.rgpd_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_rgpd = score / count;
      this.radarData.data.datasets[0].data[13] = this.maturityScore_rgpd;
    },
    calcMaturityScore_rh() {
      let score = 0;
      let count = 0;
      for (let i in this.rh_rules) {
        if (this.rh_rules[i] === "N/A" || this.rh_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.rh_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.rh_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.rh_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_rh = score / count;
      this.radarData.data.datasets[0].data[1] = this.maturityScore_rh;
    },
    calcMaturityScore_se() {
      let score = 0;
      let count = 0;
      for (let i in this.se_rules) {
        if (this.se_rules[i] === "N/A" || this.se_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.se_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.se_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.se_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_se = score / count;
      this.radarData.data.datasets[0].data[8] = this.maturityScore_se;
    },
    calcMaturityScore_spe() {
      let score = 0;
      let count = 0;
      for (let i in this.spe_rules) {
        if (this.spe_rules[i] === "N/A" || this.spe_rules[i] === "Non") {
          score += 1;
          count++;
        } else if (this.spe_rules[i] === "Partiel") {
          score += 2;
          count++;
        } else if (this.spe_rules[i] === "En cours") {
          score += 3;
          count++;
        } else if (this.spe_rules[i] === "Oui") {
          score += 4;
          count++;
        }
      }
      this.maturityScore_spe = score / count;
      this.radarData.data.datasets[0].data[5] = this.maturityScore_spe;
    },
    calcImpactScore() {
      this.calcImpactScore_g();
      this.calcImpactScore_rh();
      this.calcImpactScore_pt();
      this.calcImpactScore_a();
      this.calcImpactScore_ca();
      this.calcImpactScore_spe();
      this.calcImpactScore_c();
      this.calcImpactScore_adm();
      this.calcImpactScore_se();
      this.calcImpactScore_rf();
      this.calcImpactScore_gi();
      this.calcImpactScore_gca();
      this.calcImpactScore_ie();  
      this.calcImpactScore_rgpd();
      this.calcImpactScore_cd();  
    },
    calcImpactScore_a() {
      let score = 0;
      let count = 0;
      for (let i in this.a_rules) {
        if (typeof this.a_rules[i] == "number") {
          score += this.a_rules[i];
          count++;
        }
      }
      this.impactScore_a = score / count;
      this.radarData.data.datasets[1].data[3] = this.impactScore_a;
    },
    calcImpactScore_adm() {
      let score = 0;
      let count = 0;
      for (let i in this.adm_rules) {
        if (typeof this.adm_rules[i] == "number") {
          score += this.adm_rules[i];
          count++;
        }
      }
      this.impactScore_adm = score / count;
      this.radarData.data.datasets[1].data[7] = this.impactScore_adm;
    },
    calcImpactScore_c() {
      let score = 0;
      let count = 0;
      for (let i in this.c_rules) {
        if (typeof this.c_rules[i] == "number") {
          score += this.c_rules[i];
          count++;
        }
      }
      this.impactScore_c = score / count;
      this.radarData.data.datasets[1].data[6] = this.impactScore_c;
    },
    calcImpactScore_ca() {
      let score = 0;
      let count = 0;
      for (let i in this.ca_rules) {
        if (typeof this.ca_rules[i] == "number") {
          score += this.ca_rules[i];
          count++;
        }
      }
      this.impactScore_ca = score / count;
      this.radarData.data.datasets[1].data[4] = this.impactScore_ca;
    },
    calcImpactScore_cd() {
      let score = 0;
      let count = 0;
      for (let i in this.cd_rules) {
        if (typeof this.cd_rules[i] == "number") {
          score += this.cd_rules[i];
          count++;
        }
      }
      this.impactScore_cd = score / count;
      this.radarData.data.datasets[1].data[14] = this.impactScore_cd;
    },
    calcImpactScore_gca() {
      let score = 0;
      let count = 0;
      for (let i in this.gca_rules) {
        if (typeof this.gca_rules[i] == "number") {
          score += this.gca_rules[i];
          count++;
        }
      }
      this.impactScore_gca = score / count;
      this.radarData.data.datasets[1].data[11] = this.impactScore_gca;
    },
    calcImpactScore_g() {
      let score = 0;
      let count = 0;
      for (let i in this.g_rules) {
        if (typeof this.g_rules[i] == "number") {
          score += this.g_rules[i];
          count++;
        }
      }
      this.impactScore_g = score / count;
      this.radarData.data.datasets[1].data[0] = this.impactScore_g;
    },
    calcImpactScore_gi() {
      let score = 0;
      let count = 0;
      for (let i in this.gi_rules) {
        if (typeof this.gi_rules[i] == "number") {
          score += this.gi_rules[i];
          count++;
        }
      }
      this.impactScore_gi = score / count;
      this.radarData.data.datasets[1].data[10] = this.impactScore_gi;
    },
    calcImpactScore_ie() {
      let score = 0;
      let count = 0;
      for (let i in this.ie_rules) {
        if (typeof this.ie_rules[i] == "number") {
          score += this.ie_rules[i];
          count++;
        }
      }
      this.impactScore_ie = score / count;
      this.radarData.data.datasets[1].data[12] = this.impactScore_ie;
    },
    calcImpactScore_pt() {
      let score = 0;
      let count = 0;
      for (let i in this.pt_rules) {
        if (typeof this.pt_rules[i] == "number") {
          score += this.pt_rules[i];
          count++;
        }
      }
      this.impactScore_pt = score / count;
      this.radarData.data.datasets[1].data[2] = this.impactScore_pt;
    },
    calcImpactScore_rf() {
      let score = 0;
      let count = 0;
      for (let i in this.rf_rules) {
        if (typeof this.rf_rules[i] == "number") {
          score += this.rf_rules[i];
          count++;
        }
      }
      this.impactScore_rf = score / count;
      this.radarData.data.datasets[1].data[9] = this.impactScore_rf;
    },
    calcImpactScore_rgpd() {
      let score = 0;
      let count = 0;
      for (let i in this.rgpd_rules) {
        if (typeof this.rgpd_rules[i] == "number") {
          score += this.rgpd_rules[i];
          count++;
        }
      }
      this.impactScore_rgpd = score / count;
      this.radarData.data.datasets[1].data[13] = this.impactScore_rgpd;
    },
    calcImpactScore_rh() {
      let score = 0;
      let count = 0;
      for (let i in this.rh_rules) {
        if (typeof this.rh_rules[i] == "number") {
          score += this.rh_rules[i];
          count++;
        }
      }
      this.impactScore_rh = score / count;
      this.radarData.data.datasets[1].data[1] = this.impactScore_rh;
    },
    calcImpactScore_se() {
      let score = 0;
      let count = 0;
      for (let i in this.se_rules) {
        if (typeof this.se_rules[i] == "number") {
          score += this.se_rules[i];
          count++;
        }
      }
      this.impactScore_se = score / count;
      this.radarData.data.datasets[1].data[8] = this.impactScore_se;
    },
    calcImpactScore_spe() {
      let score = 0;
      let count = 0;
      for (let i in this.spe_rules) {
        if (typeof this.spe_rules[i] == "number") {
          score += this.spe_rules[i];
          count++;
        }
      }
      this.impactScore_spe = score / count;
      this.radarData.data.datasets[1].data[5] = this.impactScore_spe;
    },
  },
  mounted() {
    this.calcMaturityScore();
    this.calcImpactScore();
    const ctx = document.getElementById('radar');
    new Chart(ctx, this.radarData);
  },
};
</script>