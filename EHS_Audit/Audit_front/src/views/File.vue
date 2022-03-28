<template>
  <div>

    <h2>Vous pouvez ajouter ou supprimer des fichiers / images sur cette page.</h2>
    <p>
      Vous êtes limités aux types : jpeg / png / pdf / word / excel / powerpoint.<br />
      Nous vous conseillons d'ajouter vos documents cybersécurité tels que : <br />
      PSSI / Schéma de flux / Contrats / Chartes / Etc ...
    </p>

    <b-button :to="'/partner/'+partner.company" variant="success">Retour</b-button>

    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <label class="btn btn-default">
      <input type="file" ref="file" @change="selectFile" />
    </label>

    <button class="btn btn-success" :disabled="!selectedFiles" @click="upload">
      Ajouter le fichier
    </button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div class="card">
      <div class="card-header">Liste des fichiers</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
        >
          <a :href="file.url">{{ file.name }}</a>
          <button class="btn btn-warning" @click="deleteFile(file)">
            Supprimer
          </button>
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
      progress: 0,
      message: "",

      fileInfos: []
    };
  },
  computed: {
    ...mapState("partner", ["partner"]),
  },
  methods: {
    deleteFile(file) {
      const fileName = file.name
      FileUploadService.deleteFile(this.partner.company, fileName)
    },
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },
    upload() {
      this.progress = 0;

      this.currentFile = this.selectedFiles.item(0);
      FileUploadService.upload(this.partner.company ,this.currentFile, event => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then(response => {
          this.message = response.data.message;
          return FileUploadService.getFiles(this.partner.company);
        })
        .then(files => {
          this.fileInfos = files.data;
        })
        .catch(() => {
          this.progress = 0;
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