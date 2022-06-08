import axios from 'axios'
import Vue from 'vue'
import { url } from '../store/modules/axiosUrl'


class FileUploadService {
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
}

export default new FileUploadService();
