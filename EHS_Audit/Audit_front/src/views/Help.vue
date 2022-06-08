<template>
  <div>
    <button class="button_blue" @click="showAppInput()">L'application conformité</button>
    <button class="button_blue" @click="showPartnerContactInput()">Partenaire et Contacts</button>
    <button class="button_blue" @click="showFileInput()">Fichiers</button>
    <button class="button_blue" @click="showRuleInput()">Règles de sécurité</button>
    <div class="help">
      <div id="app" v-if="showApp">
        <h4>Objectifs</h4>
        <p>
          Ce site web à destination de l'ensemble des partenaires d'ENGIE Home Services à pour but de simplifier <br/>
          le suivi de leur maturité cybersécurité.
          Plus précisément, il s'agit d'identifier les contacts principaux à contacter en cas de crise, <br/>
          de fournir les documents essentiel à la prestation en lien avec la cybersécurité.
          Mais surtout de répondre à des questions sur différents items liées à la cybersécurité permettant <br/>
          à l'instant T de définir la maturité cybersécurité du partenaire et d'identifier les risques <br/>
          et les impacts qui peuvent en découler.
          Cette demande de suivi s'inscrit dans une démarche de collaboration entre ENGIE Home Services <br/>
          et ses partenaires.
        </p>
        <h4>Attendus</h4>
        <p>
          En tant que partenaire d'ENGIE Home Services, nous attandons de cotre part que vous teniez à jour les <br/>
          informations contenu sur ce site.
          Il y a trois grandes catégorie, tout d'abord les données liés à vous et à vos contacts.
          Puis fichiers importants concernant votre prestation auprès d'ENGIE Home Services.
          Enfin les règles de sécurité.
        </p>
      </div>
      <div id="partnerContact" v-if="showPartnerContact">
        <h4>Objectifs</h4>
        <p>
          L'objectif de cette partie est dans un premier temps, de tenir à jour les informations <br/>
          contractuel avec le partenaire.
          Dans une second temps d'identifier les contacts techniques principaux en cas d'attaque cyber chez le partenaire <br/>
          ou chez ENGIE Home Services.
        </p>
        <h4>Attendus</h4>
        <p>
          Pour la partie partenaire, il s'agit de définir :
          <ul>
            <li>Le numéro du contrat après signature</li>
            <li>La localisation géographique du partenaire</li>
            <li>Une description succinte de la prestation qu'exerce le partenaire pour ENGIE Home Services</li>
            <li>La date de début de la prestation.</li>
            <li>La date de fin de la prestation.</li>
          </ul>
          Pour les contacts, il faut définir un ou deux contacts avec :
          <ul>
            <li>Le nom du contact</li>
            <li>Le prenom du contact</li>
            <li>Le telephone portable du contact en cas d'urgence</li>
            <li>L'adresse mail professionelle du contact</li>
            <li>La fonction du contact au sein de son entreprise (RSSI, DPO, ...)</li>
          </ul>
        </p>
      </div>
      <div id="file" v-if="showFile">
        <h4>Objectifs</h4>
        <p>
          Dans cette partie de l'application, le but est d'ajouter les documents ou les images <br/>
          ayant un aspect cybersécurité.
        </p>
        <h4>Attendus</h4>
        <p>
          Les documents essentiels à ajouter :
          <ul>
            <li>Le contrat entre le partenaire et ENGIE Home Services</li>
            <li>Un schéma de l'infrastructure du partenaire lié à la prestation</li>
            <li>Un schéma des flux entre le SI du partenaire et celuis d'ENGIE Home Services</li>
            <li>La PSSI du partenaire</li>
            <li>Tout autre document vous semblant interressant en terme de cybersécurité</li>
          </ul>
          De notre côté, nous mettrons à votre disposition les rapports de scans et de tests de sécurité.
        </p>
      </div>
      <div id="rule" v-if="showRule">
        <button @click="showCoInput()">Connexion</button>
        <button @click="showTdtInput()">Type de données traitées</button>
        <button @click="showGInput()">Gouvernance</button>
        <button @click="showPtInput()">Audit</button>
        <button @click="showRhInput()">Ressources humaines</button>
        <button @click="showGcaInput()">Gestion de la continuité d'activité</button>
        <button @click="showGiInput()">Gestion des incidents</button>
        <button @click="showRgpdInput()">Analyse des risques RGPD</button>
        <button @click="showCdInput()">Classification des données</button>
        <button @click="showRfInput()">Relation avec les fournisseurs</button>
        <button @click="showCaInput()">Contrôle d'accès</button>
        <button @click="showSpeInput()">Sécurité physique et environnementale</button>
        <button @click="showAInput()">Actifs</button>
        <button @click="showIeInput()">Inventaire des équipements on-prem/cloud</button>
        <button @click="showSeInput()">Sécurité liée à l'exploitation</button>
        <button @click="showCInput()">Accès aux données et flux réseaux</button>
        <button @click="showAdmInput()">Acquisition, développement et maintenance des SI</button>
        <div id="co_rule" v-if="showCo">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de visualiser comment le partenaire accède au SI de ENGIE Home Services.
          </p>
          <h5>Attendus</h5>
          <p>
            Nous attendons que vous répondiez soit oui soit non aux différentes propositions. <br/>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="tdt_rule" v-if="showTdt">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de visualiser les types de données appartenant à ENGIE Home Services que le partenaire traite lors de sa prestation.<br/>
            On parle de traitement lorsque le partenaire : collecte / enregistre / organise / conserve / communique / adapte / modifie / extrait / consulte / utilise
          </p>
          <h5>Attendus</h5>
          <p>
            Nous attendons que vous répondiez soit oui soit non aux différentes propositions.<br/>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.<br/>
            Merci d'indiquer la durée de stockage des données si elle a lieu.
          </p>
        </div>
        <div id="g_rule" v-if="showG">
          <h5>Objectifs</h5>
          <p>
            Cet item permet d'avoir une visibilité sur l'organisation mise en place par le partenaire dans le cadre de ses engagements sur la sécurité des SI.<br/>
            Le partenaire qui complète cet item, doit être en capacité de démontrer par des éléments concrets ce qu'il a renseigné.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Vous pouvez ajouter le document dans la partie fichier de l'application Conformité.<br/>
            Proposition 2 : <br/>
            Merci de préciser les contacts, au moins le mail.<br/>
            Proposition 3 : <br/>
            Ces comités doivent se dérouler au moins deux fois par an.<br/>
            Ils doivent aborder les sujets suivant : 
            <ul>
              <li>Revue des indicateurs de Sécurité et des reportings</li>
              <li>Revue des traitements des incidents et des évènements </li>
              <li>Suivi de l’avancement du plan d’actions correctives </li>
              <li>Reporting des audits de sécurité et suivi des plans d’action</li>
            </ul>
            Vous pouvez ajouter les comptes-rendu dans la partie fichier de l'application Conformité.<br/>
            Proposition 4 : <br/>
            Les documents peuvent être de façon non exhaustive : certification, rapport d’audit, déclaration d’applicabilité<br/>
            Indiquez le nom des certification et le périmètre si possible.<br/>
            Proposition 5 : <br/>
            Merci de préciser les canaux de communication mis en place avec EHS.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="pt_rule" v-if="showPt">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de savoir si le partenaire autorise EHS à effectuer des audits (organisationnel, cybersécurité, physique) sur le scope en rapport avec la prestation.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Proposition 2 : <br/>
            Les audits techniques peuvent être : test d'intrusion, scan de vulnérabilité, audit de code, audit d'infrastructure.<br/>
            Proposition 3 : <br/>
            Proposition 4 : <br/>
            Nous vous conseillons d'effectuer des tests d'intrusions et/ou des scans de vulnérabilités et de corriger les vulnérabilités découvertes.<br/>
            Proposition 5 : <br/>
            Le planning sera définie avec l'aide d'EHS en fonction de la criticité de chaque vulnérabilité.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="rh_rule" v-if="showRh">
          <h5>Objectifs</h5>
          <p>
            Cet item permet d'avoir une visibilité sur l'organisation mise en place par le partenaire dans le cadre de ses engagements sur la sécurité des SI.<br/>
            Le partenaire qui complète cet item, doit être en capacité de démontrer par des éléments concrets ce qu'il a renseigné.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Merci de préciser le type de sensibilisation que vous effectuer (campagnes de phishing, e-learning, ...).<br/>
            Proposition 2 : <br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="gca_rule" v-if="showGca">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de s'assurer que le partenaire dispose des différents plan nécessaire à la continuité d'activité. On parle de procédure de sauvegarde des données, de redondance. Le but étant de savoir si en terme DICP, les données sont protégés.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Vous pouvez ajouter le PCA dans la partie fichier de l'application Conformité.<br/>
            Indiquez à minima si une solution de redondance des données est implémentée.
            Proposition 2 : <br/>
            Vous pouvez ajouter le PRA dans la partie fichier de l'application Conformité.<br/>
            Proposition 3 : <br/>
            Vous pouvez ajouter le PSR dans la partie fichier de l'application Conformité.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="gi_rule" v-if="showGi">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de s'assurer que le partenaire à pris ses disposition en cas d'incident, et que son équipe est aussi au courant des protocoles à mettre en place immédiatement (alerter le RSSI, réduire puis stopper l'incident en évitant qu'il se propage, ...).
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Proposition 2 : <br/>
            Proposition 3 : <br/>
            Ce processus doit être connu par l'ensemble des employés du partenaire. Merci de préciser les délais de notification.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="rgpd_rule" v-if="showRgpd">
          <h5>Objectifs</h5>
          <p>
            Le partenaire indique ici, si dans le cadre de sa prestation et du traitement des données à caractère personnel, il à mené une étude d'impact formalisée.<br/>
            Note : la méthode et /ou les outils utilisés dans le cadre de cette étude d'impact est le choix du partenaire et n'a pas de caractère contraignant.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Indiquez si une étude d'impact a été menée compte tenu de la nature de la prestation.<br/> 
            Proposition 2 : <br/>
            Le but ici est de vérifier que le partenaire prend le moins de risque vis-à-vis du non respect des exigences RGPD.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="cd_rule" v-if="showCd">
          <h5>Objectifs</h5>
          <p>
            Cet item permet d'avoir une visibilité sur le niveau de criticité des données que traite (au sens large) le partenaire.<br/>
            Dans cette rubrique les assets sont des données "digitales" (numériques). 
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Cela permet de s'assurer qu'en cas de demande, un document historisé est facilement retrouvable.<br/>
            Proposition 2 : <br/>
            Merci de préciser l'échelle de classification que vous utilisez.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="rf_rule" v-if="showRf">
          <h5>Objectifs</h5>
          <p>
            Cet item permet s'assurer de la sécurité de l'information dans les relations avec les tiers ainsi que de la présence d'une politique de sécurité.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Proposition 2 :<br/>
            Présence d'un PSSI, PAS, ...<br/>
            Proposition 3 :<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="ca_rule" v-if="showCa">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de s'assurer que le partenaire à mis en place des procédures et une organisation des accès logique suffisante. On peut citer à titre d'exemples, la gestion des comptes utilisateur ou bien des mots de passe.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Cette procédure doit avoir lieu au moins deux fois par an. Merci de préciser la procédure de revue.<br/>
            Proposition 2 : <br/>
            Proposition 3 : <br/>
            Proposition 4 : <br/>
            Dans le cas contraire, les comptes génériques doivent être bien identifiés et référencés.<br/>
            Proposition 5 : <br/>
            Merci d'indiquer quels facteurs vous utilisez.<br/>
            Proposition 6 :<br/>
            Merci de préciser les procédures : habilitation, révocation, revue des comptes, revue des habilitations.<br/>
            Proposition 7 : <br/>
            Merci de préciser à minima : longueur/compléxité, période de validité, nombre de tentative avant blocage du compte.<br/>
            Proposition 8 : <br/>
            Merci d'indiquer la durée de conservation des logs et le type de contenu.<br/>
            Proposition 9 : <br/>
            A minima, le chiffrement des mots de passe en stockage et en transmission.<br/>
            Proposition 10 : <br/>
            Cette disponibilité doit pouvoir se faire dans l'interface utilisateur ou administrateur de l'outil ou à la demande explicite de EHS.<br/>
            Merci de préciser la période de conservation des logs.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="spe_rule" v-if="showSpe">
          <h5>Objectifs</h5>
          <p>
            Cet partie item de savoir si le partenaire à mis en place la sécurité nécessaire pour détecter les intrusions, le vol mais aussi pour prévenir les risques de dégradation environnementaux comme le feu.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            On parle des environnements de production, préproduction et de test.<br/>
            Et des données EHS vis à vis des autres clients du partenaire.<br/>
            Proposition 2 : <br/>
            Dans le cas contraire, merci de préciser quelles données et quels tiers.<br/>
            Proposition 3 : <br/>
            Merci de préciser les sites d'hébergement principaux, de secours et de prévenir EHS en cas de déménagement.<br/>
            Proposition 4 : <br/>
            Proposition 5 : <br/>
            On parle d'alarmes anti-intrusion, dispositif anti-incendie, protection contre les dégats des eaux, ...).<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="a_rule" v-if="showA">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de savoir si le partenaire dispose de règles de sécurité suffisante sur la gestion de ses actifs (matériels et immatériels). On parle ici des données mais aussi des supports, des hardware, software, etc...
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Merci de préciser l'algorithme de chiffrement.<br/>
            Proposition 2 : <br/>
            Proposition 3 : <br/>
            Merci de nous founir la procédure de restitution/destruction des données et des supports.<br/>
            Proposition 4 : <br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="ie_rule" v-if="showIe">
          <h5>Objectifs</h5>
          <p>
            Le partenaire renseigne ici pour les lignes applicables, sa capacité a tenir à jour un inventaire complet des équipements/instances Cloud qui sont utilisés dans le cadre de sa prestation.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            On parle des postes de travail, des serveurs, des shares, des applications et des équipements de sécurité.<br/>
            Proposition 2 : <br/>
            Merci de préciser les hébergeurs.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="se_rule" v-if="showSe">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de s'assurer que le partenaire à mis en place des mesures afin de garantir la sécurité des composants utilisés dans le cadre de sa prestation.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Merci de préciser la procédure de durcissement.<br/>
            Proposition 2 : <br/>
            Mervi de préciser les antivirus utilisés sur les postes, les serveurs, leurs versions et la fréquence des mises à jour.<br/>
            Proposition 3 : <br/>
            Merci de préciser la procédure de patch management.<br/>
            Proposition 4 : <br/>
            Merci de préciser la durée de conservation de ces logs.<br/>
            Proposition 5 : <br/>
            Proposition 6 : <br/>
            Merci de préciser les mesures implémentées.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="c_rule" v-if="showC">
          <h5>Objectifs</h5>
          <p>
            La fourniture d'un schéma d'architecture physique et logique des flux (données), permet d'avoir une vue synthétique sur les modes, technologies et typologies des éléments qui entre en jeu pour assurer la protection des données.<br/>
            Note : pour les petites structures, ce schéma peu être aussi l'inventaire des assets physiques si l'exhaustivité y apparaît.
          </p>
          <h5>Attendus</h5>
          <p>
            Proposition 1 :<br/>
            Vous pouvez ajouter le schéma d'architecture dans la partie fichier de l'application Conformité.<br/>
            Merci de préciser le type de flux et le sens (import / export).<br/>
            Proposition 2 : <br/>
            Merci de préciser l'algorithme de chiffrement.<br/>
            Proposition 3 : <br/>
            Vous pouvez ajouter la matrice de flux dans la partie fichier de l'application Conformité.<br/>
            Proposition 4 : <br/>
            Merci d'indiquer les composants sécurités implémentés.<br/>
            Proposition 5 : <br/>
            Merci d'indiquer les composants sécurités implémentés.<br/>
            Proposition 6 : <br/>
            A minima, ce doit être du WPA2 ou du WPA2-PSK.<br/>
            Proposition 7 : <br/>
            Merci d'indiquer les composants sécurités implémentés.<br/>
            Proposition 8 : <br/>
            Merci d'indiquer les composants sécurités implémentés.<br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
        <div id="adm_rule" v-if="showAdm">
          <h5>Objectifs</h5>
          <p>
            Cet item permet de savoir si le partenaire à mis en place des procédures pour sécuriser son SI lors de développement logiciel par exemple. On parle ici de bonnes pratiques de développement, anonymisation des données et procédures de protection des codes sources par exemple.
          </p>
          <h5>Attendus</h5>
          <p>     
            Proposition 1 : <br/>
            Proposition 2 : <br/>
            Voici des recommandations : <br/>
            SHA-256, SHA-512 ou SHA-3 comme fonction de hachage ;<br/>
            HMAC utilisant SHA-256, bcrypt, scrypt ou PBKDF2 pour stocker les mots de passe ;<br/>
            AES ou AES-CBC pour le chiffrement symétrique ;<br/>
            RSA-OAEP comme défini dans PKCS#1 v2.1 pour le chiffrement asymétrique ;<br/>
            Pour les signatures, RSA-SSA-PSS comme spécifié dans PKCS#1 v2.1.<br/>
            Pour le protocole de chiffrement TLS, la version 1.2 à minima doit être implémentée et les versions inférieures bloquées.<br/>
            Pour AES il est recommandé d’utiliser des clés de 128 bits et, pour les algorithmes basés sur RSA, des modules et exposants secrets d’au moins 2048 bits ou 3072 bits, avec des exposants publics, pour le chiffrement, supérieurs à 65536.<br/>
            Protéger les clés secrètes, au minimum par la mise en œuvre de droits d’accès restrictifs et d’un mot de passe sûr.<br/>
            Une procédure indique la manière dont les clés et certificats vont être gérés en prenant en compte les cas d’oubli de mot de passe de déverrouillage [recommandations CNIL]<br/>
            Proposition 3 : <br/>
            Nous vous conseillons l'utilisation d'un coffre-fort.<br/>
            Proposition 4 : <br/>
            Merci d'indiquer les mesures de sécurité implémentés : contrôle des accès, traçabilité, ...<br/>
            Proposition 5 : <br/>
            Merci d'indiquer les mesures de sécurité implémentés.<br/>
            Proposition 6 : <br/>
            A titre d'exemples : les applications headers, les csp, et les vulnéraibilités présentes dans le top10 OWASP.<br/>
            Proposition 7 : <br/><br/>
            Nous attendons que vous répondiez soit : 
            <ul>
              <li>Oui, si vous estimez que vous répondez aux attentes de la propostion.</li>
              <li>Non, si vous estimez que vous ne répondez pas aux attentes de la propostion.</li>
              <li>En cours, si vous avez pris l'initiative de commencer à répondre aux attentes de la proposition.</li>
              <li>Partiel, si vous estimez que vous répondez partiellement aux attentes de la propostion.</li>
              <li>N/A, si vous estimez que cette proposition ne s'applique pas à vous.</li>
            </ul>
            Si vous avez des informations supplémentaires à nous communiquer sur une ou plusieurs des propositions, un champ dédié est à votre disposition.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        showApp: false,
        showPartnerContact: false,
        showFile: false,
        showRule: false,
        showCo: false,
        showTdt: false,
        showG: false,
        showPt: false,
        showRh: false,
        showGca: false,
        showGi: false,
        showRgpd: false,
        showCd: false,
        showRf: false,
        showCa: false,
        showSpe: false,
        showA: false,
        showIe: false,
        showSe: false,
        showC: false,
        showAdm: false,
      }
    },
    methods: {
      showAppInput(){
        this.showPartnerContact = false;
        this.showFile = false;
        this.showRule = false;
        this.showApp = !this.showApp;
      },
      showPartnerContactInput(){
        this.showApp = false;
        this.showFile = false;
        this.showRule = false;
        this.showPartnerContact = !this.showPartnerContact;
      },
      showFileInput(){
        this.showApp = false;
        this.showPartnerContact = false;
        this.showRule = false;
        this.showFile = !this.showFile;
      },
      showRuleInput(){
        this.showApp = false;
        this.showPartnerContact = false;
        this.showFile = false;
        this.showRule = !this.showRule;
      },
      showCoInput(){
        this.showCo = !this.showCo;
        this.showTdt = false;
        this.showG = false;
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showTdtInput(){
        this.showCo = false;
        this.showTdt = !this.showTdt;
        this.showG = false;
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showGInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = !this.showG;
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showPtInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false;
        this.showPt = !this.showPt;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showRhInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = !this.showRh;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showGcaInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = !this.showGca;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showGiInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = !this.showGi;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showRgpdInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = !this.showRgpd;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showCdInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = !this.showCd;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showRfInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = !this.showRf;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showCaInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = !this.showCa;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showSpeInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = !this.showSpe;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showAInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = !this.showA;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showIeInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = !this.showIe;
        this.showSe = false;
        this.showC = false;
        this.showAdm = false;
      },
      showSeInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = !this.showSe;
        this.showC = false;
        this.showAdm = false;
      },
      showCInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = !this.showC;
        this.showAdm = false;
      },
      showAdmInput(){
        this.showCo = false;
        this.showTdt = false;
        this.showG = false
        this.showPt = false;
        this.showRh = false;
        this.showGca = false;
        this.showGi = false;
        this.showRgpd = false;
        this.showCd = false;
        this.showRf = false;
        this.showCa = false;
        this.showSpe = false;
        this.showA = false;
        this.showIe = false;
        this.showSe = false;
        this.showC = false;
        this.showAdm = !this.showAdm;
      }
    }
  }
</script>