# Services

## FileUploadServices.js

Ce fichier permet d'effectuer des actions sur les fichiers en envoyant des reqêtes HTTP au back via Axios.
Il permet entre autre de :

- Upload
- Download
- Lister
- Supprimer

On définit donc plusieurs fonctions dans une classe exporté.

    import axios from 'axios'
    import Vue from 'vue'
    import { url } from '../store/modules/axiosUrl'

On commence par importer Vue, Axios et l'URL du back-end.

    upload(company, file, onUploadProgress) {
      let formData = new FormData();

      formData.append("file", file);
      
      var accessToken = Vue.prototype.$auth.getAccessToken();
      return axios.post(url + "api/files/"+ company +"/upload", formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress
      });
    }

Cette première fonction permet de d'uplaoder un fichier.
On ajoute dans un formdata le fichier.
Grâce à Okta, on va ensuite récupérer le token d'authentification et l'ajouter dans un header Authorization.
On ajoute aussi un content-type permettant d'envoyer des fichiers via Axios.
Enfin, on effectue une requête POST sur le back-end.

    getFiles(company) {
      var accessToken = Vue.prototype.$auth.getAccessToken();
      return axios.get(url + "api/files/" + company + "/files", {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
    }

Cette seconde fonction permet de lister les fichiers d'un partenaire.
On commence par ajouté un header Authorization pour l'accès au back-end.
Puis on effectue une requête GET vers le back-end.

La fonction delete est sur le même principe que celle pour lister.

    download(company, name){
      var accessToken = Vue.prototype.$auth.getAccessToken();
      return axios.get(url + "api/files/" + company + "/files/" + name, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
        responseType: "arraybuffer"
      })
      .then(response => {
        var blob = new Blob([response.data], {type:response.headers[("content-type")]});
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = name;
        link.click();
      })
    }

Cette dernière fonction permet à un utilisateur de download un fichier sur son pc.
On effectue une requête GET du fichier en question sur le back-end.
La données de la réponse de la requête vont ensuite être formaté en Blob.
On va enfin créer un document qui sera télécharger grâce au click de l'utilisateur.

## extractPDF.js

Le fichier extractPDF.js permet d'extract la base de donnée au format PDF.

On commence par importer :

    import { url } from '../store/modules/axiosUrl'
    import Axios from 'axios'
    import Vue from 'vue'

    import pdfMake from "pdfmake/build/pdfmake";
    import pdfFonts from "pdfmake/build/vfs_fonts";
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake permet le parsing du JSON vers le pdf. Il faut donc dans un premier temps récupérer les informations et les mettre sous format JSON.
Pour ce faire nous allons faire des appels API sur la BDD.

Nous avons 2 fonctions pour réaliser des extracts, la première est un extract simple d'un partenaire et de sa maturité globale.
Le second permet de rentrer plus dans les détails avec un extract incluant l'enssemble des réponses des partenaires.

La fonction create est donc le premier type d'extract.
Pour des besoins d'horodatage, on commence par récupérer la date du jour.
Puis on va créer un document avec un titre et du contenu.
Pour cet extract, on récupère les informations du partenaire, de ses contacts et son score de maturité et d'impact pour chaque item.

      pdfMake.createPdf(docDefinition).download('Extract_' + partner.company + '_' + date);

Enfin avec cette ligne de code, pdfMake permet de créer le pdf et de le télécharger sur le pc de l'utilisateur.

La fonction createBig est identique en terme de fonctionnement. Elle va juste récupérer le détails des réponses aux questions pour chaque item.

Pour récupérer les informations de la BDD, nous sommes obligés de faire des requêtes HTTP sur le back-end.

Chacune des fonctions suivantes va donc être une requête HTTP et pour les règles, il y aura aussi un calcul du score de maturité et d'impact à l'instant T.

Enfin la dernière étape est de parser ses données de la BDD en json pour créer le PDF.