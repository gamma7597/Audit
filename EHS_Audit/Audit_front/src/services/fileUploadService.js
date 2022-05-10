import axios from 'axios'
import Vue from 'vue'
import { url } from '../store/modules/axiosUrl'


class FileUploadService {
  upload(company, file, onUploadProgress) {
    console.log("test upload")
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

  getFiles(company) {
    var accessToken = Vue.prototype.$auth.getAccessToken();
    return axios.get(url + "api/files/" + company + "/files", {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }

  deleteFile(company, fileName) {
    
    var accessToken = Vue.prototype.$auth.getAccessToken();
    return axios.delete(url + "api/files/" + company + "/files/" + fileName, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
  }

  download(company, filename){
    var accessToken = Vue.prototype.$auth.getAccessToken();
    return axios.get(url + "api/files/" + company + "/files/" + filename, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      responseType: 'Blob'
    })
    .then((response) => {
      var fileURL = window.URL.createObjectURL(new Blob([response.data]));
      var fURL = document.createElement('a');

      fURL.href = fileURL;
      fURL.setAttribute('download', filename);
      document.body.appendChild(fURL);

      fURL.click();
    })
  }
}

export default new FileUploadService();
