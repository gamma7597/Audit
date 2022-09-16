# Views

Dans cette partie je vais expliquer quelques vues, sans rentrer dans les détails.
Pour une bonne compréhension, il faudra lire le code petit à petit.
Rien de compliqué, mais il faut prendre le temps de comprendre les interactions entre les vues, les componants, les appels API avec VueX et le back.

La gestion des vue est divisé en plusieurs fichiers, par exemple :

- PartnerList.vue où se trouve la liste de l'ensemble des partenaires. C'est ici qu'un admin peut ajouter un partenaire.
- Partner.vue et Contact.vue où se trouve les infos d'un partenaire et de ses contacts. On peut modifier et supprimer un partenaire. Mais aussi Ajouter, lister et supprimer ses contacts.

## PartnerList.vue

    <template>
        <div>
            <h3 id="title">Les partenaires Engie Home Services</h3>
            <canvas id="bar-chart"></canvas>
            <AddPartner v-if="!groups.includes('GG-USR-APPCONFORMITE-METIER')" />
            <PartnerTable />
        </div>
    </template>

Cette page affiche dans un canvas le graphique permettant de connaître la maturité et le score d'impact de chaque partenaire.
Les informations sont récupérés dans la fonction mounted() avec l'aide de la dépendance chartJS.

Puis on importe deux composants qui sont AddPartner.vue et PartnerTable.vue.

### AddPartner.vue

Comme son nom l'indique, cette page permet d'ajouter des partenaires.
C'est tout simplement un formulaire qui va recueillir les informations du partenaire dans un formdata.
Ensuite on va vérifier ces informations puis envoyer ça au store qui effectuera la requête HTTP à la BDD avec addPartner(payload) : 

    const { company, contract_number, location, description, start_service, end_service } = this.formData

    const payload = {
      company,
      contract_number,
      location,
      description,
      start_service,
      end_service
    }
    await this.addPartner(payload)

La fonction permet en parallèle après la création d'ajouter l'ensemble des items cybersécurité pour ce partenaire.
Une table sera créé dans la BDD pour chaque item. Ces tables sont vides pour le moment.

    addRules(){
      const payload = {
        company: this.$store.state.partner.partner.company,
        partnerId: this.$store.state.partner.partner.id,
      };
      this.add_co_rules(payload);
      this.add_a_rules(payload);
      this.add_adm_rules(payload);
      this.add_c_rules(payload);
      this.add_ca_rules(payload);
      this.add_gca_rules(payload);
      this.add_cd_rules(payload);
      this.add_g_rules(payload);
      this.add_gi_rules(payload);
      this.add_ie_rules(payload);
      this.add_pt_rules(payload);
      this.add_rf_rules(payload);
      this.add_rgpd_rules(payload);
      this.add_tdt_rules(payload);
      this.add_rh_rules(payload);
      this.add_se_rules(payload);
      this.add_spe_rules(payload);
      this.addMaturites(payload);
    }

### PartnerTable.vue

Cette page est un tableau récapitulant les informations d'un partenaire.

Rien de particulier à signaler à part que à la création, on récupère les infos du partenaires depuis le store pour les afficher dans le tableau :

    created() {
      this.$store.dispatch("partner/getPartners")
    }

## Partner.vue

Cette page est la page principale d'un partenaire. On y trouve un accès vers les règles de sécurité, vers les fichiers mais aussi la possibilité de modifier et supprimer le partanaire. Enfin on peut ajouter, modifier et supprimer ses contacts.

