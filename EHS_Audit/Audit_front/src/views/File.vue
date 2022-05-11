<template>
  <div>

    <button class="button_blue" @click="goToPartner(partner.company)">Retour</button>

    <div id="container">
      <h2>Vous pouvez ajouter ou supprimer des fichiers / images sur cette page.</h2>
      <p>
        Vous êtes limités aux types : jpeg / png / pdf / word / excel / powerpoint.<br />
        Nous vous conseillons d'ajouter vos documents cybersécurité tels que : <br />
        PSSI / Schéma de flux / Contrats / Chartes / Etc ...
      </p>
    </div>
    
    <div>
      <label>
        <input type="file" ref="file" @change="selectFile" />
      </label>
      <button class="button_blue" :disabled="!selectedFiles" @click="upload()">Ajouter</button>
    </div>


    <div class="card">
      <div class="card-header">Liste des fichiers</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
        >
          <button class="button_blue" @click="download(partner.company, file.name)">{{ file.name }}</button>

          <button class="button_blue" @click="deleteFile(file)">Supprimer</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FileUploadService from "../services/fileUploadService";
import { mapState } from "vuex";

export default {
  name: "upload-files",
  data() {
    return {
      selectedFiles: undefined,
      currentFile: undefined,
      message: "",

      fileInfos: []
    };
  },
  computed: {
    ...mapState("partner", ["partner"]),
  },
  methods: {
    goToPartner(partner){
      this.$router.push("/partner/" + partner)
    },
    deleteFile(file) {
      const fileName = file.name
      FileUploadService.deleteFile(this.partner.company, fileName)
      FileUploadService.getFiles(this.partner.company).then(response => {
        this.fileInfos = response.data;
      });
    },
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },
    download(company, name){
      FileUploadService.download(company, name)
    },
    upload() {
      this.progress = 0;

      this.currentFile = this.selectedFiles.item(0);
      FileUploadService.upload(this.partner.company ,this.currentFile)
        .then(response => {
          this.message = response.data.message;
          return FileUploadService.getFiles(this.partner.company);
        })
        .then(files => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          this.message = "Could not upload the file!";
          this.currentFile = undefined;
        });

      this.selectedFiles = undefined;
    }
  },
  mounted() {
    FileUploadService.getFiles(this.partner.company).then(response => {
      this.fileInfos = response.data;
    });
  }
};
</script>